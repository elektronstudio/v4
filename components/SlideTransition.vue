<template>
  <transition-group
    enter-active-class="duration-300 transition-all ease-in"
    enter-from-class="opacity-0 translate-y-16"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="duration-300 transition-all ease-out "
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-16"
  >
    <slot />
  </transition-group>
</template>
