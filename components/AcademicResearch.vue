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
            SwiperA11y,
          ]"
          :slides-per-view="1.15"
          :loop="true"
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
            tag="li"
            class="mr-[15px] !list-item h-full md:!w-[calc((100%_-_30px)/3)] xl:mr-[25px] xl:!w-[calc((100%_-50px)/3)] 2xl:mr-[66px] 2xl:!w-[calc((100%_-132px)/3)]"
          >
            <NuxtLink to="xxgk/xxjj" class="group inline">
              <div class="relative block w-full overflow-hidden">
                <NuxtImg
                  format="webp"
                  quality="80"
                  src="/images/CB8E298308CADB4D7B7FDD327BC_51728C60_2DBA7.jpg"
                  class="aspect-[1/0.6154] object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08] select-none"
                />
              </div>
              <h4
                class="mt-[17px] font-bold text-[#333] duration-500 lg:group-hover:text-[#fba33e]"
                style="font-size: 16.15px; line-height: 20.4px"
              >
                学校首获国家自然科学基金优秀青年项目立项
              </h4>
              <h6
                class="mt-[11.2px] flex translate-y-[16px] cursor-pointer items-center text-[11.2px] leading-[11.2px] text-[#666] opacity-0 duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
              >
                <NuxtImg
                  quality="80"
                  class="mr-[6.4px] h-[12.7917px]"
                  src="/images/time.svg"
                />
                2024-08-30
              </h6>
            </NuxtLink>
          </SwiperSlide>

          <SwiperSlide
            tag="li"
            class="!list-item h-full md:!w-[calc((100%_-_30px)/3)] xl:mr-[25px] xl:!w-[calc((100%_-50px)/3)] 2xl:mr-[66px] 2xl:!w-[calc((100%_-132px)/3)]"
          >
            <NuxtLink to="xxgk/xxjj" class="group inline">
              <div class="relative block w-full overflow-hidden">
                <NuxtImg
                  format="webp"
                  quality="80"
                  src="/images/A06AEE2F727AA51635325B1DD3C_67371AE5_4AB33.jpg"
                  class="aspect-[1/0.6154] object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08] select-none"
                />
              </div>
              <h4
                class="mt-[17px] font-bold text-[#333] duration-500 lg:group-hover:text-[#fba33e]"
                style="font-size: 16.15px; line-height: 20.4px"
              >
                《职业•技术•教育》2024国际学术研讨会在我校举行
              </h4>
              <h6
                class="mt-[11.2px] flex translate-y-[16px] cursor-pointer items-center text-[11.2px] leading-[11.2px] text-[#666] opacity-0 duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
              >
                <NuxtImg
                  quality="80"
                  class="mr-[6.4px] h-[12.7917px]"
                  src="/images/time.svg"
                />
                2024-05-20
              </h6>
            </NuxtLink>
          </SwiperSlide>

          <SwiperSlide
            tag="li"
            class="!list-item h-full md:!w-[calc((100%_-_30px)/3)] xl:mr-[25px] xl:!w-[calc((100%_-50px)/3)] 2xl:mr-[66px] 2xl:!w-[calc((100%_-132px)/3)]"
          >
            <NuxtLink to="xxgk/xxjj" class="group inline">
              <div class="relative block w-full overflow-hidden">
                <NuxtImg
                  format="webp"
                  quality="80"
                  src="/images/53F2D1CC097DDFAF23734B191EE_71224832_218B3.jpg"
                  class="aspect-[1/0.6154] object-cover lg:object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08] select-none"
                />
              </div>
              <h4
                class="mt-[17px] font-bold text-[#333] duration-500 lg:group-hover:text-[#fba33e]"
                style="font-size: 16.15px; line-height: 20.4px"
              >
                《职业·技术·教育（英文）》国际期刊创刊号出版
              </h4>
              <h6
                class="mt-[11.2px] flex translate-y-[16px] cursor-pointer items-center text-[11.2px] leading-[11.2px] text-[#666] opacity-0 duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
              >
                <NuxtImg
                  quality="80"
                  class="mr-[6.4px] h-[12.7917px]"
                  src="/images/time.svg"
                />
                2024-04-08
              </h6>
            </NuxtLink>
          </SwiperSlide>

          <SwiperSlide
            tag="li"
            class="!list-item h-full md:!w-[calc((100%_-_30px)/3)] xl:mr-[25px] xl:!w-[calc((100%_-50px)/3)] 2xl:mr-[66px] 2xl:!w-[calc((100%_-132px)/3)]"
          >
            <NuxtLink to="xxgk/xxjj" class="group inline">
              <div class="relative block w-full overflow-hidden">
                <NuxtImg
                  format="webp"
                  quality="80"
                  src="/images/xh_i829.jpg"
                  class="aspect-[1/0.6154] object-cover lg:object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08] select-none"
                />
              </div>
              <h4
                class="mt-[17px] font-bold text-[#333] duration-500 lg:group-hover:text-[#fba33e]"
                style="font-size: 16.15px; line-height: 20.4px"
              >
                学校成立深圳职业技术大学首届学术委员会
              </h4>
              <h6
                class="mt-[11.2px] flex translate-y-[16px] cursor-pointer items-center text-[11.2px] leading-[11.2px] text-[#666] opacity-0 duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
              >
                <NuxtImg
                  quality="80"
                  class="mr-[6.4px] h-[12.7917px]"
                  src="/images/time.svg"
                />
                2023-12-14
              </h6>
            </NuxtLink>
          </SwiperSlide>

          <SwiperSlide
            tag="li"
            class="!list-item h-full md:!w-[calc((100%_-_30px)/3)] xl:mr-[25px] xl:!w-[calc((100%_-50px)/3)] 2xl:mr-[66px] 2xl:!w-[calc((100%_-132px)/3)]"
          >
            <NuxtLink to="xxgk/xxjj" class="group inline">
              <div class="relative block w-full overflow-hidden">
                <NuxtImg
                  format="webp"
                  quality="80"
                  src="/images/xh_i829.jpg"
                  class="aspect-[1/0.6154] object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08] select-none"
                />
              </div>
              <h4
                class="mt-[17px] font-bold text-[#333] duration-500 lg:group-hover:text-[#fba33e]"
                style="font-size: 16.15px; line-height: 20.4px"
              >
                三个广东省社会科学界联合会研究基地揭牌成立
              </h4>
              <h6
                class="mt-[11.2px] flex translate-y-[16px] cursor-pointer items-center text-[11.2px] leading-[11.2px] text-[#666] opacity-0 duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
              >
                <NuxtImg
                  quality="80"
                  class="mr-[6.4px] h-[12.7917px]"
                  src="/images/time.svg"
                />
                2023-11-23
              </h6>
            </NuxtLink>
          </SwiperSlide>

          <SwiperSlide
            tag="li"
            class="!list-item h-full md:!w-[calc((100%_-_30px)/3)] xl:mr-[25px] xl:!w-[calc((100%_-50px)/3)] 2xl:mr-[66px] 2xl:!w-[calc((100%_-132px)/3)]"
          >
            <NuxtLink to="xxgk/xxjj" class="group inline">
              <div class="relative block w-full overflow-hidden">
                <NuxtImg
                  format="webp"
                  quality="80"
                  src="/images/2DB14F938F1972EC8AD158C32C3_804BA196_1DE4D.jpg"
                  class="aspect-[1/0.6154] object-cover lg:object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08]"
                />
              </div>
              <h4
                class="mt-[17px] font-bold text-[#333] duration-500 lg:group-hover:text-[#fba33e]"
                style="font-size: 16.15px; line-height: 20.4px"
              >
                学校获批14项国家自然科学基金项目
              </h4>
              <h6
                class="mt-[11.2px] flex translate-y-[16px] cursor-pointer items-center text-[11.2px] leading-[11.2px] text-[#666] opacity-0 duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
              >
                <NuxtImg
                  quality="80"
                  class="mr-[6.4px] h-[12.7917px]"
                  src="/images/time.svg"
                />
                2023-08-29
              </h6>
            </NuxtLink>
          </SwiperSlide>

          <SwiperSlide
            tag="li"
            class="!list-item h-full md:!w-[calc((100%_-_30px)/3)] xl:mr-[25px] xl:!w-[calc((100%_-50px)/3)] 2xl:mr-[66px] 2xl:!w-[calc((100%_-132px)/3)]"
          >
            <NuxtLink to="xxgk/xxjj" class="group inline">
              <div class="relative block w-full overflow-hidden">
                <NuxtImg
                  format="webp"
                  quality="80"
                  src="/images/145C262458B0C635AD6C25541E3_FC796675_6B4CC.jpg"
                  class="aspect-[1/0.6154] object-cover lg:object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08] select-none"
                />
              </div>
              <h4
                class="mt-[17px] font-bold text-[#333] duration-500 lg:group-hover:text-[#fba33e]"
                style="font-size: 16.15px; line-height: 20.4px"
              >
                23个项目、6大科研平台，深职院高交会上秀出“黑科技”
              </h4>
              <h6
                class="mt-[11.2px] flex translate-y-[16px] cursor-pointer items-center text-[11.2px] leading-[11.2px] text-[#666] opacity-0 duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
              >
                <NuxtImg
                  quality="80"
                  class="mr-[6.4px] h-[12.7917px]"
                  src="/images/time.svg"
                />
                2022-11-19
              </h6>
            </NuxtLink>
          </SwiperSlide>

          <SwiperSlide
            tag="li"
            class="!list-item h-full md:!w-[calc((100%_-_30px)/3)] xl:mr-[25px] xl:!w-[calc((100%_-50px)/3)] 2xl:mr-[66px] 2xl:!w-[calc((100%_-132px)/3)]"
          >
            <NuxtLink to="xxgk/xxjj" class="group inline">
              <div class="relative block w-full overflow-hidden">
                <NuxtImg
                  format="webp"
                  quality="80"
                  src="/images/BFC1CD7CAD81817C60C88B9ED4A_AB20A1ED_48BE3.jpg"
                  class="aspect-[1/0.6154] object-cover lg:object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08] select-none"
                />
              </div>
              <h4
                class="mt-[17px] font-bold text-[#333] duration-500 lg:group-hover:text-[#fba33e]"
                style="font-size: 16.15px; line-height: 20.4px"
              >
                我校与光明实验室共建人工智能与数字经济联合创新中心
              </h4>
              <h6
                class="mt-[11.2px] flex translate-y-[16px] cursor-pointer items-center text-[11.2px] leading-[11.2px] text-[#666] opacity-0 duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
              >
                <NuxtImg
                  quality="80"
                  class="mr-[6.4px] h-[12.7917px]"
                  src="/images/time.svg"
                />
                2022-11-09
              </h6>
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style></style>
