<template>
  <section class="bg-[#f2f3f9] pb-[42.5px] pt-[59.5px]">
    <div
      class="px-[15px] md:px-[59.5px] lg:mx-auto lg:w-[1200px] lg:max-w-[94%] lg:px-0"
    >
      <div
        data-aos="fade-up"
        class="mb-[46.75px] flex items-center justify-between !duration-1000"
      >
        <NuxtLink to="kxyj/xsky">
          <div
            class="relative pl-[17px] before:absolute before:bottom-0 before:left-0 before:top-0 before:w-[3px] before:bg-[#ff860b] before:content-['']"
          >
            <div
              class="uppercase"
              style="font-size: 13.6px; line-height: 13.6px"
            >
              academic research
            </div>
            <div
              class="mt-[8.5px] font-semibold"
              style="font-size: 28.9px; line-height: 28.9px"
            >
              学术科研
            </div>
          </div>
        </NuxtLink>
        <div class="flex">
          <div class="flex translate-y-[17px]">
            <div
              class="swiper-button-prev-2 before:rounded-all group relative z-0 flex h-[45.04px] w-[45.04px] cursor-pointer select-none items-center justify-center rounded-full border-[1px] border-[#efd1cd] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-10 before:scale-0 before:rounded-full before:bg-[#fba33e] before:duration-500 before:content-[''] before:hover:scale-125"
            >
              <NuxtImg
                quality="80"
                src="/images/arrow2.svg"
                class="h-[8.5px] group-hover:hidden"
              />
              <NuxtImg
                quality="80"
                src="/images/arrow2_on.svg"
                class="hidden h-[8.5px] group-hover:block"
              />
            </div>
          </div>

          <div class="ml-[25.5px] flex translate-y-[17px]">
            <div
              class="swiper-button-next-2 before:rounded-all group relative z-10 flex h-[45.04px] w-[45.04px] cursor-pointer select-none items-center justify-center rounded-full border-[1px] border-[#efd1cd] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-10 before:scale-0 before:rounded-full before:bg-[#fba33e] before:duration-500 before:content-[''] before:hover:scale-125"
            >
              <NuxtImg
                quality="80"
                src="/images/arrow2.svg"
                class="h-[8.5px] group-hover:hidden"
                style="transform: rotateY(180deg)"
              />
              <NuxtImg
                quality="80"
                src="/images/arrow2_on.svg"
                class="hidden h-[8.5px] group-hover:block"
                style="transform: rotateY(180deg)"
              />
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" class="!duration-1000">
        <Swiper
          :modules="[
            SwiperAutoplay,
            SwiperNavigation,
            SwiperPagination,
          ]"
          :slides-per-view="1.15"
          space-between="15"
          wrapper-tag="ul"
          tag="div"
          :speed="800"
          :navigation="{
            nextEl: '.swiper-button-next-2',
            prevEl: '.swiper-button-prev-2',
          }"
          :breakpoints="{
            768: { spaceBetween: 15, slidesPerView: 3 },
            1280: { spaceBetween: 25, slidesPerView: 3 },
            1536: { spaceBetween: 66, slidesPerView: 3 },
          }"
          :autoplay="{
            delay: 6000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          }"
          class="!overflow-hidden"
        >
          <SwiperSlide
            v-for="item in items"
            :key="item.articleID"
            class="mr-[15px] !list-item h-full md:!w-[calc((100%_-_30px)/3)] xl:mr-[25px] xl:!w-[calc((100%_-50px)/3)] 2xl:mr-[66px] 2xl:!w-[calc((100%_-132px)/3)]"
          >
            <NuxtLink :to="item.functionURL" class="group inline">
              <div class="relative block w-full overflow-hidden">
                <NuxtImg
                  format="webp"
                  :src="item.listImage"
                  class="aspect-[1/0.6154] h-full w-full select-none object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08]"
                />
              </div>
              <h4
                class="mt-[17px] font-bold text-[#333] duration-500 lg:group-hover:text-[#fba33e]"
                style="font-size: 16.15px; line-height: 20.4px"
              >
                {{ item.title }}
              </h4>
              <h6
                class="mt-[11.2px] flex translate-y-[16px] cursor-pointer items-center text-[11.2px] leading-[11.2px] text-[#666] opacity-0 duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
              >
                <NuxtImg
                  quality="80"
                  class="mr-[6.4px] h-[12.7917px]"
                  src="/images/time.svg"
                />
                {{ item.createdDateStr }}
              </h6>
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data, status, error, refresh, clear } = await useFetch('https://www.haoju.me/interface-server/api/getNavigatorSimpleArticleList.json', {
  pick: ['body'],
  query: {
    siteID: '8a2f462a8b3ba8d7018b3cbe523202a1',
    applicationID: '8a2f462a5d116c5d015d2088f9670dc4',
    navigatorID: '0e7b55547f2d45ddab87d7814d69161b',
    sortTypeOrder: '1',
  }
})

const items = ref(data.value.body.data.rows)
</script>

<style></style>
