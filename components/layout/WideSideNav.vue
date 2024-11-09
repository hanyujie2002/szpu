<template>
  <div
    id="wideSlideNav"
    class="pointer-events-none fixed right-0 top-0 z-50 hidden h-full w-3/4 max-w-[1500px] p-[10px] before:fixed before:bottom-0 before:left-0 before:right-0 before:top-0 before:h-dvh before:w-full before:bg-black/80 before:opacity-0 before:duration-500 lg:flex"
    :class="{ active: isWideSlideNavActive }"
  >
    <div
      id="menuWrapper"
      class="flex w-[80px] flex-col items-center py-[30px] before:absolute before:right-[10px] before:top-[10px] before:z-10 before:h-[calc(100%_-_20px)] before:w-[calc(100%_-_20px)] before:origin-right before:rounded-2xl before:bg-[#fba33e]"
    >
      <button
        id="hideWideSlideButton"
        class="group relative z-10 flex h-[56px] w-[56px] items-center justify-center px-[10px] py-[16px] transition-transform delay-500 duration-300 ease-[cubic-bezier(.44,0,0,1)] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-2xl before:bg-white/30 before:delay-[50ms] before:duration-500 before:ease-[cubic-bezier(.44,0,0,1)] hover:before:rotate-90"
        @click="$emit('hide-wide-slide-nav')"
      >
        <img
          class="h-[24px] w-[24px] duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:rotate-90 group-hover:scale-125"
          alt="Close menu button"
          src="~/assets/images/close-menu.png"
        />
      </button>
    </div>

    <div class="relative h-full w-[calc(100%_-_80px)]">
      <div
        id="menuContainer"
        class="relative flex h-full flex-col overflow-hidden rounded-2xl px-[60px] pb-[30px] pt-[50px] before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:origin-right before:bg-white"
      >
        <div class="z-20">
          <div class="mb-[4vh] flex items-center justify-between">
            <div
              class="relative overflow-hidden text-[66.55px] leading-[66.55px]"
              style="font-family: neue-haas-unica, sans-serif"
            >
              <span id="logoWrapper" class="inline-block">
                <img
                  class="inline overflow-clip"
                  src="~/assets/images/logo_new_small.jpg"
                />
              </span>
            </div>
          </div>
        </div>

        <div
          id="menuCategories"
          class="relative z-20 mx-[-8px] flex flex-wrap py-[6vh] before:absolute before:left-[-60px] before:top-0 before:h-[1px] before:w-[calc(100%_+_120px)] before:origin-right before:bg-black/10 after:absolute after:bottom-0 after:left-[-60px] after:h-[1px] after:w-[calc(100%_+_120px)] after:origin-right after:bg-black/10"
        >
          <div class="w-1/4 px-[8px] py-[24px]">
            <div class="relative overflow-hidden">
              <h3 class="menuCategory inline-block text-[14.4px] font-semibold">
                学校概况
              </h3>
            </div>

            <div class="mt-[16px] overflow-hidden">
              <ul class="menuCategoryItem flex flex-wrap">
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >学校简介</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >深职标识</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >现任领导</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >信息公开</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >历任领导</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >历史回眸</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >校园风光</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >校园地图</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="w-1/4 px-[8px] py-[24px]">
            <div class="relative overflow-hidden">
              <h3 class="menuCategory inline-block text-[14.4px] font-semibold">
                组织机构
              </h3>
            </div>

            <div class="mt-[16px] overflow-hidden">
              <ul class="menuCategoryItem flex flex-wrap">
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >教学、教辅部门</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >研究院所</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >行政、职能部门</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >公司</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="w-1/4 px-[8px] py-[24px]">
            <div class="relative overflow-hidden">
              <h3 class="menuCategory inline-block text-[14.4px] font-semibold">
                教育教学
              </h3>
            </div>

            <div class="mt-[16px] overflow-hidden">
              <ul class="menuCategoryItem flex flex-wrap">
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >师资队伍</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >人才招聘</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >专业设置</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >人才培养</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >产教融合</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >双创教育</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >学生事务</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >深职i学习</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="w-1/4 px-[8px] py-[24px]">
            <div class="relative overflow-hidden">
              <h3 class="menuCategory inline-block text-[14.4px] font-semibold">
                科学研究
              </h3>
            </div>

            <div class="mt-[16px] overflow-hidden">
              <ul class="menuCategoryItem flex flex-wrap">
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >应用研发</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >产学研用</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >学术科研</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >研究院所</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="w-1/4 px-[8px] py-[24px]">
            <div class="relative overflow-hidden">
              <h3 class="menuCategory inline-block text-[14.4px] font-semibold">
                招生就业
              </h3>
            </div>

            <div class="mt-[16px] overflow-hidden">
              <ul class="menuCategoryItem flex flex-wrap">
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >学历教育</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >港澳台招生</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >就业创业</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >深职榜样</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="w-1/4 px-[8px] py-[24px]">
            <div class="relative overflow-hidden">
              <h3 class="menuCategory inline-block text-[14.4px] font-semibold">
                国际交流
              </h3>
            </div>

            <div class="mt-[16px] overflow-hidden">
              <ul class="menuCategoryItem flex flex-wrap">
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >国际平台</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >国际交流</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="w-1/4 px-[8px] py-[24px]">
            <div class="relative overflow-hidden">
              <h3 class="menuCategory inline-block text-[14.4px] font-semibold">
                校园生活
              </h3>
            </div>

            <div class="mt-[16px] overflow-hidden">
              <ul class="menuCategoryItem flex flex-wrap">
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >生活服务</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >网络服务</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >VPN</NuxtLink
                  >
                </li>
                <li
                  class="group min-w-[33.33%] pr-1 text-[11.2px] leading-[22.4px]"
                >
                  <NuxtLink
                    to="xxgk/xxjj"
                    class="duration-500 ease-[cubic-bezier(.44,0,0,1)] group-hover:text-[#fba33e]"
                    >一网通办</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="absolute bottom-[40px] left-[60px] z-20 mt-[30px] overflow-hidden text-[12px] leading-[12px]"
        >
          <p id="menuCopyright">
            Copyright © SHENZHEN POLYTECHNIC UNIVERSITY. All Rights Reserved
            备案号：
            <NuxtLink>粤ICP备15008843号</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isWideSlideNavActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
#wideSlideNav::before {
  --delay: 0.4s;
  transition: 0.5s calc(0.7s + var(--delay)) opacity;
}

#wideSlideNav.active {
  @apply pointer-events-auto;
}

#wideSlideNav.active::before {
  @apply opacity-100;
  transition: 0.5s opacity;
}

#hideWideSlideButton {
  transform: scale3d(0, 0, 0) rotate(-45deg);
}

.active #hideWideSlideButton {
  transform: scaleZ(1) !important;
}

#menuWrapper::before {
  transform: scale3d(0, 1, 1);
  transition: transform 0.6s 0.7s cubic-bezier(0.72, -0.01, 0.33, 1);
}

.active #menuWrapper::before {
  transform: scaleZ(1) !important;
  transition: transform 0.6s 0s cubic-bezier(0.44, 0, 0, 1) !important;
}

#menuContainer::before {
  transform: scale3d(0, 1, 1);
  transition: transform 0.6s 0.6s cubic-bezier(0.72, -0.01, 0.33, 1);
}

.active #menuContainer::before {
  transform: scaleZ(1) !important;
  transition: transform 0.6s 0.1s cubic-bezier(0.44, 0, 0, 1) !important;
}

#logoWrapper {
  --line-delay: 0.4s;
  transform: translate3d(0px, 100%, 0px);
  transition:
    0.5s calc(var(--line-delay) - 0.4s) transform cubic-bezier(0.44, 0, 0, 1),
    0.5s calc(var(--line-delay) - 0.4s) opacity cubic-bezier(0.44, 0, 0, 1);
}

.active #logoWrapper {
  --line-delay: 0.4s;
  transition: 0.5s var(--line-delay) transform cubic-bezier(0.44, 0, 0, 1) !important;
  transform: translate3d(0, 0, 0);
}

#menuCategories::before {
  --delay: 1s;
  transition: transform 1s cubic-bezier(0.44, 0, 0, 1);
  transform: scale3d(0, 1, 1);
}

.active #menuCategories::before {
  --delay: 1s;
  transform: scaleZ(1) !important;
  transition: 0.5s calc(0.5s + var(--delay)) cubic-bezier(0.44, 0, 0, 1) !important;
}

#menuCategories::after {
  --delay: 1s;
  transition: transform 1s cubic-bezier(0.44, 0, 0, 1);
  transform: scale3d(0, 1, 1);
}

.active #menuCategories::after {
  --delay: 1s;
  transform: scaleZ(1) !important;
  transition: 0.5s calc(0.5s + var(--delay)) cubic-bezier(0.44, 0, 0, 1) !important;
}

.menuCategory {
  --line-delay: 0.4s;
  transition:
    0.5s calc(var(--line-delay) - 0.4s) transform cubic-bezier(0.44, 0, 0, 1),
    0.5s calc(var(--line-delay) - 0.4s) opacity cubic-bezier(0.44, 0, 0, 1);
  transform: translate3d(0px, 110%, 0px);
  opacity: 0;
}

.active .menuCategory {
  --line-delay: 0.4s;
  transform: translateZ(0) !important;
  transition: 0.5s var(--line-delay) transform cubic-bezier(0.44, 0, 0, 1) !important;
  opacity: 1;
}

.menuCategoryItem {
  --delay: 0.4s;
  --line-delay: 0.4s;
  transform: translate3d(0px, 100%, 0px);
}

.active .menuCategoryItem {
  transform: translateZ(0) !important;
  transition: 0.5s var(--line-delay) transform cubic-bezier(0.44, 0, 0, 1) !important;
}

#menuCopyright {
  --delay: 0.4s;
  transform: translate3d(0, 100%, 0);
  transition: transform 0.5s cubic-bezier(0.44, 0, 0, 1);
}

.active #menuCopyright {
  --delay: 0.4s;
  transform: translateZ(0) !important;
  transition: 0.5s calc(0.5s + var(--delay)) cubic-bezier(0.44, 0, 0, 1) !important;
}
</style>
