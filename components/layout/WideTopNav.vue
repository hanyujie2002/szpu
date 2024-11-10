<template>
  <section
    id="wideTopNav"
    class="bg-yy-top fixed z-40 hidden h-[107.198px] w-full before:absolute before:left-0 before:right-0 before:top-0 before:-z-10 before:h-[168px] before:bg-top before:bg-no-repeat before:content-[''] after:absolute after:right-0 after:top-0 after:h-[4.79197px] after:bg-[#fba33e] after:duration-2000 lg:block"
    :class="
      isMounted
        ? 'after:!w-full after:!opacity-100'
        : 'after:w-[20vw] after:opacity-0'
    "
  >
    <div
      class="mx-auto flex h-full w-[1416px] max-w-[94%] items-center justify-between"
    >
      <div class="w-[352.792px] pr-[40px]">
        <NuxtLink
          to="https://www.szpu.edu.cn/"
          title="深圳职业技术大学官网2023"
        >
          <NuxtImg
            format="webp"
            quality="80"
            class="h-full w-full"
            src="/images/logo_red.png"
          />
        </NuxtLink>
      </div>
      <div class="w-[920px] self-start pt-[4.8px]">
        <div class="flex justify-end">
          <ul
            class="relative flex h-[24px] items-center justify-center bg-[#fba33e] pb-[4.8px] text-white before:absolute before:right-full before:top-0 before:border-b-[24px] before:border-r-[16px] before:border-b-transparent before:border-r-[#fba33e] after:absolute after:left-full after:top-0 after:border-b-[24px] after:border-l-[16px] after:border-b-transparent after:border-l-[#fba33e]"
          >
            <li
              class="relative px-[4.8px] before:absolute before:right-0 before:h-[11.1979px] before:w-[1px] before:bg-white before:content-['']"
              style="font-size: 12.8px; line-height: 12.8px"
            >
              <NuxtLink to="xxgk/xxjj"> 学生 </NuxtLink>
            </li>
            <li
              class="relative px-[4.8px] before:absolute before:right-0 before:h-[11.1979px] before:w-[1px] before:bg-white before:content-['']"
              style="font-size: 12.8px; line-height: 12.8px"
            >
              <NuxtLink to="xxgk/xxjj"> 教工 </NuxtLink>
            </li>
            <li
              class="relative px-[4.8px] before:absolute before:right-0 before:h-[11.1979px] before:w-[1px] before:bg-white before:content-['']"
              style="font-size: 12.8px; line-height: 12.8px"
            >
              <NuxtLink to="xxgk/xxjj"> 访客 </NuxtLink>
            </li>
            <li
              class="relative px-[4.8px] before:absolute before:right-0 before:h-[11.1979px] before:w-[1px] before:bg-white before:content-['']"
              style="font-size: 12.8px; line-height: 12.8px"
            >
              <NuxtLink to="xxgk/xxjj"> 人才招聘 </NuxtLink>
            </li>
            <li
              class="relative px-[4.8px]"
              style="font-size: 12.8px; line-height: 12.8px"
            >
              <NuxtLink to="xxgk/xxjj"> 图书馆 </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex-end flex h-full items-center">
          <nav class="flex-grow pr-[8px]">
            <ul class="flex justify-between text-white">
              <li class="group relative h-[64px]">
                <NuxtLink to="xxgk/xxjj" class="h-full">
                  <div
                    class="relative after:invisible after:absolute after:bottom-[16px] after:left-0 after:h-[2px] after:w-full after:translate-y-[-8px] after:bg-white after:opacity-0 after:duration-[600ms] group-hover:after:visible group-hover:after:translate-y-0 group-hover:after:opacity-100"
                    style="font-size: 16.8px; line-height: 64px"
                  >
                    学校概况
                  </div>
                </NuxtLink>

                <div
                  class="invisible absolute left-[-248px] top-full z-50 flex w-[526.396px] origin-top scale-y-0 bg-white p-[4px] text-[13.6px] leading-[18.7px] text-black opacity-0 shadow-[rgba(0,0,0,0.2)_0px_0px_80px_0px] duration-[250ms] group-hover:visible group-hover:scale-y-100 group-hover:opacity-100"
                >
                  <div
                    class="relative w-[224px] flex-shrink-0 flex-grow-0 overflow-hidden"
                  >
                    <NuxtImg
                      format="webp"
                      quality="80"
                      class="aspect-[2]"
                      src="/images/xykg0828.jpg"
                    />
                  </div>

                  <div
                    class="bg-sub-t relative z-10 flex flex-shrink flex-grow flex-wrap items-center overflow-hidden pl-[33.6px] pr-[16px] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[length:8px_100%] before:bg-left before:bg-no-repeat before:opacity-50 before:content-['']"
                  >
                    <div class="flex flex-wrap">
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        学校简介
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        深职标识
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        现任领导
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        信息公开
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        历任领导
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        历史回眸
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        校园风光
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        校园地图
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </li>
              <li class="group relative h-[64px]">
                <NuxtLink to="xxgk/xxjj" class="h-full">
                  <div
                    class="relative after:invisible after:absolute after:bottom-[16px] after:left-0 after:h-[2px] after:w-full after:translate-y-[-8px] after:bg-white after:opacity-0 after:duration-[600ms] group-hover:after:visible group-hover:after:translate-y-0 group-hover:after:opacity-100"
                    style="font-size: 16.8px; line-height: 64px"
                  >
                    组织机构
                  </div>
                </NuxtLink>
                <div
                  class="invisible absolute left-[-248px] top-full z-50 flex w-[526.396px] origin-top scale-y-0 bg-white p-[4px] text-[13.6px] leading-[18.7px] text-black opacity-0 shadow-[rgba(0,0,0,0.2)_0px_0px_80px_0px] duration-[250ms] group-hover:visible group-hover:scale-y-100 group-hover:opacity-100"
                >
                  <div
                    class="relative w-[224px] flex-shrink-0 flex-grow-0 overflow-hidden"
                  >
                    <NuxtImg
                      format="webp"
                      quality="80"
                      class="aspect-[2]"
                      src="/images/zzjg0828.jpg"
                    />
                  </div>

                  <div
                    class="bg-sub-t relative z-10 flex flex-shrink flex-grow flex-wrap items-center overflow-hidden pl-[33.6px] pr-[16px] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[length:8px_100%] before:bg-left before:bg-no-repeat before:opacity-50 before:content-['']"
                  >
                    <div class="flex flex-wrap">
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        教学、教辅部门
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        研究院所
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        行政、职能部门
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        公司
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </li>
              <li class="group relative h-[64px]">
                <NuxtLink to="xxgk/xxjj" class="h-full">
                  <div
                    class="relative after:invisible after:absolute after:bottom-[16px] after:left-0 after:h-[2px] after:w-full after:translate-y-[-8px] after:bg-white after:opacity-0 after:duration-[600ms] group-hover:after:visible group-hover:after:translate-y-0 group-hover:after:opacity-100"
                    style="font-size: 16.8px; line-height: 64px"
                  >
                    教育教学
                  </div>
                </NuxtLink>
                <div
                  class="invisible absolute left-[-248px] top-full z-50 flex w-[526.396px] origin-top scale-y-0 bg-white p-[4px] text-[13.6px] leading-[18.7px] text-black opacity-0 shadow-[rgba(0,0,0,0.2)_0px_0px_80px_0px] duration-[250ms] group-hover:visible group-hover:scale-y-100 group-hover:opacity-100"
                >
                  <div
                    class="relative w-[224px] flex-shrink-0 flex-grow-0 overflow-hidden"
                  >
                    <NuxtImg
                      format="webp"
                      quality="80"
                      class="aspect-[2]"
                      src="/images/jyjx20240828.jpg"
                    />
                  </div>

                  <div
                    class="bg-sub-t relative z-10 flex flex-shrink flex-grow flex-wrap items-center overflow-hidden pl-[33.6px] pr-[16px] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[length:8px_100%] before:bg-left before:bg-no-repeat before:opacity-50 before:content-['']"
                  >
                    <div class="flex flex-wrap">
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        师资队伍
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        人才招聘
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        专业设置
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        人才培养
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        产教融合
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        双创教育
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        学生事务
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        深职i学习
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </li>
              <li class="group relative h-[64px]">
                <NuxtLink to="xxgk/xxjj" class="h-full">
                  <div
                    class="relative after:invisible after:absolute after:bottom-[16px] after:left-0 after:h-[2px] after:w-full after:translate-y-[-8px] after:bg-white after:opacity-0 after:duration-[600ms] group-hover:after:visible group-hover:after:translate-y-0 group-hover:after:opacity-100"
                    style="font-size: 16.8px; line-height: 64px"
                  >
                    科学研究
                  </div>
                </NuxtLink>
                <div
                  class="invisible absolute left-auto right-[-8px] top-full z-50 flex w-[526.396px] origin-top scale-y-0 bg-white p-[4px] text-[13.6px] leading-[18.7px] text-black opacity-0 shadow-[rgba(0,0,0,0.2)_0px_0px_80px_0px] duration-[250ms] group-hover:visible group-hover:scale-y-100 group-hover:opacity-100"
                >
                  <div
                    class="relative w-[224px] flex-shrink-0 flex-grow-0 overflow-hidden"
                  >
                    <NuxtImg
                      format="webp"
                      quality="80"
                      class="aspect-[2]"
                      src="/images/kxyj0828.jpg"
                    />
                  </div>

                  <div
                    class="bg-sub-t relative z-10 flex flex-shrink flex-grow flex-wrap items-center overflow-hidden pl-[33.6px] pr-[16px] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[length:8px_100%] before:bg-left before:bg-no-repeat before:opacity-50 before:content-['']"
                  >
                    <div class="flex flex-wrap">
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        应用研发
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        产学研用
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        学术科研
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        研究院所
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </li>
              <li class="group relative h-[64px]">
                <NuxtLink to="xxgk/xxjj" class="h-full">
                  <div
                    class="relative after:invisible after:absolute after:bottom-[16px] after:left-0 after:h-[2px] after:w-full after:translate-y-[-8px] after:bg-white after:opacity-0 after:duration-[600ms] group-hover:after:visible group-hover:after:translate-y-0 group-hover:after:opacity-100"
                    style="font-size: 16.8px; line-height: 64px"
                  >
                    招生就业
                  </div>
                </NuxtLink>
                <div
                  class="invisible absolute left-auto right-[-8px] top-full z-50 flex w-[526.396px] origin-top scale-y-0 bg-white p-[4px] text-[13.6px] leading-[18.7px] text-black opacity-0 shadow-[rgba(0,0,0,0.2)_0px_0px_80px_0px] duration-[250ms] group-hover:visible group-hover:scale-y-100 group-hover:opacity-100"
                >
                  <div
                    class="relative w-[224px] flex-shrink-0 flex-grow-0 overflow-hidden"
                  >
                    <NuxtImg
                      format="webp"
                      quality="80"
                      class="aspect-[2]"
                      src="/images/zsjy0828.jpg"
                    />
                  </div>

                  <div
                    class="bg-sub-t relative z-10 flex flex-shrink flex-grow flex-wrap items-center overflow-hidden pl-[33.6px] pr-[16px] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[length:8px_100%] before:bg-left before:bg-no-repeat before:opacity-50 before:content-['']"
                  >
                    <div class="flex flex-wrap">
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        学历教育
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        港澳台招生
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        就业创业
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        深职榜样
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </li>
              <li class="group relative h-[64px]">
                <NuxtLink to="xxgk/xxjj" class="h-full">
                  <div
                    class="relative after:invisible after:absolute after:bottom-[16px] after:left-0 after:h-[2px] after:w-full after:translate-y-[-8px] after:bg-white after:opacity-0 after:duration-[600ms] group-hover:after:visible group-hover:after:translate-y-0 group-hover:after:opacity-100"
                    style="font-size: 16.8px; line-height: 64px"
                  >
                    国际交流
                  </div>
                </NuxtLink>
                <div
                  class="invisible absolute left-auto right-[-8px] top-full z-50 flex w-[526.396px] origin-top scale-y-0 bg-white p-[4px] text-[13.6px] leading-[18.7px] text-black opacity-0 shadow-[rgba(0,0,0,0.2)_0px_0px_80px_0px] duration-[250ms] group-hover:visible group-hover:scale-y-100 group-hover:opacity-100"
                >
                  <div
                    class="relative w-[224px] flex-shrink-0 flex-grow-0 overflow-hidden"
                  >
                    <NuxtImg
                      format="webp"
                      quality="80"
                      class="aspect-[2]"
                      src="/images/gjjl0828.jpg"
                    />
                  </div>

                  <div
                    class="bg-sub-t relative z-10 flex flex-shrink flex-grow flex-wrap items-center overflow-hidden pl-[33.6px] pr-[16px] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[length:8px_100%] before:bg-left before:bg-no-repeat before:opacity-50 before:content-['']"
                  >
                    <div class="flex flex-wrap">
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        国际平台
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        国际交流
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </li>
              <li class="group relative h-[64px]">
                <NuxtLink to="xxgk/xxjj" class="h-full">
                  <div
                    class="relative after:invisible after:absolute after:bottom-[16px] after:left-0 after:h-[2px] after:w-full after:translate-y-[-8px] after:bg-white after:opacity-0 after:duration-[600ms] group-hover:after:visible group-hover:after:translate-y-0 group-hover:after:opacity-100"
                    style="font-size: 16.8px; line-height: 64px"
                  >
                    校园生活
                  </div>
                </NuxtLink>
                <div
                  class="invisible absolute left-auto right-[-8px] top-full z-50 flex w-[526.396px] origin-top scale-y-0 bg-white p-[4px] text-[13.6px] leading-[18.7px] text-black opacity-0 shadow-[rgba(0,0,0,0.2)_0px_0px_80px_0px] duration-[250ms] group-hover:visible group-hover:scale-y-100 group-hover:opacity-100"
                >
                  <div
                    class="relative w-[224px] flex-shrink-0 flex-grow-0 overflow-hidden"
                  >
                    <NuxtImg
                      format="webp"
                      quality="80"
                      class="aspect-[2]"
                      src="/images/xysh0828.jpg"
                    />
                  </div>

                  <div
                    class="bg-sub-t relative z-10 flex flex-shrink flex-grow flex-wrap items-center overflow-hidden pl-[33.6px] pr-[16px] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[length:8px_100%] before:bg-left before:bg-no-repeat before:opacity-50 before:content-['']"
                  >
                    <div class="flex flex-wrap">
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        生活服务
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        网络服务
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        VPN
                      </NuxtLink>
                      <NuxtLink
                        to="xxgk/xxjj"
                        class="relative py-[4.8px] pl-[11.2px] pr-[16px] before:absolute before:left-0 before:top-[2.4px] before:text-[16px] before:content-['·']"
                      >
                        一网通办
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <ul class="flex items-center text-white">
            <li class="ml-[16px]">
              <button
                class="group ml-[8px] flex items-center"
                @click="$emit('show-wide-search')"
              >
                <div
                  class="relative z-10 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white/50 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-10 before:scale-0 before:rounded-full before:bg-[#fba33e] before:duration-500 before:content-[''] group-hover:before:scale-[1.2]"
                >
                  <img
                    class="flex h-[16px] w-[16px]"
                    style="line-height: 32px"
                    src="/images/list1_ico1.svg"
                  >
                </div>
              </button>
            </li>
            <li class="ml-[16px]">
              <NuxtLink to="xxgk/xxjj" class="group flex items-center">
                <span class="mr-[9.6px] uppercase">EN</span>
                <div
                  class="relative z-10 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white/50 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-10 before:scale-0 before:rounded-full before:bg-[#fba33e] before:duration-500 before:content-[''] group-hover:before:scale-[1.2]"
                >
                  <img
                    class="flex h-[16px] w-[16px]"
                    style="line-height: 32px"
                    src="/images/list1_ico2.svg"
                  >
                </div>
              </NuxtLink>
            </li>
            <li class="ml-[16px]">
              <button
                class="group flex h-[22px] w-[22px] flex-col items-center justify-between transition-all duration-500 hover:rotate-45 hover:scale-150"
                @click="$emit('show-wide-slide-nav')"
              >
                <div
                  class="relative h-[4px] w-[4px] bg-white before:absolute before:left-[-9px] before:h-[4px] before:w-[4px] before:bg-white before:content-[''] after:absolute after:right-[-9px] after:h-[4px] after:w-[4px] after:bg-white after:content-[''] group-hover:before:translate-x-[9px] group-hover:after:translate-y-[9px]"
                />
                <div
                  class="relative h-[4px] w-[4px] bg-white before:absolute before:left-[-9px] before:h-[4px] before:w-[4px] before:bg-white before:content-[''] after:absolute after:right-[-9px] after:h-[4px] after:w-[4px] after:bg-white after:content-['']"
                />
                <div
                  class="relative h-[4px] w-[4px] bg-white before:absolute before:left-[-9px] before:h-[4px] before:w-[4px] before:bg-white before:content-[''] after:absolute after:right-[-9px] after:h-[4px] after:w-[4px] after:bg-white after:content-[''] group-hover:before:translate-y-[-9px] group-hover:after:translate-y-[-9px]"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['show-wide-search', 'show-wide-slide-nav']);

const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;
});
</script>

<style scoped>
.bg-yy-top::before {
  background-image: url(~/assets/images/yy_top.png);
  background-size: 100% 100%;
}

.bg-sub-t::before {
  background-image: url(~/assets/images/sub_t.png);
}
</style>
