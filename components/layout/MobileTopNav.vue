<template>
  <nav
    class="sticky top-0 z-50 flex h-[--header-height] flex-auto bg-[#fba33e] pl-[15px] text-black lg:hidden"
  >
    <ul class="mx-auto flex h-full w-full max-w-screen-xl items-center">
      <li class="my-auto list-item">
        <NuxtLink
          class="flex flex-auto rounded text-2xl font-extrabold transition-colors"
          to="/"
          title="Home"
          aria-label="Home Page"
          @click="$emit('hide-fixed-menu')"
          ><img src="~/assets/images/2023/logo_red.png" class="h-[38.25px]"
        ></NuxtLink>
      </li>
      <li class="ml-auto">
        <NuxtLink to="xxgk/xxjj" class="group flex items-center">
          <span
            class="mr-[10.2px] uppercase text-white"
            style="font-family: Arial, Helvetica, sans-serif"
            >...</span
          >
          <div
            class="relative z-10 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/50 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-10 before:scale-0 before:rounded-full before:bg-[#fba33e] before:duration-500 before:content-[''] group-hover:before:scale-[1.2]"
          >
            <img
              class="flex h-[16px] w-[16px]"
              style="line-height: 32px"
              src="/images/list1_ico2.svg"
            >
          </div>
        </NuxtLink>
      </li>
      <li class="flex w-[72.25px] items-center justify-center lg:hidden">
        <button
          class="flex"
          :class="{ 'burger-button-on': !isMobileSlideNavHidden }"
          aria-label="Toggle Menu"
          @click="$emit('toggle-fixed-menu-state')"
        >
          <div class="relative inline-block h-[18px] w-[28.8958px] text-center">
            <div
              class="absolute left-0 top-1/2 mt-[-1px] h-[2px] w-full bg-white transition-all duration-300 ease-out before:absolute before:left-0 before:right-0 before:top-[8px] before:h-[2px] before:w-full before:bg-white before:transition-all before:duration-300 before:ease-out after:absolute after:left-0 after:right-0 after:top-[-8px] after:h-[2px] after:w-full after:bg-white after:transition-all after:duration-300 after:ease-out"
            />
          </div>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineProps({
  isMobileSlideNavHidden: {
    type: Boolean,
    default: true,
  },
});

defineEmits(['hide-fixed-menu', 'toggle-fixed-menu-state']);
</script>

<style scoped>
.burger-button-on > div > div {
  @apply bg-transparent;
}

.burger-button-on > div > div::before {
  @apply top-0 -rotate-45;
}

.burger-button-on > div > div::after {
  @apply top-0 rotate-45;
}
</style>
