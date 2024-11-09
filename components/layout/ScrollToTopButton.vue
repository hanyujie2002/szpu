<template>
  <button
    :class="{
      'button-hide': !showButton,
      'transition-all duration-500 ease-out': isButtonLoaded,
    }"
    class="fixed bottom-[68px] right-[8.5px] z-40 block h-[51px] w-[51px] cursor-pointer content-center items-center bg-[#fda42f] text-center"
    style="border-radius: 50%"
    @click="scrollToTop"
  >
    <svg
      t="1684739186087"
      class="icon mt-[-3px] inline-block h-[18.698px] w-[18.698px] fill-white text-center align-middle"
      viewBox="0 0 1024 1024"
      p-id="32468"
      width="18"
      height="18"
    >
      <path
        d="M544.981333 171.178667l1.621334 1.621333 365.781333 365.994667a40.874667 40.874667 0 0 1-28.8 69.546666 40.405333 40.405333 0 0 1-28.714667-11.946666l-338.688-338.901334-339.029333 338.858667a40.576 40.576 0 0 1-57.514667 0 40.874667 40.874667 0 0 1 0-57.557333L516.266667 142.378667l28.714666 28.8z m0 305.066666l1.621334 1.706667 365.781333 365.952a40.874667 40.874667 0 0 1-28.8 69.546667 40.405333 40.405333 0 0 1-28.714667-11.989334l-338.688-338.858666-339.072 338.858666a40.576 40.576 0 0 1-57.557333 0 40.874667 40.874667 0 0 1 0-57.557333l396.629333-396.458667 28.757334 28.8h0.042666z"
        p-id="32469"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
// Show button on it's first loading
const isButtonLoaded = ref(false);
onMounted(() => {
  setTimeout(() => {
    isButtonLoaded.value = true;
  }, 550);
});

// Handle scroll event
const showButton = ref<Boolean>(false);
const buttonShowThreshold = 100;

const handleScroll = () => {
  showButton.value = window.scrollY > buttonShowThreshold;
};

onMounted(() => {
  showButton.value = window.scrollY > buttonShowThreshold;
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Handle click event
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<style scoped>
.button-hide {
  @apply invisible h-0 opacity-0;
}
</style>
