<template>
  <section
    class="bg-home6-top relative z-10 block overflow-hidden pb-[25.5px] pt-[42.5px] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-20 after:bg-no-repeat md:pt-[76.5px] lg:pb-[24px] lg:pt-[72px]"
  >
    <Swiper
      :modules="[SwiperAutoplay, SwiperThumbs, SwiperA11y]"
      :thumbs="{ swiper: thumbs, autoScrollOffset: 1 }"
      :speed="800"
      :autoplay="{
        delay: 2 * 3e3,
        disableOnInteraction: false,
      }"
      tag="section"
      wrapper-tag="ul"
      :slides-per-view="1"
      class="!absolute !bottom-0 !left-0 !right-0 !top-0 z-10"
    >
      <SwiperSlide class="relative w-screen" tag="li">
        <div
          class="relative h-full w-full after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:h-full after:w-screen after:translate-x-full after:bg-[#fda42f] after:transition-all after:delay-500 after:duration-2000 after:content-['']"
        >
          <img
            class="h-full w-full object-cover"
            src="~/assets/images/D558B28C53E63FCF20CED18E15D_1D82E1D9_ABC4F.jpg"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide class="relative w-screen" tag="li">
        <div
          class="relative h-full w-full after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:h-full after:w-screen after:translate-x-full after:bg-[#fda42f] after:transition-all after:delay-500 after:duration-2000 after:content-['']"
        >
          <img
            class="h-full w-full object-cover"
            src="~/assets/images/F5F3F23EBFC15FF3CD5545FFAF4_850386BB_841AC.jpg"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide class="relative w-screen" tag="li">
        <div
          class="relative h-full after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:h-full after:w-screen after:translate-x-full after:bg-[#fda42f] after:transition-all after:delay-500 after:duration-2000 after:content-['']"
        >
          <img
            class="h-full w-full object-cover"
            src="~/assets/images/7A10B88518FA37121DB6E2612D5_7756DA0A_A28BF.jpg"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide class="relative w-screen" tag="li">
        <div
          class="relative h-full w-full after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:h-full after:w-screen after:translate-x-full after:bg-[#fda42f] after:transition-all after:delay-500 after:duration-2000 after:content-['']"
        >
          <img
            class="h-full w-full object-cover"
            src="~/assets/images/B485CFB6A5C931E214AC4A178EE_AA04DFC3_614B4.jpg"
          />
        </div>
      </SwiperSlide>
    </Swiper>

    <section
      class="relative z-30 block w-full px-[15px] text-white md:px-[59.5px] lg:mx-auto lg:w-[1200px] lg:max-w-[94%] lg:px-0"
    >
      <div
        class="mb-[42.5px] w-[433.5px] max-w-full bg-black/20 px-[21.25px] py-[34px] md:mb-[170px] md:p-[42.5px]"
      >
        <div
          class="mb-[34px] flex items-center !duration-1000 md:mb-[46.75px]"
          data-aos="fade-up"
        >
          <div
            class="relative pl-[17px] before:absolute before:bottom-0 before:left-0 before:top-0 before:w-[3px] before:bg-[#ff860b] before:content-['']"
          >
            <p style="line-height: 13.6px">
              <NuxtLink
                class="uppercase"
                style="font-size: 13.6px; line-height: 13.6px"
              >
                campus scenery
              </NuxtLink>
            </p>
            <p class="mt-[8.5px] font-semibold" style="line-height: 28.9px">
              <NuxtLink style="font-size: 28.9px; line-height: 28.9px">
                校园风采
              </NuxtLink>
            </p>
          </div>
        </div>

        <div class="indent-[2em] !duration-1000" data-aos="fade-up">
          <p
            class="text-justify"
            style="font-size: 14.45px; line-height: 28.9px"
          >
            学校现有西丽校区、华侨城校区、深汕校区等三个校区，校园占地面积4500余亩，总建筑面积110余万平方米。现有教职工2200余人，全日制在校生2.7万余人。
          </p>
        </div>
      </div>

      <div data-aos="fade-up">
        <Swiper
          :modules="[SwiperAutoplay, SwiperThumbs, SwiperA11y]"
          tag="div"
          wrapper-tag="ul"
          :watch-slides-progress="true"
          :slides-per-view="3"
          :breakpoints="{
            768: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
            1536: { slidesPerView: 7 },
          }"
          :space-between="8"
          class="thumbs-swiper !relative select-text !duration-1000"
          @swiper="setThumbs"
        >
          <SwiperSlide
            class="group !relative mr-[8px] !w-[calc((100%_-_16px)/3)] cursor-pointer md:!w-[calc((100%_-_24px)/4)] xl:!w-[calc((100%_-_32px)/5)] 2xl:!w-[calc((100%_-_40px)/7)]"
            tag="li"
          >
            <div
              class="relative flex flex-col overflow-hidden before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-10 before:border-[2px] before:border-white"
            >
              <img
                class="aspect-[1/0.6516] lg:object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08]"
                src="~/assets/images/D558B28C53E63FCF20CED18E15D_1D82E1D9_ABC4F.jpg"
              />
            </div>
            <div
              class="invisible absolute bottom-0 left-0 right-0 top-0 flex translate-y-[101%] flex-col items-center justify-center bg-[rgba(255,134,11,0.8)] px-[5px] opacity-0 transition-all duration-500"
            >
              <p
                class="text-center text-xs font-bold leading-[20.4px] text-white sm:text-[13.6px] md:text-[17px] md:leading-[25.5px]"
              >
                校园风光（西丽校区留仙洞园区）2024年9月
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            class="group !relative mr-[8px] !w-[calc((100%_-_16px)/3)] cursor-pointer md:!w-[calc((100%_-_24px)/4)] xl:!w-[calc((100%_-_32px)/5)] 2xl:!w-[calc((100%_-_40px)/7)]"
            tag="li"
          >
            <div
              class="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-10 before:border-[2px] before:border-white"
            >
              <img
                class="aspect-[1/0.6516] lg:object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08]"
                src="~/assets/images/F5F3F23EBFC15FF3CD5545FFAF4_850386BB_841AC.jpg"
              />
            </div>
            <div
              class="invisible absolute bottom-0 left-0 right-0 top-0 flex translate-y-[101%] flex-col items-center justify-center bg-[rgba(255,134,11,0.8)] px-[5px] opacity-0 transition-all duration-500"
            >
              <p
                class="text-center text-xs font-bold leading-[20.4px] text-white sm:text-[13.6px] md:text-[17px] md:leading-[25.5px]"
              >
                校园风光（西丽校区西丽湖园区）2024年9月
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            class="group !relative mr-[8px] !w-[calc((100%_-_16px)/3)] cursor-pointer md:!w-[calc((100%_-_24px)/4)] xl:!w-[calc((100%_-_32px)/5)] 2xl:!w-[calc((100%_-_40px)/7)]"
            tag="li"
          >
            <div
              class="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-10 before:border-[2px] before:border-white"
            >
              <img
                class="aspect-[1/0.6516] lg:object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08]"
                src="~/assets/images/7A10B88518FA37121DB6E2612D5_7756DA0A_A28BF.jpg"
              />
            </div>
            <div
              class="duration-600 invisible absolute bottom-0 left-0 right-0 top-0 flex translate-y-[101%] flex-col items-center justify-center bg-[rgba(255,134,11,0.8)] px-[5px] opacity-0 transition-all"
            >
              <p
                class="text-center text-xs font-bold leading-[20.4px] text-white sm:text-[13.6px] md:text-[17px] md:leading-[25.5px]"
              >
                校园风光（西丽校区官龙山园区）2024年9月
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            class="group !relative mr-[8px] !w-[calc((100%_-_16px)/3)] cursor-pointer md:!w-[calc((100%_-_24px)/4)] xl:!w-[calc((100%_-_32px)/5)] 2xl:!w-[calc((100%_-_40px)/7)]"
            tag="li"
          >
            <div
              class="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-10 before:border-[2px] before:border-white"
            >
              <img
                class="aspect-[1/0.6516] lg:object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08]"
                src="~/assets/images/B485CFB6A5C931E214AC4A178EE_AA04DFC3_614B4.jpg"
              />
            </div>
            <div
              class="duration-600 invisible absolute bottom-0 left-0 right-0 top-0 flex translate-y-[101%] flex-col items-center justify-center bg-[rgba(255,134,11,0.8)] px-[5px] text-[13.6px] opacity-0 transition-all md:text-[17px]"
            >
              <p
                class="text-center text-xs font-bold leading-[20.4px] text-white sm:text-[13.6px] md:text-[17px]"
              >
                校园风光（华侨城校区）2024年9月
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </section>
</template>

<script setup>
const thumbs = ref(null);

const setThumbs = (swiper) => {
  thumbs.value = swiper;
};
</script>

<style>
.swiper-slide-thumb-active div {
  @apply visible translate-y-0 opacity-100;
}

.swiper-slide-active div:after {
  @apply -translate-x-full opacity-0;
}

.swiper-slide-active div {
  @apply scale-100;
}

.bg-home6-top:after {
  background-image: url(~/assets/images/home6_top.png);
  background-position: center 102%;
}
</style>
