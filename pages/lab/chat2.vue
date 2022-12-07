<script setup lang="ts">
const d = useDraggables({
  chat1: { x: 100, y: 100 },
  chat2: { x: 500, y: 100 },
});
</script>

<template>
  <Stack class="relative grid p-4 md:h-full md:place-items-center md:p-0">
    <Breadboard class="bg-gray-900" />
    <Draggable v-bind="d.chat1">
      <Chat channel="chat1" class="h-[60vw] md:h-[30vw] md:w-[25vw]" />
    </Draggable>
  </Stack>
</template>
