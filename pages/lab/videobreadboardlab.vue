<script setup lang="ts">
definePageMeta({
  labTitle: "Video breadboard",
  labIntro: "Combining breadboard background with video",
  labGroup: "Video",
});

const url = "https://sb.err.ee/live/etv.m3u8";
const video = ref<HTMLVideoElement>();
const { width, height } = useVideostreamLegacy(video, url);
const showVideo = ref(true);
const blur = ref(0);

const { theme } = useTheme();
</script>
<template>
  <div class="relative h-full">
    <FadeTransition>
      <video
        v-if="showVideo"
        ref="video"
        muted
        autoplay
        playsinline
        :width="width / 2"
        :height="height / 2"
        class="h-full w-full flex-col object-cover"
        :class="[['', 'invert'][theme]]"
      />
    </FadeTransition>
    <Breadboard
      v-if="showVideo"
      class="bg-black/80"
      :style="{ backdropFilter: 'blur(' + blur + 'px)' }"
    />
    <Breadboard v-else class="bg-gray-900" />
    <Stack class="absolute top-4 left-4 right-4 gap-4 md:top-6 md:left-6">
      <Button small left to="/lab">Lab</Button>
      <Title>Breadboard</Title>
      <Button @click="showVideo = !showVideo">
        Video: {{ showVideo ? "on" : "off" }}
      </Button>
      <div>Blur:</div>
      <Slider v-model="blur" />
    </Stack>
  </div>
</template>

<style>
input[type="range"] {
  @apply accent-green-400;
}
</style>
