<script setup lang="ts">
const route = useRoute();
const episodeId = route.params.episode_id;

const { data: episode, error } = await usePodcastByEpisodeId(episodeId);
</script>

<template>
  <ErrorCard v-if="error" />
  <Stack v-else class="relative grid h-full p-4 md:place-items-center md:p-6">
    <Breadboard class="hidden md:block" />
    <Button small class="md:absolute md:top-5 md:left-5" left to="/signal">
      Podcast
    </Button>
    <Card class="bg-black md:absolute md:w-[60vw]">
      <PodcastEpisode :episode="episode" />
    </Card>
  </Stack>
</template>
