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
// const { data, status, error, refresh, clear } = await useFetch('https://www.haoju.me/interface-server/api/getNavigatorSimpleArticleList.json', {
//   pick: ['body'],
//   query: {
//     siteID: '8a2f462a8b3ba8d7018b3cbe523202a1',
//     applicationID: '8a2f462a5d116c5d015d2088f9670dc4',
//     navigatorID: '0e7b55547f2d45ddab87d7814d69161b',
//     sortTypeOrder: '1',
//   }
// })

const data = ref({"header":{"code":0,"msg":"getNavigatorSimpleArticleList success"},"body":{"data":{"total":5,"currentPage":1,"currentPgeNumber":5,"pageNumber":10,"totalPage":1,"hasNextPage":false,"rows":[{"articleID":"6ab53db8fc964c1b8ce1598b1ff86fad","sourceID":null,"sourceName":null,"applicationID":"8a2f462a5d116c5d015d2088f9670dc4","companyID":"8a2f462a8b3ba8d7018b3cb581850251","sourceURL":null,"name":"两面针扬州调研：2024年7月3日","shortName":null,"title":"两面针扬州调研：2024年7月3日","subTitle":"两面针调研：2024年7月3日","description":"公司总经理赵真利作为扬州产业云专家，随同扬州创新院院长佘心国和其他专家，在2024年7月3日前往扬州两面针公司进行信息化调研。","descriptionEnglish":null,"publisURL":null,"functionURL":"http://sdlb.cc/news/8173956473.html","listImage":" http://wj.haoju.me/36bbf19060944faf933de71ae3882e7c.png","faceImage":" http://wj.haoju.me/36bbf19060944faf933de71ae3882e7c.png","videoURL":null,"readTimes":0,"contentText":"<p><span style=\"color: rgb(64, 64, 64);\">两面针（江苏）实业有限公司位于中国酒店日用品之都：江苏扬州市杭集工业园，占地面积37000平米，现有员工七百余人。是由柳州两面针股份有限公司于2004年投资亿元建设的 大型国有企业。年生产旅游牙膏、牙刷、香皂、洗发/沐浴露、洗衣液、洗手液、拖鞋等酒店洗漱用品总产</span><img src=\"http://wj.haoju.me/6b3a45cdba394f0a8fba30e3c8169650.webp\"></p><p><br></p><p><br></p><p>扬州市生态科技新城上海创新中心是长三角一体化协同发展的具体实践之一，是扬州市生态科技新城与上海产业技术研究院政产研合作的实质性内容，是扬州生态科技新城打造扬州科创中心的创新举措。</p><p>“上海产业技术研究院扬州创新院”作为“新城上海创新中心”的策划与运营方，本着“共建、共创、共享”的原则，基于扬州区域资源和产业禀赋，发挥上海的策源引领能力和科创资源高地优势，将深入挖掘需求价值，打造创新引擎，推动技术产业化与产业生态化，深度服务科创、服务产业、服务政府，为创新引领的区域协同与高质量发展提供更多支撑。</p><p>扬州市生态科技新城上海创新中心将积极发挥空间优势，围绕“主题技术平台+创新产业生态”的设计，不断推动创新要素链接融合，帮助构建适应区域创新发展的新型生产关系，共同催生新物种、新模式、新业态。</p><p>扬州创新院本次组织专家团前往两面针公司调研，两面针总经理兰进先生和分管信息化的张明先生参加了调研活动。</p><p>在调研过程中，两面针介绍了当前公司信息化状态，应用了众多的信息系统，在生产、仓储、销售等业务领域取得了良好的效益。未来，准备推进更多信息化项目，并积极相应扬州产业云规划，在工业互联网等领域建立信息化标杆企业。</p><p><br></p><p class=\"ql-align-center\"><img src=\"http://wj.haoju.me/09a980978a6a49bb982a785b13593781.webp\"></p>","contentEnglish":null,"createdTime":1720405918000,"createdTimeStr":"2024-07-08 10:31:58","createdDateStr":"2024-07-08","isLock":0,"startDate":1720368000000,"startDateStr":"2024-07-08 00:00:00"},{"articleID":"be1d37423f2e4f3f88704c053700cf80","sourceID":null,"sourceName":null,"applicationID":"8a2f462a5d116c5d015d2088f9670dc4","companyID":"8a2f462a8b3ba8d7018b3cb581850251","sourceURL":null,"name":"医院供应链系统：上海十院推进节点","shortName":null,"title":"医院供应链系统：上海十院推进节点","subTitle":"医院供应链系统：上海十院推进节点","description":"我公司为上海第十人民医院开发的医院供应链系统，在2023年开发完成后，经过不断推进，目前已经有1000个供应商入驻使用。","descriptionEnglish":null,"publisURL":null,"functionURL":"http://sdlb.cc/news/2238921176.html","listImage":" http://wj.haoju.me/3a2c74c4966f4efc81c57b4b420a4722.png","faceImage":" http://wj.haoju.me/2fbc8e75b4004ac18c7412853d02cfc6.png","videoURL":null,"readTimes":0,"contentText":"<p>2024年5月27日：上海十院传来捷报，第1000家供应商入驻医院供应链系统。</p><p>自2023年系统开发完成以来，上海十院通过按批次要求供应商入驻本系统，前面是按10家供应商是1个批次，后续为100家供应商为1个批次。累计到今天，已经有1000家供应商入驻。</p><p>上海十院医院供应链管理系统是在我公司技术平台的技术上进行定制化开发的，包含1个pc端，1个微信小程序。</p><p>各业务科室通过十院现有的HIS系统，提交医疗耗材的使用申请，我方系统通过定时抓取这些申请，设备科业务老师进行初步审核，并通过系统自动统计和预算定额匹配，符合预算的申请，通过审核、下单，发送给供应商。供应商登录系统后，通过查看采购单，进行接单、备货、发货、上传发票等流程，实现快速操作。十院仓库部门收到货后，在系统内进行收货操作，查验发票后，安排财务付款。</p><p>耗材供应链支持货票同行模式和备货模式。货票同行模式是指供应商在发货的时候，同时开具发票。十院在收货同时，收到发票，进行付款操作。备货模式是指供应商预先发货到业务科室，在业务科室使用耗材后，按实际使用量提示申请，供应商直接开具发票。</p><p><br></p><p class=\"ql-align-center\"><img src=\"http://wj.haoju.me/64a574e8bcce42c4924abafc43e84fbd.png\"></p>","contentEnglish":null,"createdTime":1716787918000,"createdTimeStr":"2024-05-27 13:31:58","createdDateStr":"2024-05-27","isLock":0,"startDate":1716739200000,"startDateStr":"2024-05-27 00:00:00"},{"articleID":"02ab1bdfcdc24d95bb8b9f34feb19dd0","sourceID":null,"sourceName":null,"applicationID":"8a2f462a5d116c5d015d2088f9670dc4","companyID":"8a2f462a8b3ba8d7018b3cb581850251","sourceURL":null,"name":"走进上市公司：倍加洁信息化调研","shortName":null,"title":"走进上市公司：倍加洁信息化调研","subTitle":"走进上市公司：倍加洁信息化调研","description":"2024年7月3日，公司总经理赵真利随同扬州创新院千万倍加洁公司进行信息化调研。","descriptionEnglish":null,"publisURL":null,"functionURL":"http://sdlb.cc/news/5010072603.html","listImage":" http://wj.haoju.me/da410937fdd74a0f9e3fbb04b1e69ded.png","faceImage":" http://wj.haoju.me/da410937fdd74a0f9e3fbb04b1e69ded.png","videoURL":null,"readTimes":0,"contentText":"<p>倍加洁公司创立于1997年，深耕口腔护理行业26年，是国内口腔护理行业A股上市，销售足迹遍及30多个国家地区。</p><p><br></p><p class=\"ql-align-center\"><img src=\"http://wj.haoju.me/6234fbc848e24a348c1c3b77bf66f88c.jpg\"></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\">扬州创创新院大家了扬州产业云，为扬州市企业提供信息化云平台。本次调研过程中，倍加洁董事长张文生、信息化分管周总、信息技术负责人孙骏等介绍了公司信息化的现状和未来展望。</p><p class=\"ql-align-center\">倍加洁作为酒店日化用品龙头企业，信息化建设走在了行业前列。</p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><img src=\"http://wj.haoju.me/c57b1a824b6c4f739c3079f6617432d1.jpeg\"></p>","contentEnglish":null,"createdTime":1720406495000,"createdTimeStr":"2024-07-08 10:41:35","createdDateStr":"2024-07-08","isLock":0,"startDate":1720368000000,"startDateStr":"2024-07-08 00:00:00"},{"articleID":"363e989458c244d2866c12ec5572ba28","sourceID":null,"sourceName":null,"applicationID":"8a2f462a5d116c5d015d2088f9670dc4","companyID":"8a2f462a8b3ba8d7018b3cb581850251","sourceURL":null,"name":"著作权：万欢谷企业管理建站平台","shortName":null,"title":"著作权：万欢谷企业管理建站平台","subTitle":"著作权：万欢谷企业管理建站平台","description":"万欢谷公司2024年获取到第一个著作权证书。","descriptionEnglish":null,"publisURL":null,"functionURL":"http://sdlb.cc/news/6452451596.html","listImage":" http://wj.haoju.me/ec1bac8a7ee94f3d8e72305c84eae3cf.png","faceImage":" http://wj.haoju.me/ec1bac8a7ee94f3d8e72305c84eae3cf.png","videoURL":null,"readTimes":0,"contentText":"<p>万欢谷企业管理建站平台是2024年获取到的第一个著作权证书。</p><p>企业管理建站平台包含了中小型企业按需定制企业网站的各项功能。</p><p><br></p><p class=\"ql-align-center\"><img src=\"http://wj.haoju.me/92612daa751d4fd48e073a75e8e53cd8.png\"></p>","contentEnglish":null,"createdTime":1717054124000,"createdTimeStr":"2024-05-30 15:28:44","createdDateStr":"2024-05-30","isLock":0,"startDate":1716998400000,"startDateStr":"2024-05-30 00:00:00"},{"articleID":"4f1dca276e024659832d96442e56817c","sourceID":null,"sourceName":null,"applicationID":"8a2f462a5d116c5d015d2088f9670dc4","companyID":"8a2f462a8b3ba8d7018b3cb581850251","sourceURL":null,"name":"“专精特新”企业家俱乐部     第六期《会员交流会》","shortName":null,"title":"“专精特新”企业家俱乐部     第六期《会员交流会》","subTitle":"“专精特新”企业家俱乐部     第六期《会员交流会》","description":"公司总经理赵真利在2024年6月21日参加了 “专精特新”企业家俱乐部第六期《会员交流会》，在会议上介绍了公司发展情况和技术平台的优势，和众多企业家交流企业管理心得。","descriptionEnglish":null,"publisURL":null,"functionURL":"http://sdlb.cc/news/8667045628.html","listImage":" http://wj.haoju.me/546d4c7b0f3b42a49c826dc929b727bf.jpeg","faceImage":null,"videoURL":null,"readTimes":0,"contentText":"<p><span style=\"color: rgba(0, 0, 0, 0.9);\">6月21日，“专精特新”企业家第六期《会员交流会》在和君上海总部成功举行。公司总经理赵真利参加了本次交流会。在会议上，介绍了公司的发展情况和技术平台的优势，和众多企业家交流企业信息化管理的各项问题。</span></p><p><br></p><p class=\"ql-align-center\"><img src=\"http://wj.haoju.me/4bad6bf5363749efaca54ea04776a708.jpeg\"></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><span style=\"color: rgba(0, 0, 0, 0.9);\">“专精特新”企业家俱乐部由和君资本合伙人、和君高金俱乐部副秘书长姚辉发起，旨在聚集专精特新企业家、上市公司高管、知名投资机构合伙人、聚焦新能源、新材料、智能制造、信息技术行业，促进各会员间的资金融通、业务拓展、结交人脉。</span></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><img src=\"http://wj.haoju.me/86a5a6feaec249c5a9ddcf050a96c55f.webp\"></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\">上海万欢谷信息科技有限公司致力于互联网+物联网的技术平台研发，并为客户提供高层次的定制化服务，在会议上，公司介绍了共享信息技术部的业务模式，获得了很大的共鸣。在传统企业，数字化，信息化是势不可挡的趋势。企业缺少专业化的信息技术人才，在信息化进程中受阻。共享信息技术部的业务模式，可为企业解决人才不足，缺少规划，难以实施，成本高，效率低的问题。</p>","contentEnglish":null,"createdTime":1719026924000,"createdTimeStr":"2024-06-22 11:28:44","createdDateStr":"2024-06-22","isLock":0,"startDate":1718985600000,"startDateStr":"2024-06-22 00:00:00"}]}}})

const items = ref(data.value.body.data.rows)
</script>

<style></style>
