<script setup lang="ts">
import { useMagicKeys, whenever } from "@vueuse/core";
import IconMenu from "~icons/radix-icons/drag-handle-horizontal";

const { theme, changeTheme } = useTheme();
const { lang, changeLang } = useLang();
const menu = ref(false);
</script>

<template>
  <div class="sticky top-0 z-10">
    <div
      class="grid grid-cols-1 bg-black/90 md:grid-cols-[auto_1fr_0.3fr_0.05fr_0.05fr]"
    >
      <div
        class="flex h-9 w-full items-center justify-between border border-gray-700"
      >
        <NuxtLink
          to="/"
          class="flex h-9 items-center px-2 font-title text-2xl lowercase text-gray-400"
          @click="menu = false"
        >
          lab.elektron.art
        </NuxtLink>
        <button
          class="flex h-9 w-10 items-center justify-center border-l border-gray-700 font-mono text-gray-400 md:hidden"
          @click="menu = !menu"
        >
          <IconMenu />
        </button>
      </div>

      <NavButton />
      <a
        href="https://elektron.art"
        target="_blank"
        class="md:block"
        :class="[menu ? 'block' : 'hidden']"
        @click="menu = false"
      >
        <NavButton>{{
          ["Back to elektron", "Back to elektron"][lang]
        }}</NavButton>
      </a>
      <button
        @click="
          () => {
            changeLang();
            menu = false;
          }
        "
        class="text-left md:block"
        :class="[menu ? 'block' : 'hidden']"
      >
        <NavButton>{{ ["eng", "est"][lang] }}</NavButton>
      </button>
      <button
        @click="
          () => {
            changeTheme();
            menu = false;
          }
        "
        class="text-left md:block"
        :class="[menu ? 'block' : 'hidden']"
      >
        <NavButton>
          {{ [["Nite", "Öö"][lang], ["Day", "Päev"][lang]][theme] }}
        </NavButton>
      </button>
    </div>
    <!-- <NavEvent /> -->
  </div>
</template>
