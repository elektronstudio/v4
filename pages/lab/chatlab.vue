<script setup lang="ts">
definePageMeta({
  labTitle: "Chat",
  labIntro: "Testing chat interactions",
  labGroup: "",
});

const sample =
  "The broad narrative of Hitchhiker follows the misadventures of the last surviving man, Arthur Dent, following the demolition of the Earth by a Vogon constructor fleet to make way for a hyperspace bypass. Dent is rescued from Earth's destruction by Ford Prefect—a human-like alien writer for the eccentric, electronic travel guide The Hitchhiker's Guide to the Galaxy—by hitchhiking onto a passing Vogon spacecraft. Following his rescue, Dent explores the galaxy with Prefect and encounters Trillian, another human who had been taken from Earth (before its destruction) by the two-headed President of the Galaxy Zaphod Beeblebrox and the depressed Marvin, the Paranoid Android. Certain narrative details were changed among the various adaptations.";

const scrollable = ref<HTMLElement | null>(null);
const textarea = ref<HTMLTextAreaElement | HTMLInputElement | null>(null);

const {
  chatMessages,
  newChatMessage,
  sendChatMessage,
  newChatMessagesCount,
  scrollToBottom,
  focus,
} = useChat("test", scrollable, textarea);

const { data: chatMessagesHistory } = await useChatHistory("test");

const paste = () => {
  newChatMessage.value = sample;
  focus.value = true;
};

const scrollToTop = () => (scrollable.value.scrollTop = 0);

const messages = computed(() => [
  ...chatMessagesHistory.value,
  ...chatMessages.value,
]);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">Lab</Button>
    <Title>Chat</Title>
    <div class="w-full">
      <div class="grid h-[70vh] gap-6 md:grid-cols-2">
        <div
          ref="scrollable"
          class="flex flex-col gap-6 overflow-y-auto"
          :class="[newChatMessagesCount ? 'scroll-smooth' : '']"
        >
          <Card
            v-for="message in messages"
            class="whitespace-pre-wrap font-mono"
          >
            {{ message.value }}
          </Card>
        </div>
        <Stack class="justify-end">
          <Textarea ref="textarea" v-model="newChatMessage" />
          <p class="text-xs tracking-wide text-gray-500">
            Shift + Enter for newline, Enter to submit
          </p>
          <div class="flex gap-4">
            <Button class="outline-hidden" @click="paste"> Paste text </Button>
            <Button class="outline-hidden" @click="scrollToTop">
              Scroll to top
            </Button>
            <Button primary @click="sendChatMessage">Send message</Button>
          </div>
        </Stack>
      </div>
      <Button
        v-if="newChatMessagesCount > 0"
        small
        down
        class="mt-4 flex"
        @click="scrollToBottom"
      >
        New messages
      </Button>
    </div></Stack
  >
</template>
