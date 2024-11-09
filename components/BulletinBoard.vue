<template>
  <section class="mt-[34px] w-full lg:mt-[48px]">
    <div
      class="flex w-full flex-wrap px-[15px] md:px-[59.5px] lg:mx-auto lg:w-[1200px] lg:max-w-[94%] lg:px-0"
    >
      <div
        ref="left"
        class="order-2 w-full py-[25.5px] transition-transform duration-500 ease-out md:order-1 md:w-[21.21%]"
      >
        <div class="mb-[12.75px]">
          <NuxtLink
            to="/mtksz"
            class="relative flex items-center text-[#666666]"
          >
            <span
              class="text-nowrap font-semibold"
              style="font-size: 18.7px; line-height: 18.7px"
              >媒体看深职</span
            >
            <span
              class="ml-[8.5px] font-semibold uppercase"
              style="font-size: 11.9px; line-height: 11.9px"
              >Media News</span
            >
          </NuxtLink>
        </div>

        <ul
          class="divide-y-[0.666667px] divide-solid divide-[#e2e22] md:font-bold"
        >
          <li class="list-item">
            <NuxtLink
              class="group flex flex-col pb-[17px] pt-[8.5px]"
              to="https://article.xuexi.cn/articles/index.html?art_id=2687890553521227939&amp;item_id=2687890553521227939&amp;study_style_id=feeds_opaque&amp;pid=&amp;ptype=-1&amp;source=share&amp;share_to=wx_single"
              target="_blank"
              title="[学习强国]深圳职业技术大学音乐微电影《我爱你中国》发布"
            >
              <div class="mb-[17px] overflow-hidden">
                <NuxtImg
                  format="webp"
                  quality="80"
                  class="lg:object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08]"
                  src="/images/default/mtksz.jpg"
                  alt=""
                />
              </div>
              <h4
                class="line-clamp-2 text-justify text-[#333] transition-colors duration-500 lg:hover:text-[#fba33e]"
                style="font-size: 14.45px; line-height: 20.4px"
              >
                [学习强国]深圳职业技术大学音乐微电影《我爱你中国》发布
              </h4>
              <span
                class="mt-[8.5px] font-normal text-[#888]"
                style="font-size: 13.6px"
                >2024.10.02</span
              >
            </NuxtLink>
          </li>

          <li class="list-item">
            <NuxtLink
              class="flex h-[93.5px] flex-col justify-center pb-[8.5px] pt-[8.5px]"
              to="https://s.cyol.com/articles/2024-10/01/content_EAaRXjfj.html?gid=28Dga1xp"
              target="_blank"
              title="[中国青年报]深圳职业技术大学推出音乐微电影《我爱你中国》"
            >
              <h4
                class="line-clamp-2 text-justify text-[#333] transition-colors duration-500 lg:hover:text-[#fba33e]"
                style="font-size: 14.45px; line-height: 20.4px"
              >
                [中国青年报]深圳职业技术大学推出音乐微电影《我爱你中国》
              </h4>
              <span
                class="mt-[8.5px] font-normal text-[#888]"
                style="font-size: 13.6px"
                >2024.10.01</span
              >
            </NuxtLink>
          </li>

          <li class="list-item">
            <NuxtLink
              class="flex h-[93.5px] flex-col justify-center pb-[8.5px] pt-[8.5px]"
              to="https://site.szplus.com/content/s6704d19be4b02fe291aa462a.html"
              target="_blank"
              title="[深圳plus]“深湾之境”摄影展在深圳青年美术馆展出，为期一个月"
            >
              <h4
                class="line-clamp-2 text-justify text-[#333] transition-colors duration-500 lg:hover:text-[#fba33e]"
                style="font-size: 14.45px; line-height: 20.4px"
              >
                [深圳plus]“深湾之境”摄影展在深圳青年美术馆展出，为期一个月
              </h4>
              <span
                class="mt-[8.5px] font-normal text-[#888]"
                style="font-size: 13.6px"
                >2024.10.08</span
              >
            </NuxtLink>
          </li>

          <li class="list-item">
            <NuxtLink
              class="flex h-[93.5px] flex-col justify-center pb-[8.5px] pt-[8.5px]"
              to="https://site.szplus.com/content/s6704d19be4b02fe291aa462a.html"
              target="_blank"
              title="[读创]“深湾之境”摄影展在深圳青年美术馆启幕"
            >
              <h4
                class="line-clamp-2 text-justify text-[#333] transition-colors duration-500 lg:hover:text-[#fba33e]"
                style="font-size: 14.45px; line-height: 20.4px"
              >
                [读创]“深湾之境”摄影展在深圳青年美术馆启幕
              </h4>
              <span
                class="mt-[8.5px] font-normal text-[#888]"
                style="font-size: 13.6px"
                >2024.10.04</span
              >
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div
        ref="middle"
        class="order-1 w-full transition-transform duration-500 ease-out md:order-2 md:w-[calc(100%_-21.21%*2)] md:px-[37.4px] lg:px-[35.2px]"
      >
        <Swiper
          :modules="[
            SwiperAutoplay,
            SwiperNavigation,
            SwiperPagination,
            SwiperA11y,
          ]"
          :slides-per-view="1"
          :loop="true"
          tag="div"
          wrapper-tag="ul"
          :speed="800"
          :navigation="{
            nextEl: '.swiper-button-next-1',
            prevEl: '.swiper-button-prev-1',
          }"
          :pagination="{
            el: '.swiper-pagination-1',
            clickable: true,
          }"
          :autoplay="{
            delay: 6000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          }"
          class="relative w-full !pb-[63.75px] before:absolute before:bottom-0 before:left-0 before:top-0 before:hidden before:w-[1px] before:bg-[#d6d6d6] before:content-[''] after:absolute after:bottom-0 after:right-0 after:top-0 after:hidden after:w-[1px] after:bg-[#d6d6d6] after:content-[''] md:before:block md:after:block"
        >
          <SwiperSlide class="block" tag="li">
            <NuxtLink
              to="info/1092/21201"
              title="学校举办2024全球职业教育数字化转型（深圳）论坛"
              class="group"
            >
              <div class="w-full overflow-hidden">
                <NuxtImg
                  format="webp"
                  quality="80"
                  class="aspect-[1/0.6154] lg:object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08]"
                  src="/images/meitishenzhi.jpg"
                />
              </div>
            </NuxtLink>
            <div class="px-[49.3px] py-[17px]">
              <div class="flex justify-center">
                <NuxtLink
                  class="relative flex items-center text-[#fba33e] before:absolute before:right-[110%] before:h-[1px] before:w-[12.75px] before:bg-[#fba33e] before:content-[''] after:absolute after:left-[110%] after:h-[1px] after:w-[12.75px] after:bg-[#fba33e] after:content-['']"
                  to="xwzt/szyw.htm"
                  target="_blank"
                >
                  <span
                    class="text-nowrap font-semibold"
                    style="line-height: 18.7px; font-size: 18.7px"
                    >深职要闻</span
                  >
                  <span
                    class="ml-[8.5px] uppercase"
                    style="font-size: 11.9px; line-height: 11.9px"
                    >Important News</span
                  >
                </NuxtLink>
              </div>

              <NuxtLink to="info/1092/21201">
                <h4
                  class="mb-[18.7px] mt-[21.25px] text-center font-medium text-[#555] transition-colors duration-500 lg:hover:text-[#fba33e]"
                  style="
                    font-size: 18.7px;
                    line-height: 25.5px;
                    font-family: 'Microsoft Yahei';
                  "
                >
                  学校举办2024全球职业教育数字化转型（深圳）论坛
                </h4>
                <p
                  class="mb-[12.75px] line-clamp-3 px-[10.2px] text-center text-[#898989]"
                  style="font-size: 11.05px; line-height: 18.7px"
                >
                  2024全球职业教育数字化转型（深圳）论坛在我校举行。10月22日至23日，学校举行2024全球职业教育数字化转型（深圳）论坛。会上发布了联合国教科文组织职业技术教育数字化教席（以下简称“教席”）自2022年设立以来的五项重要成果，包括全球职教数字化转型研究报告、28个专业教学标准、50个数字技术类专业课程标准、100篇优秀案例和16门数字技术类在线课程。教席主持人、学校党委书记杨欣斌表示，教席将继续深化研究，推动全球职...
                </p>
              </NuxtLink>
            </div>
          </SwiperSlide>

          <SwiperSlide class="block" tag="li">
            <NuxtLink
              to="info/1092/21201"
              title="学校举行“全面深化改革开放，以广东新质生产力高质量发展推动中国式现代化”学术研讨会"
              class="group"
            >
              <div class="w-full overflow-hidden">
                <NuxtImg
                  format="webp"
                  quality="80"
                  class="aspect-[1/0.6154] lg:object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08]"
                  src="/images/meitishenzhi.jpg"
                />
              </div>
            </NuxtLink>
            <div class="px-[49.3px] py-[17px]">
              <div class="flex justify-center">
                <NuxtLink
                  class="relative flex items-center text-[#fba33e] before:absolute before:right-[110%] before:h-[1px] before:w-[12.75px] before:bg-[#fba33e] before:content-[''] after:absolute after:left-[110%] after:h-[1px] after:w-[12.75px] after:bg-[#fba33e] after:content-['']"
                  to="xwzt/szyw.htm"
                  target="_blank"
                >
                  <span
                    class="text-nowrap font-semibold"
                    style="line-height: 18.7px; font-size: 18.7px"
                    >深职要闻</span
                  >
                  <span
                    class="ml-[8.5px] uppercase"
                    style="font-size: 11.9px; line-height: 11.9px"
                    >Important News</span
                  >
                </NuxtLink>
              </div>

              <NuxtLink to="info/1092/21201">
                <h4
                  class="mb-[18.7px] mt-[21.25px] line-clamp-3 text-center font-medium text-[#555] transition-colors duration-500 lg:hover:text-[#fba33e]"
                  style="
                    font-size: 18.7px;
                    line-height: 25.5px;
                    font-family: 'Microsoft Yahei';
                  "
                >
                  学校举行“全面深化改革开放，以广东新质生产力高质量发展推动中国式现代化”学术研讨会
                </h4>
                <p
                  class="mb-[12.75px] line-clamp-3 px-[10.2px] text-center text-[#898989]"
                  style="font-size: 11.05px; line-height: 18.7px"
                >
                  10月19日，2024广东社会科学学术年会——“全面深化改革开放，以广东新质生产力高质量发展推动中国式现代化”学术研讨会在我校留仙洞园区同德楼1号会议室举办。学校党委副书记、校长许建领，香港银行学会总裁梁嘉丽，深圳市社科联副主席范伟军，省社科联二级巡视员何方俊先后致辞。来自省内外高校、党校、研究机构和行业协会的50多家单位，共120多名专家学者齐聚一堂，为“新发展格局的战略支点、高质量发展的示范地、中国式现...
                </p>
              </NuxtLink>
            </div>
          </SwiperSlide>

          <SwiperSlide class="block" tag="li">
            <NuxtLink
              to="info/1092/21201"
              title="三金两银！深职学子在中国国际大学生创新大赛（2024）国赛中获佳绩"
              class="group"
            >
              <div class="w-full overflow-hidden">
                <NuxtImg
                  format="webp"
                  quality="80"
                  class="aspect-[1/0.6154] lg:object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08]"
                  src="/images/CB8E298308CADB4D7B7FDD327BC_51728C60_2DBA7.jpg"
                />
              </div>
            </NuxtLink>
            <div class="px-[49.3px] py-[17px]">
              <div class="flex justify-center">
                <NuxtLink
                  class="relative flex items-center text-[#fba33e] before:absolute before:right-[110%] before:h-[1px] before:w-[12.75px] before:bg-[#fba33e] before:content-[''] after:absolute after:left-[110%] after:h-[1px] after:w-[12.75px] after:bg-[#fba33e] after:content-['']"
                  to="xwzt/szyw.htm"
                  target="_blank"
                >
                  <span
                    class="text-nowrap font-semibold"
                    style="line-height: 18.7px; font-size: 18.7px"
                    >深职要闻</span
                  >
                  <span
                    class="ml-[8.5px] uppercase"
                    style="font-size: 11.9px; line-height: 11.9px"
                    >Important News</span
                  >
                </NuxtLink>
              </div>

              <NuxtLink to="info/1092/21201">
                <h4
                  class="mb-[18.7px] mt-[21.25px] text-center font-medium text-[#555] transition-colors duration-500 lg:hover:text-[#fba33e]"
                  style="
                    font-size: 18.7px;
                    line-height: 25.5px;
                    font-family: 'Microsoft Yahei';
                  "
                >
                  三金两银！深职学子在中国国际大学生创新大赛（2024）国赛中获佳绩
                </h4>
                <p
                  class="mb-[12.75px] line-clamp-3 px-[10.2px] text-center text-[#898989]"
                  style="font-size: 11.05px; line-height: 18.7px"
                >
                  在10月12至15日举办的中国国际大学生创新大赛（2024）中，我校共获得3金2银的好成绩。学校在国家级创新创业大赛中累计已获得15金11银，继续领跑全国职业院校金牌榜和奖牌榜。其中，人工智能学院的“瑕检先锋”项目、本科教育学院与智能制造研究院的“焊卫者”项目、管理学院与机电学院的“阀匠”项目获职教赛道金奖，机电学院的“灵嗅”项目获职教赛道银奖，食品药品学院的“兽用乳炎微针”项目获高教主赛道银奖。8个月的备赛过...
                </p>
              </NuxtLink>
            </div>
          </SwiperSlide>

          <SwiperSlide class="block" tag="li">
            <NuxtLink
              to="info/1092/21201"
              title="学校举行首场2025届毕业生大型校园招聘会"
              class="group"
            >
              <div class="w-full overflow-hidden">
                <NuxtImg
                  format="webp"
                  quality="80"
                  class="aspect-[1/0.6154] lg:object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08]"
                  src="/images/FD45E1D3459A5E5A3E7238B5337_BD75B40F_4C9F0.jpg"
                />
              </div>
            </NuxtLink>
            <div class="px-[49.3px] py-[17px]">
              <div class="flex justify-center">
                <NuxtLink
                  class="relative flex items-center text-[#fba33e] before:absolute before:right-[110%] before:h-[1px] before:w-[12.75px] before:bg-[#fba33e] before:content-[''] after:absolute after:left-[110%] after:h-[1px] after:w-[12.75px] after:bg-[#fba33e] after:content-['']"
                  to="xwzt/szyw.htm"
                  target="_blank"
                >
                  <span
                    class="text-nowrap font-semibold"
                    style="line-height: 18.7px; font-size: 18.7px"
                    >深职要闻</span
                  >
                  <span
                    class="ml-[8.5px] uppercase"
                    style="font-size: 11.9px; line-height: 11.9px"
                    >Important News</span
                  >
                </NuxtLink>
              </div>

              <NuxtLink to="info/1092/21201">
                <h4
                  class="mb-[18.7px] mt-[21.25px] text-center font-medium text-[#555] transition-colors duration-500 lg:hover:text-[#fba33e]"
                  style="
                    font-size: 18.7px;
                    line-height: 25.5px;
                    font-family: 'Microsoft Yahei';
                  "
                >
                  学校举行首场2025届毕业生大型校园招聘会
                </h4>
                <p
                  class="mb-[12.75px] line-clamp-3 px-[10.2px] text-center text-[#898989]"
                  style="font-size: 11.05px; line-height: 18.7px"
                >
                  招聘会在西丽湖园区、留仙洞园区同时举行。10月16日，为促进毕业生实现高质量充分就业，持续拓宽就业渠道，搭建优质求职平台，由我校联合深圳市人力资源和社会保障局、共青团深圳市委员会以及南山区人力资源和社会保障局共同举办的首场2025届毕业生校园招聘会在西丽湖园区大运广场、留仙洞园区灯光篮球场举行。招聘会现场，党委书记杨欣斌，党委副书记、校长许建领，副校长董朝君莅临指导，深入了解学生的求职计划应聘情况，与...
                </p>
              </NuxtLink>
            </div>
          </SwiperSlide>

          <SwiperSlide class="block" tag="li">
            <NuxtLink
              to="info/1092/21201"
              title="学校召开2024年全面从严治党工作会议"
              class="group"
            >
              <div class="w-full overflow-hidden">
                <NuxtImg
                  format="webp"
                  quality="80"
                  class="aspect-[1/0.6154] lg:object-cover lg:transition-transform lg:duration-1000 lg:ease-[cubic-bezier(0.25,0,0,1)] lg:group-hover:scale-[1.08]"
                  src="/images/meitishenzhi.jpg"
                />
              </div>
            </NuxtLink>
            <div class="px-[49.3px] py-[17px]">
              <div class="flex justify-center">
                <NuxtLink
                  class="relative flex items-center text-[#fba33e] before:absolute before:right-[110%] before:h-[1px] before:w-[12.75px] before:bg-[#fba33e] before:content-[''] after:absolute after:left-[110%] after:h-[1px] after:w-[12.75px] after:bg-[#fba33e] after:content-['']"
                  to="xwzt/szyw.htm"
                  target="_blank"
                >
                  <span
                    class="text-nowrap font-semibold"
                    style="line-height: 18.7px; font-size: 18.7px"
                    >深职要闻</span
                  >
                  <span
                    class="ml-[8.5px] uppercase"
                    style="font-size: 11.9px; line-height: 11.9px"
                    >Important News</span
                  >
                </NuxtLink>
              </div>

              <NuxtLink to="info/1092/21201">
                <h4
                  class="mb-[18.7px] mt-[21.25px] text-center font-medium text-[#555] transition-colors duration-500 lg:hover:text-[#fba33e]"
                  style="
                    font-size: 18.7px;
                    line-height: 25.5px;
                    font-family: 'Microsoft Yahei';
                  "
                >
                  学校召开2024年全面从严治党工作会议
                </h4>
                <p
                  class="mb-[12.75px] line-clamp-3 px-[10.2px] text-center text-[#898989]"
                  style="font-size: 11.05px; line-height: 18.7px"
                >
                  会议在同德楼1号会议室召开。10月8日，学校在同德楼1号会议室召开2024年全面从严治党工作会议。校领导、党委委员、纪委委员，全体中层干部，二级单位纪委委员、党总支纪检委员，各研究院、研发院院长或执行院长等150余人参加会议。会议由学校党委副书记、纪委书记王慧主持。会议伊始，全体参会人员集体观看了警示教育片《大学校长的失色人生》。教育片讲述了云南大学原校长吴某严重违纪违法案例，警醒、教育全体党员干部坚守教...
                </p>
              </NuxtLink>
            </div>
          </SwiperSlide>

          <div class="relative flex items-center justify-between px-[49.3px]">
            <button
              class="swiper-button-prev-1 bg-arrow-prev group relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:translate-x-[110%] before:bg-[length:100%_100%] before:bg-center before:bg-no-repeat before:duration-500 lg:hover:before:translate-x-0"
            >
              <NuxtImg
                quality="80"
                class="relative h-[8.5px] duration-500 lg:group-hover:translate-x-[-110%]"
                src="/images/arrow1_prev.svg"
              />
            </button>
            <div
              class="swiper-pagination swiper-pagination-1 !static !h-[14px] !w-[76.46px]"
              style="line-height: 14px"
            />
            <button
              class="swiper-button-next-1 bg-arrow-next group relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:translate-x-[-110%] before:bg-[length:100%_100%] before:bg-center before:bg-no-repeat before:duration-500 lg:hover:before:translate-x-0"
            >
              <NuxtImg
                quality="80"
                class="h-[8.5px] duration-500 lg:group-hover:translate-x-[110%]"
                src="/images/arrow1_next.svg"
              />
            </button>
          </div>
        </Swiper>
      </div>
      <div
        ref="right"
        class="order-3 w-full py-[25.5px] transition-transform duration-500 ease-out md:order-3 md:w-[21.21%]"
      >
        <div class="mb-[12.75px]">
          <NuxtLink
            to="xysh/xygg"
            class="relative flex items-center text-[#666666]"
          >
            <span
              class="text-nowrap font-semibold"
              style="font-size: 18.7px; line-height: 18.7px"
              >公告通知</span
            >
            <span
              class="ml-[8.5px] font-semibold uppercase"
              style="font-size: 11.9px; line-height: 11.9px"
              >Notices and Announcements</span
            >
          </NuxtLink>
        </div>

        <ul
          class="divide-y-[0.666667px] divide-solid divide-[#e2e22] font-normal sm:font-bold"
        >
          <li class="list-item">
            <NuxtLink
              class="group flex h-[85px] items-center"
              to="info/1046/21188"
              target="_blank"
              title="2024年12月1日日语能力考试深圳职业技术大学考点入校要求暨2024年7月日语能力考试合格证、成绩单领取通知"
            >
              <span
                class="mr-[12.75px] block min-w-[51px] bg-[#eff1f2] text-center font-normal text-[#666] duration-500 lg:group-hover:bg-[#ff860b] lg:group-hover:text-white"
                style="line-height: 30.6px; font-size: 13.6px"
                >10.16</span
              >
              <h4
                class="line-clamp-2 text-justify text-[#333] duration-500 lg:group-hover:text-[#ff860b]"
                style="font-size: 14.45px; line-height: 20.4px"
              >
                2024年12月1日日语能力考试深圳职业技术大学考点入校要求暨2024年7月日语能力考试合格证、成绩单领取通知
              </h4>
            </NuxtLink>
          </li>

          <li class="list-item">
            <NuxtLink
              class="group flex h-[85px] items-center"
              to="info/1046/21147"
              target="_blank"
              title="集成电路关键材料研究院招聘"
            >
              <span
                class="mr-[12.75px] block min-w-[51px] bg-[#eff1f2] text-center font-normal text-[#666] duration-500 lg:group-hover:bg-[#ff860b] lg:group-hover:text-white"
                style="line-height: 30.6px; font-size: 13.6px"
                >09.30</span
              >
              <h4
                class="line-clamp-2 text-justify text-[#333] duration-500 lg:group-hover:text-[#ff860b]"
                style="font-size: 14.45px; line-height: 20.4px"
              >
                集成电路关键材料研究院招聘
              </h4>
            </NuxtLink>
          </li>

          <li class="list-item">
            <NuxtLink
              class="group flex h-[85px] items-center"
              to="info/1046/21082"
              target="_blank"
              title="关于2024年12月份全国外语等级考试报名的通知"
            >
              <span
                class="mr-[12.75px] block min-w-[51px] bg-[#eff1f2] text-center font-normal text-[#666] duration-500 lg:group-hover:bg-[#ff860b] lg:group-hover:text-white"
                style="line-height: 30.6px; font-size: 13.6px"
                >09.11</span
              >
              <h4
                class="line-clamp-2 text-justify text-[#333] duration-500 lg:group-hover:text-[#ff860b]"
                style="font-size: 14.45px; line-height: 20.4px"
              >
                关于2024年12月份全国外语等级考试报名的通知
              </h4>
            </NuxtLink>
          </li>

          <li class="list-item">
            <NuxtLink
              class="group flex h-[85px] items-center"
              to="info/1046/20182"
              target="_blank"
              title="深圳职业技术大学2024年博士后招聘公告"
            >
              <span
                class="mr-[12.75px] block min-w-[51px] bg-[#eff1f2] text-center font-normal text-[#666] duration-500 lg:group-hover:bg-[#ff860b] lg:group-hover:text-white"
                style="line-height: 30.6px; font-size: 13.6px"
                >03.04</span
              >
              <h4
                class="line-clamp-2 text-justify text-[#333] duration-500 lg:group-hover:text-[#ff860b]"
                style="font-size: 14.45px; line-height: 20.4px"
              >
                深圳职业技术大学2024年博士后招聘公告
              </h4>
            </NuxtLink>
          </li>

          <li class="list-item">
            <NuxtLink
              class="group flex h-[85px] items-center"
              to="info/1046/20182"
              target="_blank"
              title="智能科学与工程研究院招聘公告2024"
            >
              <span
                class="mr-[12.75px] block min-w-[51px] bg-[#eff1f2] text-center font-normal text-[#666] duration-500 lg:group-hover:bg-[#ff860b] lg:group-hover:text-white"
                style="line-height: 30.6px; font-size: 13.6px"
                >02.29</span
              >
              <h4
                class="line-clamp-2 text-justify text-[#333] duration-500 lg:group-hover:text-[#ff860b]"
                style="font-size: 14.45px; line-height: 20.4px"
              >
                智能科学与工程研究院招聘公告2024
              </h4>
            </NuxtLink>
          </li>

          <li class="list-item">
            <NuxtLink
              class="group flex h-[85px] items-center"
              to="info/1046/20182"
              target="_blank"
              title="深圳职业技术大学高层次人才招聘公告（长期招聘）"
            >
              <span
                class="mr-[12.75px] block min-w-[51px] bg-[#eff1f2] text-center font-normal text-[#666] duration-500 lg:group-hover:bg-[#ff860b] lg:group-hover:text-white"
                style="line-height: 30.6px; font-size: 13.6px"
                >10.26</span
              >
              <h4
                class="line-clamp-2 text-justify text-[#333] duration-500 lg:group-hover:text-[#ff860b]"
                style="font-size: 14.45px; line-height: 20.4px"
              >
                深圳职业技术大学高层次人才招聘公告（长期招聘）
              </h4>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const left = ref(null);
const middle = ref(null);
const right = ref(null);

const handleScroll = () => {
  if (window.innerWidth > 1024) {
    const scrollPosition = window.scrollY;
    const maxScrollY = 375;

    const translateY100 = Math.max(
      0,
      100 - (scrollPosition / maxScrollY) * 100
    );
    middle.value.style.transform = `translate3d(0, ${translateY100}px, 0)`;

    const translateY200 = Math.max(
      0,
      200 - (scrollPosition / maxScrollY) * 200
    );
    left.value.style.transform = `translate3d(0, ${translateY200}px, 0)`;
    right.value.style.transform = `translate3d(0, ${translateY200}px, 0)`;
  }
};

const handleResize = () => {
  if (window.innerWidth <= 1024) {
    middle.value.style.transform = `translate3d(0, 0, 0)`;
    left.value.style.transform = `translate3d(0, 0, 0)`;
    right.value.style.transform = `translate3d(0, 0, 0)`;
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
</script>

<style>
.swiper-pagination-bullet {
  @apply mx-[4.25px] h-[6.79px] w-[6.79px] bg-[#9d9d9d] opacity-100;
}

.swiper-pagination-bullet-active {
  @apply bg-[#fda42f];
}

.bg-arrow-prev::before {
  background-image: url(~/assets/images/arrow1_prev.svg);
}

.bg-arrow-next::before {
  background-image: url(~/assets/images/arrow1_next.svg);
}
</style>
