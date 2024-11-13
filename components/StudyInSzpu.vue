<template>
  <section class="relative overflow-hidden pb-[106.25px] pt-[85px]">
    <div
      ref="home3Bg"
      class="home3-bg absolute bottom-0 left-0 right-0 top-0 -z-10 bg-bottom bg-no-repeat transition-transform duration-700 ease-out"
    />
    <div
      class="flex w-full flex-wrap items-center px-[15px] md:px-[59.5px] lg:mx-auto lg:w-[1200px] lg:max-w-[94%] lg:px-0"
    >
      <button class="w-full select-none md:w-[56%]" @click="showVideoPlay">
        <ul data-aos="fade-up" class="!duration-1000">
          <li class="list-item">
            <NuxtLink class="group relative block">
              <div
                class="overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-[rgba(253,164,47,0.7)] after:opacity-0 after:transition-all after:duration-500 group-hover:after:opacity-100"
              >
                <NuxtImg
                  format="webp"
                  quality="80"
                  src="/images/list7_img1.jpg"
                  class="h-full w-full object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08]"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center"
              >
                <div class="relative h-[74.7917px] w-[74.7917px]">
                  <img src="~/assets/images/list7_ico1.png" />
                  <div class="absolute bottom-0 left-0 right-0 top-0">
                    <div
                      class="absolute h-[73.458px] w-[73.458px] animate-circle rounded-full border-[0.667px] border-[rgba(255,255,255,0.5)]"
                    />
                    <div
                      class="absolute h-[73.458px] w-[73.458px] animate-circle rounded-full border-[0.667px] border-[rgba(255,255,255,0.5)]"
                      style="animation-delay: 500ms"
                    />
                    <div
                      class="absolute h-[73.458px] w-[73.458px] animate-circle rounded-full border-[0.667px] border-[rgba(255,255,255,0.5)] delay-1000"
                      style="animation-delay: 1000ms"
                    />
                  </div>
                  <NuxtImg
                    format="webp"
                    quality="80"
                    src="/images/list7_ico.png"
                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full animate-rotate"
                  />
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </button>

      <div
        class="w-full pt-[42.5px] md:w-[calc(100%_-_56%)] md:pl-[8%] md:pt-0"
      >
        <div
          class="mb-[46.75px] flex flex-wrap !duration-1000"
          data-aos="fade-up"
        >
          <NuxtLink to="kxyj/xsky">
            <div
              class="relative pl-[17px] before:absolute before:bottom-0 before:left-0 before:top-0 before:w-[3px] before:bg-[#ff860b] before:content-['']"
            >
              <div
                class="uppercase"
                style="font-size: 13.6px; line-height: 13.6px"
              >
                Study in Shenzhen Polytechnic
              </div>
              <div
                class="mt-[8.5px] font-semibold"
                style="font-size: 28.9px; line-height: 28.9px"
              >
                入读深职
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="mb-[25.5px] mt-[-8.5px] !duration-1000" data-aos="fade-up">
          <p
            class="text-justify indent-[2em] text-[#898989]"
            style="font-size: 14.45px; line-height: 23.12px"
          >
            深圳职业技术大学创建于1993年，是国内最早独立举办高等职业技术教育的院校之一，建校以来，学校始终秉承特区“敢为天下先”的改革创新精神，开拓进取，创造了中国高职教育的多个第一。
          </p>
        </div>

        <ul
          class="mx-[-30.6px] flex flex-wrap !duration-1000 md:font-bold"
          data-aos="fade-up"
        >
          <li class="group list-item w-1/2 px-[30.6px]">
            <NuxtLink
              class="flex h-[51px] items-center justify-between border-b border-[#bbbbbb]"
              to="https://zhaosheng.szpu.edu.cn/info/1061/1931.htm"
              target="_blank"
            >
              <h4
                class="w-full overflow-hidden text-ellipsis text-nowrap text-left duration-500 lg:group-hover:text-[#fba33e]"
                style="line-height: 23.375px; font-size: 18.7px"
              >
                自主招生
              </h4>
              <div
                class="bg-list7 relative z-10 flex items-center overflow-hidden before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:translate-x-[-110%] before:bg-[length:100%_100%] before:bg-center before:bg-no-repeat before:duration-500 lg:group-hover:before:translate-x-0"
              >
                <NuxtImg
                  quality="80"
                  src="/images/list7.svg"
                  class="w-[25.5px] overflow-clip duration-500 lg:w-[24px] lg:group-hover:translate-x-[110%]"
                />
              </div>
            </NuxtLink>
          </li>

          <li class="group list-item w-1/2 px-[30.6px]">
            <NuxtLink
              class="flex h-[51px] items-center justify-between border-b border-[#bbbbbb]"
              to="https://zhaosheng.szpu.edu.cn/"
              target="_blank"
            >
              <h4
                class="w-full overflow-hidden text-ellipsis text-nowrap text-left duration-500 lg:group-hover:text-[#fba33e]"
                style="line-height: 23.375px; font-size: 18.7px"
              >
                高考招生
              </h4>
              <div
                class="bg-list7 relative z-10 flex items-center overflow-hidden before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:translate-x-[-110%] before:bg-[length:100%_100%] before:bg-center before:bg-no-repeat before:duration-500 lg:group-hover:before:translate-x-0"
              >
                <NuxtImg
                  quality="80"
                  src="/images/list7.svg"
                  class="w-[25.5px] overflow-clip duration-500 lg:w-[24px] lg:group-hover:translate-x-[110%]"
                />
              </div>
            </NuxtLink>
          </li>

          <li class="group list-item w-1/2 px-[30.6px]">
            <NuxtLink
              class="flex h-[51px] items-center justify-between border-b border-[#bbbbbb]"
              to="zsjy/gatzs1.htm"
              target="_blank"
            >
              <h4
                class="w-full overflow-hidden text-ellipsis text-nowrap text-left duration-500 lg:group-hover:text-[#fba33e]"
                style="line-height: 23.375px; font-size: 18.7px"
              >
                港澳台招生
              </h4>
              <div
                class="bg-list7 relative z-10 flex items-center overflow-hidden before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:translate-x-[-110%] before:bg-[length:100%_100%] before:bg-center before:bg-no-repeat before:duration-500 lg:group-hover:before:translate-x-0"
              >
                <NuxtImg
                  quality="80"
                  src="/images/list7.svg"
                  class="w-[25.5px] overflow-clip duration-500 lg:w-[24px] lg:group-hover:translate-x-[110%]"
                />
              </div>
            </NuxtLink>
          </li>

          <li class="group list-item w-1/2 px-[30.6px]">
            <NuxtLink
              class="flex h-[51px] items-center justify-between border-b border-[#bbbbbb]"
              to="https://fao.szpu.edu.cn/gjjlhz/zwhzbx1.htm"
              target="_blank"
            >
              <h4
                class="w-full overflow-hidden text-ellipsis text-nowrap text-left duration-500 lg:group-hover:text-[#fba33e]"
                style="line-height: 23.375px; font-size: 18.7px"
              >
                留学生招生
              </h4>
              <div
                class="bg-list7 relative z-10 flex items-center overflow-hidden before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:translate-x-[-110%] before:bg-[length:100%_100%] before:bg-center before:bg-no-repeat before:duration-500 lg:group-hover:before:translate-x-0"
              >
                <NuxtImg
                  quality="80"
                  src="/images/list7.svg"
                  class="w-[25.5px] overflow-clip duration-500 lg:w-[24px] lg:group-hover:translate-x-[110%]"
                />
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <LazyVideoPlay
      :is-video-play-active
      :class="
        isVideoPlayActive
          ? 'block opacity-100 duration-300'
          : 'invisible opacity-0'
      "
      @hide-video-play="hideVideoPlay"
    />
  </section>
</template>

<script setup>
const home3Bg = ref(null);
const isVideoPlayActive = ref(false);

const handleScroll = () => {
  if (window.innerWidth > 1024) {
    const scrollPosition = window.scrollY;
    const startScroll = 1000;
    const endScroll = 2520;

    const translateX = Math.max(
      0,
      960 -
        (Math.max(scrollPosition - startScroll, 0) /
          (endScroll - startScroll)) *
          960
    );
    home3Bg.value.style.transform = `translate3d(${translateX}px, 0, 0)`;
  }
};

const handleResize = () => {
  if (window.innerWidth <= 1024) {
    home3Bg.value.style.transform = `translate3d(0, 0, 0)`;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});

const showVideoPlay = () => {
  isVideoPlayActive.value = true;
};

const hideVideoPlay = () => {
  isVideoPlayActive.value = false;
};
</script>

<style scoped>
.home3-bg {
  background-image: url(~/assets/images/home3_bg.jpg);
  background-size: 100% auto;
}

.bg-list7::before {
  background-image: url(~/assets/images/list7.svg);
}
</style>
