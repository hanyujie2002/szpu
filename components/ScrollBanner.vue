<template>
  <section class="relative w-full overflow-hidden">
    <Swiper
      id="swiper0"
      :loop="true"
      :modules="[
        SwiperAutoplay,
        SwiperPagination,
        SwiperEffectFade,
        SwiperA11y,
      ]"
      effect="fade"
      :speed="800"
      :fade-effect="{
        crossFade: true,
      }"
      :slides-per-view="1"
      :pagination="{
        el: '.swiper-pagination-0',
        clickable: true,
      }"
      tag="div"
      wrapper-tag="ul"
      class="!relative !overflow-hidden"
      @slide-change-transition-start="onSlideChangeStart"
      @slide-change-transition-end="onSlideChangeEnd"
    >
      <SwiperSlide class="!relative !w-full" tag="li">
        <NuxtLink class="relative w-full">
          <div class="relative overflow-hidden">
            <div>
              <video
                class="aspect-[1/0.56] w-full object-cover lg:aspect-auto lg:h-dvh"
                muted
                autoplay
                preload="auto"
                playsinline="true"
                x5-playsinline
                webkit-playsinline
                x-webkit-airplay="allow"
                x5-video-player-type="h5"
                @ended="onVideoEnded"
              >
                <source
                  src="~/assets/videos/4CF8CAC9F0893DA67BF3A06E9A7_89918CB5_10F0462.mp4"
                  type="video/mp4"
                >
              </video>
            </div>
          </div>
        </NuxtLink>
      </SwiperSlide>

      <SwiperSlide class="!relative !w-full" tag="li">
        <NuxtLink class="relative w-full">
          <div class="relative overflow-hidden">
            <div
              class="scale-[1.12] transition-all duration-6000"
              style="transition-timing-function: ease"
            >
              <img
                class="aspect-[1/0.56] w-full object-cover lg:aspect-auto lg:h-dvh"
                src="~/assets/images/A1BEE7809537B652A12F4E03D0F_B43B87BE_355A1.jpg"
              >
            </div>
          </div>
        </NuxtLink>
      </SwiperSlide>

      <SwiperSlide class="!relative !w-full" tag="li">
        <NuxtLink class="relative w-full">
          <div class="relative overflow-hidden">
            <div
              class="scale-[1.12] transition-all duration-6000"
              style="transition-timing-function: ease"
            >
              <img
                class="aspect-[1/0.56] w-full object-cover lg:aspect-auto lg:h-dvh"
                src="~/assets/images/883079AF7CEE30D30FF8A986183_8391136D_2F2AD.jpg"
              >
            </div>
          </div>
        </NuxtLink>
      </SwiperSlide>

      <SwiperSlide class="!relative !w-full" tag="li">
        <NuxtLink class="relative w-full">
          <div class="relative overflow-hidden">
            <div>
              <video
                class="aspect-[1/0.56] w-full object-cover lg:aspect-auto lg:h-dvh"
                muted
                playsinline="true"
                x5-playsinline
                webkit-playsinline
                x-webkit-airplay="allow"
                x5-video-player-type="h5"
                @ended="onVideoEnded"
              >
                <source
                  src="~/assets/videos/DF24A75EC06F2A8C08100119724_60C7C211_19DE7B4.mp4"
                  type="video/mp4"
                >
              </video>
            </div>
          </div>
        </NuxtLink>
      </SwiperSlide>

      <div
        class="swiper-pagination swiper-pagination-0 !absolute !bottom-auto !left-auto !right-[3%] !top-1/2 !mx-[17px] !flex !w-[25.5px] !-translate-y-1/2 !flex-col"
      />
    </Swiper>
  </section>
</template>

<script setup lang="ts">
const timeoutId = ref<Number | null>(null);

const onVideoEnded = () => {
  const swiper0 = document.querySelector('#swiper0').swiper;
  swiper0.slideNext();
};

const onSlideChangeStart = (swiper) => {
  if (timeoutId.value !== null) {
    clearTimeout(timeoutId.value);
    timeoutId.value = null;
  }

  const currentIndex = swiper.activeIndex;
  const currentSlide = swiper.slides[currentIndex];

  const currentVideo = currentSlide.querySelector('video');
  if (currentVideo) {
    currentVideo.currentTime = 0;
    currentVideo.play();
  }

  const currentImg = currentSlide.querySelector('img');
  if (currentImg) {
    timeoutId.value = setTimeout(() => {
      swiper.slideNext();
    }, 6000);
  }
};

const onSlideChangeEnd = (swiper) => {
  const previousIndex = swiper.previousIndex;
  const previousSlide = swiper.slides[previousIndex];

  const previousVideo = previousSlide.querySelector('video');
  if (previousVideo) {
    previousVideo.pause();
  }
};
</script>

<style>
.swiper-pagination-0 .swiper-pagination-bullet {
  background-image: url(~/assets/images/banner_dots.png);
  @apply !mx-0 !my-[10.2px] h-[25.5px] w-[25.5px] rounded-none bg-transparent bg-cover;
}

.swiper-pagination-0 .swiper-pagination-bullet-active {
  background-image: url(~/assets/images/banner_dots_on.png);
  @apply animate-rotate1;
}

.swiper-slide-active div {
  @apply scale-100;
}
</style>
