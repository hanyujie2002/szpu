<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
:root {
  @apply scrollbar:hidden lg:scrollbar:block lg:scrollbar:h-[8px] lg:scrollbar:w-[4px] lg:scrollbar:bg-[#f5f5f5] lg:scrollbar-thumb:bg-[#333];
  --header-height: 63.75px;
}
</style>

<script setup>
useHead({
  title: '深圳职业技术大学',
  htmlAttrs: {
    lang: 'zh-cn',
  },
});
</script>
