<script setup lang="ts">
definePageMeta({
  labTitle: "Controls",
  labIntro: "Controls data now working? Fix them here",
  labGroup: "Experiments",
});

const defaultControls = `channel: experiment
type: DATA_1
title: How do you feel!!!!
labels: 🤯,😇,😃
min: 0
max: 5
step: 1
description: Please: enter some data
---
channel: experiment
type: DATA_2
title:  Some other data
min: 0
step: 0.01`;

const controls = ref(defaultControls);
const parsedControls = computed(() => parseControls(controls.value));
const { messages } = useMessages();
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">Lab</Button>
    <Title>Controls debugger</Title>
    <div class="grid items-start gap-8 md:grid-cols-4">
      <Stack>
        <Title medium>Controls field in Strapi</Title>
        <Textarea v-model="controls" class="text-sm" />
      </Stack>
      <Stack>
        <Title medium>Rendered controls</Title>
        <Card>
          <Controls :controls="parsedControls" />
        </Card>
        <div class="whitespace-pre-wrap font-mono text-sm text-gray-400">
          {{ parsedControls }}
        </div>
      </Stack>
      <Stack class="h-[80vh] overflow-auto">
        <Title medium>Websocket messages</Title>
        <div class="font-mono text-sm">wss://data.elektron.art</div>
        <Button @click="messages = []" :disabled="!messages.length">
          Clear messages
        </Button>
        <ClientOnly>
          <MoveTransition>
            <div
              v-for="m in messages.filter((m) =>
                parsedControls.map((c) => c.channel).includes(m.channel)
              )"
              :key="m.id"
              class="whitespace-pre-wrap font-mono text-sm text-gray-400"
            >
              {{ m }}
            </div>
          </MoveTransition>
        </ClientOnly>
      </Stack>
      <Stack>
        <Title medium>Parsed data</Title>
        <ControlsData :messages="messages" :controls="parsedControls" />
      </Stack>
    </div>
  </Stack>
</template>
