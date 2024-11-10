<template>
  <nav
    class="fixed z-50 block h-dvh w-screen overflow-y-scroll bg-[rgb(241,241,241)] px-[20px] pb-[30px] pt-[calc(90px_-_var(--header-height))] text-[#333] transition-[transform,opacity] duration-300 ease-out lg:hidden"
  >
    <ul
      class="mb-[17px] flex h-[25.5px] flex-wrap items-center justify-center pb-[5.1px]"
      style="font-size: 13.6px; line-height: 13.6px"
    >
      <li class="px-[5.1px]">
        <NuxtLink to="xxgk/xxjj">学生</NuxtLink>
      </li>
      <li class="px-[5.1px]">
        <NuxtLink to="xxgk/xxjj">教工</NuxtLink>
      </li>
      <li class="px-[5.1px]">
        <NuxtLink to="xxgk/xxjj">访客</NuxtLink>
      </li>
      <li class="px-[5.1px]">
        <NuxtLink to="xxgk/xxjj">人才招聘</NuxtLink>
      </li>
      <li class="px-[5.1px]">
        <NuxtLink to="xxgk/xxjj">图书馆</NuxtLink>
      </li>
    </ul>

    <form class="inline">
      <div class="relative h-[60px] w-full overflow-hidden">
        <div>
          <input
            placeholder="请输入搜索关键词"
            class="h-[44px] w-[calc(100%_-_66px)] rounded-l-full border border-[#fba33e] px-[20.4px] text-[#646464] focus:outline-none"
            style="font-size: 14px"
          >
          <button
            class="bg-submit absolute h-[44px] w-[66px] cursor-pointer rounded-r-full bg-[#fba33e] bg-center bg-no-repeat"
          />
        </div>
      </div>
    </form>

    <ul id="list-box-nav-mobile" class="block px-[39.771px]">
      <li class="closed relative w-full overflow-hidden">
        <NuxtLink>
          <div
            class="w-full border-b border-[rgba(0,0,0,0.06)]"
            style="line-height: 54.4px; font-size: 17px"
          >
            学校概况
          </div>
        </NuxtLink>
        <button
          class="bg-arrow-down absolute right-[-17px] top-0 h-[54.3958px] w-[54.3958px] -rotate-90 bg-center bg-no-repeat"
          @click="handleClick"
        />
        <div class="relative h-[280px] transition-all duration-500">
          <div class="py-[10px]">
            <div
              class="text-[rgb(102,102,102)]"
              style="font-size: 13px; line-height: 32.5px"
            >
              <NuxtLink class="block">学校简介</NuxtLink>
              <NuxtLink class="block">深职标识</NuxtLink>
              <NuxtLink class="block">现任领导</NuxtLink>
              <NuxtLink class="block">信息公开</NuxtLink>
              <NuxtLink class="block">历任领导</NuxtLink>
              <NuxtLink class="block">历史回眸</NuxtLink>
              <NuxtLink class="block">校园风光</NuxtLink>
              <NuxtLink class="block">校园地图</NuxtLink>
            </div>
          </div>
        </div>
      </li>

      <li class="closed relative w-full overflow-hidden">
        <NuxtLink>
          <div
            class="w-full border-b border-[rgba(0,0,0,0.06)]"
            style="line-height: 54.4px; font-size: 17px"
          >
            组织机构
          </div>
        </NuxtLink>
        <button
          class="bg-arrow-down absolute right-[-17px] top-0 h-[54.3958px] w-[54.3958px] -rotate-90 bg-center bg-no-repeat"
          @click="handleClick"
        />
        <div class="relative h-[150px] transition-all duration-500">
          <div class="py-[10px]">
            <div
              class="text-[rgb(102,102,102)]"
              style="font-size: 13px; line-height: 32.5px"
            >
              <NuxtLink class="block">教学、教辅部门</NuxtLink>
              <NuxtLink class="block">研究院所</NuxtLink>
              <NuxtLink class="block">行政、职能部门</NuxtLink>
              <NuxtLink class="block">公司</NuxtLink>
            </div>
          </div>
        </div>
      </li>

      <li class="closed relative w-full overflow-hidden">
        <NuxtLink>
          <div
            class="w-full border-b border-[rgba(0,0,0,0.06)]"
            style="line-height: 54.4px; font-size: 17px"
          >
            教育教学
          </div>
        </NuxtLink>
        <button
          class="bg-arrow-down absolute right-[-17px] top-0 h-[54.3958px] w-[54.3958px] -rotate-90 bg-center bg-no-repeat"
          @click="handleClick"
        />
        <div class="relative h-[280px] transition-all duration-500">
          <div class="py-[10px]">
            <div
              class="text-[rgb(102,102,102)]"
              style="font-size: 13px; line-height: 32.5px"
            >
              <NuxtLink class="block">师资队伍</NuxtLink>
              <NuxtLink class="block">人才招聘</NuxtLink>
              <NuxtLink class="block">专业设置</NuxtLink>
              <NuxtLink class="block">人才培养</NuxtLink>
              <NuxtLink class="block">产教融合</NuxtLink>
              <NuxtLink class="block">双创教育</NuxtLink>
              <NuxtLink class="block">学生事务</NuxtLink>
              <NuxtLink class="block">深职i学习</NuxtLink>
            </div>
          </div>
        </div>
      </li>

      <li class="closed relative w-full overflow-hidden">
        <NuxtLink>
          <div
            class="w-full border-b border-[rgba(0,0,0,0.06)]"
            style="line-height: 54.4px; font-size: 17px"
          >
            科学研究
          </div>
        </NuxtLink>
        <button
          class="bg-arrow-down absolute right-[-17px] top-0 h-[54.3958px] w-[54.3958px] -rotate-90 bg-center bg-no-repeat"
          @click="handleClick"
        />
        <div class="relative h-[150px] transition-all duration-500">
          <div class="py-[10px]">
            <div
              class="text-[rgb(102,102,102)]"
              style="font-size: 13px; line-height: 32.5px"
            >
              <NuxtLink class="block">应用研发</NuxtLink>
              <NuxtLink class="block">产学研用</NuxtLink>
              <NuxtLink class="block">学术科研</NuxtLink>
              <NuxtLink class="block">研究院所</NuxtLink>
            </div>
          </div>
        </div>
      </li>

      <li class="closed relative w-full overflow-hidden">
        <NuxtLink>
          <div
            class="w-full border-b border-[rgba(0,0,0,0.06)]"
            style="line-height: 54.4px; font-size: 17px"
          >
            招生就业
          </div>
        </NuxtLink>
        <button
          class="bg-arrow-down absolute right-[-17px] top-0 h-[54.3958px] w-[54.3958px] -rotate-90 bg-center bg-no-repeat"
          @click="handleClick"
        />
        <div class="relative h-[150px] transition-all duration-500">
          <div class="py-[10px]">
            <div
              class="text-[rgb(102,102,102)]"
              style="font-size: 13px; line-height: 32.5px"
            >
              <NuxtLink class="block">学历教育</NuxtLink>
              <NuxtLink class="block">港澳台招生</NuxtLink>
              <NuxtLink class="block">就业创业</NuxtLink>
              <NuxtLink class="block">深职榜样</NuxtLink>
            </div>
          </div>
        </div>
      </li>

      <li class="closed relative w-full overflow-hidden">
        <NuxtLink>
          <div
            class="w-full border-b border-[rgba(0,0,0,0.06)]"
            style="line-height: 54.4px; font-size: 17px"
          >
            国际交流
          </div>
        </NuxtLink>
        <button
          class="bg-arrow-down absolute right-[-17px] top-0 h-[54.3958px] w-[54.3958px] -rotate-90 bg-center bg-no-repeat"
          @click="handleClick"
        />
        <div class="relative h-[85px] transition-all duration-500">
          <div class="py-[10px]">
            <div
              class="text-[rgb(102,102,102)]"
              style="font-size: 13px; line-height: 32.5px"
            >
              <NuxtLink class="block">国际平台</NuxtLink>
              <NuxtLink class="block">国际交流</NuxtLink>
            </div>
          </div>
        </div>
      </li>

      <li class="closed relative w-full overflow-hidden">
        <NuxtLink>
          <div
            class="w-full border-b border-[rgba(0,0,0,0.06)]"
            style="line-height: 54.4px; font-size: 17px"
            @click="handleClick"
          >
            校园生活
          </div>
        </NuxtLink>
        <button
          class="bg-arrow-down absolute right-[-17px] top-0 h-[54.3958px] w-[54.3958px] -rotate-90 bg-center bg-no-repeat"
          @click="handleClick"
        />
        <div class="relative h-[150px] transition-all duration-500">
          <div class="py-[10px]">
            <div
              class="text-[rgb(102,102,102)]"
              style="font-size: 13px; line-height: 32.5px"
            >
              <NuxtLink class="block">生活服务</NuxtLink>
              <NuxtLink class="block">网络服务</NuxtLink>
              <NuxtLink class="block">VPN</NuxtLink>
              <NuxtLink class="block">一网通办</NuxtLink>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const handleClick = (event) => {
  const listItems = document.querySelectorAll('#list-box-nav-mobile > li');
  const clickedItem = event.target.closest('li');
  const isClosed = clickedItem.classList.contains('closed');

  listItems.forEach((item) => {
    item.classList.add('closed');
  });

  if (isClosed) {
    clickedItem.classList.remove('closed');
  } else {
    clickedItem.classList.add('closed');
  }
};
</script>

<style scoped>
.bg-submit {
  background-image: url(~/assets/images/submit.svg);
  background-size: 25.5px;
}

.bg-arrow-down {
  background-image: url(~/assets/images/arrow_down.svg);
  background-size: 20px 20px;
}

.closed > div {
  @apply h-0;
}

.closed > button {
  @apply rotate-0;
}
</style>
