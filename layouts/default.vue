<template>
  <div class="">
     <LayoutMobileTopNav
        :is-mobile-slide-nav-hidden
        @hide-fixed-menu="hideFixedMenu"
        @toggle-fixed-menu-state="toggleFixedMenuState"
      />


    <div class="overflow-x-hidden">
    <LayoutMobileSideNav
      class=""
      :class="
        isMobileSlideNavHidden
          ? 'translate-x-[105vw] opacity-0'
          : 'translate-x-0 opacity-100'
      "
    />

      <LazyLayoutWideTopNav
        @show-wide-slide-nav="showWideSlideNav"
        @show-wide-search="showWideSearch"
      />

      <LazyLayoutWideSideNav
        :is-wide-slide-nav-active
        @hide-wide-slide-nav="hideWideSlideNav"
      />

      <main
        class="mx-auto min-h-[calc(100vh-var(--header-height))] w-full break-words"
      >
        <slot />
      </main>

      <LazyLayoutWideSearch
        :is-wide-search-active
        @hide-wide-search="hideWideSearch"
      />

      <LazyLayoutFooter />

      <LazyLayoutScrollToTopButton />
    </div>
  </div>
</template>

<script setup lang="ts">
const isMobileSlideNavHidden = ref<Boolean>(true);
const isWideSlideNavActive = ref<Boolean>(false);
const isWideSearchActive = ref<Boolean>(false);
const documentElement = ref();

onMounted(() => {
  documentElement.value = document.documentElement;
});

const showWideSlideNav = () => {
  isWideSlideNavActive.value = true;
};

const hideWideSlideNav = () => {
  isWideSlideNavActive.value = false;
};

const hideFixedMenu = () => {
  isMobileSlideNavHidden.value = true;
  documentElement.value.classList.remove('overflow-hidden');
};

const showWideSearch = () => {
  isWideSearchActive.value = true;
};

const hideWideSearch = () => {
  isWideSearchActive.value = false;
};

const toggleFixedMenuState = () => {
  if (isMobileSlideNavHidden.value === true) {
    documentElement.value.classList.add('overflow-hidden');
  } else {
    documentElement.value.classList.remove('overflow-hidden');
  }

  isMobileSlideNavHidden.value = !isMobileSlideNavHidden.value;
};
</script>
