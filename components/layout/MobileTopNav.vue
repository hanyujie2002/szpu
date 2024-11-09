<template>
  <nav
    class="sticky top-0 z-50 flex h-[--header-height] flex-auto bg-[#fba33e] pl-[15px] text-black lg:hidden"
  >
    <ul class="mx-auto my-auto flex w-full max-w-screen-xl gap-4">
      <li class="my-auto list-item">
        <NuxtLink
          class="flex flex-auto rounded text-2xl font-extrabold transition-colors"
          to="/"
          title="Home"
          aria-label="Home Page"
          @click="$emit('hide-fixed-menu')"
          ><img src="~/assets/images/2023/logo_red.png" class="h-[38.25px]"
        /></NuxtLink>
      </li>
      <li class="my-auto ml-auto hidden lg:list-item">
        <button title="Search" aria-label="Open Search Modal">
          <Icon
            name="mdi:search"
            class="size-10 transition-colors hover:text-yellow-500 active:text-yellow-400 sm:size-12"
          />
        </button>
      </li>
      <li class="my-auto hidden lg:list-item">
        <NuxtLink
          target="_blank"
          to="/feed.xml"
          title="RSS"
          aria-label="RSS Feed"
        >
          <Icon
            name="mdi:rss"
            class="size:5 transition-colors hover:text-yellow-500 active:text-yellow-400 sm:size-12"
          />
        </NuxtLink>
      </li>
      <li
        class="ml-auto flex w-[72.25px] items-center justify-center lg:hidden"
      >
        <button
          :class="{ 'burger-button-on': !isMobileSlideNavHidden }"
          aria-label="Toggle Menu"
          @click="$emit('toggle-fixed-menu-state')"
        >
          <div class="relative inline-block h-[18px] w-[28.8958px] text-center">
            <div
              class="absolute left-0 top-1/2 h-[2px] w-full bg-white transition-all duration-300 ease-out before:absolute before:left-0 before:right-0 before:top-[8px] before:h-[2px] before:w-full before:bg-white before:transition-all before:duration-300 before:ease-out after:absolute after:left-0 after:right-0 after:top-[-8px] after:h-[2px] after:w-full after:bg-white after:transition-all after:duration-300 after:ease-out"
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
