<script setup lang="ts">
definePageMeta({
  labTitle: "Videostreams",
  labIntro: "Testing video providers",
  labGroup: "Video",
});

const [stream1, stream2] = getVideostreams("elektron,anything");

const video1 = ref<HTMLVideoElement | null>(null);
useVideostream(video1, stream1.url);

const video2 = ref<HTMLVideoElement | null>(null);
useVideostream(video2, stream2.url);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">Lab</Button>
    <Title>Streaming test</Title>
    <div class="grid gap-8 md:grid-cols-2">
      <Stack>
        <Title medium>Levira streaming with transcoding</Title>
        <Title small>Input</Title>
        <Code class="break-all text-green-400">
          {{ stream1.ingest }}
        </Code>
        <Title small>Streamkey in OBS etc</Title>
        <Code class="text-green-400">{{ stream1.streamkey }}</Code>
        <Title small>Streamkey in Strapi</Title>
        <Code class="text-blue-500">elektron</Code>
        <video
          ref="video1"
          class="aspect-video w-full"
          autoplay
          playsinline
          crossorigin="anonymous"
          loop
          muted
          controls
        />
        <Title small>HLS output</Title>
        <Code class="break-all">{{ stream1.url }}</Code>
        <Button small :href="stream1.url">Open stream in Safari</Button>
      </Stack>
      <Stack>
        <Title medium>Elektron streaming without transcoding</Title>
        <Title small>Input</Title>
        <Code class="break-all text-green-400">
          {{ stream2.ingest }}
        </Code>
        <Title small>Streamkey in OBS etc</Title>
        <Code class="text-green-400">{{ stream2.streamkey }}</Code>
        <Title small>Streamkey in Strapi</Title>
        <Code class="text-blue-500">anything</Code>
        <video
          ref="video2"
          class="aspect-video w-full"
          autoplay
          playsinline
          crossorigin="anonymous"
          loop
          muted
          controls
        />
        <Title small>HLS output</Title>
        <Code class="break-all">{{ stream2.url }}</Code>
        <Button small :href="stream2.url">Open stream in Safari</Button>
      </Stack>
    </div>
  </Stack>
</template>
