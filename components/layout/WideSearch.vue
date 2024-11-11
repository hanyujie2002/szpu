<template>
  <div
    id="searchDialogBox"
    class="invisible fixed left-0 top-0 z-50 h-full w-full opacity-0 duration-[600ms] before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-0 before:bg-[#fba33e] before:opacity-70 before:backdrop-blur-[5px] before:duration-[600ms]"
    :class="{ active: isWideSearchActive }"
  >
    <div
      id="searchBg"
      class="absolute left-0 top-0 h-0 w-full origin-center bg-black/70 bg-cover bg-no-repeat duration-[800ms] ease-[cubic-bezier(.77,0,.175,1)]"
    />
    <div class="absolute left-0 top-1/2 z-20 w-full -translate-y-1/2">
      <div class="overflow-hidden">
        <div id="wrapper" class="translate-y-full duration-[600ms]">
          <div>
            <div class="mb-[24px] text-center text-[24px] text-white">
              请输入搜索关键词!
            </div>
            <div
              class="mx-auto flex w-[640px] max-w-[94%] overflow-hidden rounded-[4.8px]"
            >
              <input
                type="text"
                class="h-[48px] w-[588.792px] flex-shrink flex-grow overflow-clip pl-[19.2px] text-[16px] leading-[6.4px] focus:outline-none"
                style="font-family: Arial, Helvetica"
                autocomplete="off"
              />
              <button
                type="submit"
                class="bg-search-btn h-[48px] w-[51.1979px] flex-shrink-0 bg-[#fba33e] bg-[length:24px] bg-center bg-no-repeat"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="group absolute right-[19.2px] top-[19.2px] z-10 h-[38.3958px] w-[38.3958px] rounded-full bg-white/10"
      @click="$emit('hide-wide-search')"
    >
      <div
        class="bg-close-btn absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[length:9.6px] bg-center bg-no-repeat duration-[600ms] group-hover:rotate-180"
      />
    </button>
  </div>
</template>

<script setup>
defineProps({
  isWideSearchActive: {
    type: Boolean,
    default: false,
  },
});

defineEmits('hide-wide-search');
</script>

<style scoped>
.bg-search-btn {
  background-image: url(~/assets/images/search-btn.svg);
}

.bg-close-btn {
  background-image: url(~/assets/images/close-btn.svg);
}

#searchDialogBox.active {
  @apply !visible !opacity-100;
}

#searchDialogBox.active::before {
  @apply h-full;
}

.active #searchBg {
  @apply h-dvh;
}

.active #wrapper {
  @apply translate-y-0;
}
</style>
