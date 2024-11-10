<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: '深圳职业技术大学',
  htmlAttrs: {
    lang: 'zh-cn',
  },
});
</script>

<style>
:root {
  --header-height: 63.75px;
}
</style>
