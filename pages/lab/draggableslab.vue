<script setup lang="ts">
definePageMeta({
  labTitle: "Draggable",
  labIntro: "Testing Draggable and useDraggables",
  labGroup: "",
});

const draggables = useDraggables({
  first: { x: 200, y: 200 },
  second: { x: 300, y: 300 },
  third: { x: 400, y: 400 },
});
</script>

<template>
  <div class="p-4 md:p-6">
    <Dock :draggables="draggables" />
    <Draggable v-for="(draggable, key) in draggables" v-bind="draggable">
      <Stack class="p-8">
        <Title small>{{ key }}</Title>
        <Button @click="draggable.setDocked">Dock it</Button>
      </Stack>
    </Draggable>
  </div>
</template>
