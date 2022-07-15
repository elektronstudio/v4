<script setup lang="ts">
import parse from "@rgrove/parse-xml";
import fla from "flat";
import { e } from "ohmyfetch/dist/error-d4c70d05";
const url = "http://164.92.185.149:8080/hls/stream.m3u8";
const url2 = "http://164.92.185.149:8080/hls/stream2.m3u8";
const { data } = await useFetch("http://164.92.185.149:8080/stats.xsl");
//const a = parseString(data.value);
const a = parse(data.value as string).toJSON().children[1].children;
const props = {
  nginx_version: null,
  nginx_rtmp_version: null,
  built: null,
  pid: null,
  uptime: null,
  naccepted: null,
  bw_in: null,
  bytes_in: null,
  bw_out: null,
  bytes_out: null,
  server: null,
  application: null,
  live: null,
  nclients: null,
  width: null,
  height: null,
  stream: null,
  name: null,
  time: null,
};

const safeParseFloat = (str) => {
  const f = parseFloat(str);
  return isNaN(f) ? str : f;
};
// const children = (el) => {
//   console.log(el.name);
//   if (
//     Object.keys(props).includes(el.name) &&
//     el.children[0].text !== "\n" /* &&
//     el.type === "element" &&
//     el.children?.length === 1 &&
//     el.children[0].type === "text"*/
//   ) {
//     props[el.name] = safeParseFloat(el.children[0].text);
//   }
//   if (el.children) {
//     el.children.forEach(children);
//   }
// };

const name = (arr, n) => {
  //const regex = /\.*\./gm;
  const value = arr.find(({ name }) => name === n).children[0].text;
  // return regex.exec(value)?.index < 2 safeParseFloat(value) : value
  return isNaN(value) ? value : parseFloat(value);
};
const f = (arr, n) => arr.find(({ name }) => name === n).children;
const ff = (arr, n) => arr.filter(({ name }) => name === n);

const stream = f(f(f(a, "server"), "application"), "live");

const streamKeys = ["name", "time", "nclients"];
const videoKeys = [
  "width",
  "height",
  "frame_rate",
  "codec",
  "profile",
  "compat",
  "level",
];
const clientKeys = ["id", "time", "dropped", "avsync", "timestamp", "address"];
const audioKeys = ["codec", "profile", "channels", "sample_rate"];
const clients = ff(stream, "stream").map(({ children: c }) => {
  //return c;
  const data = Object.fromEntries(streamKeys.map((key) => [key, name(c, key)]));
  const audio = f(f(c, "meta"), "audio");
  data.audio = Object.fromEntries(
    audioKeys.map((key) => [key, name(audio, key)])
  );
  const video = f(f(c, "meta"), "video");
  data.video = Object.fromEntries(
    videoKeys.map((key) => [key, name(video, key)])
  );
  const publisher = f(c, "client");
  data.publisher = Object.fromEntries(
    clientKeys.map((key) => [key, name(publisher, key)])
  );
  return data;
});
</script>

<template>
  <div class="p-4 md:p-6">
    <Videostream :url="url" class="border-4 border-red-500" />
    <Videostream :url="url2" class="border-4 border-red-500" />
    <pre>{{ clients }}</pre>
  </div>
</template>
