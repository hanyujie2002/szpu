<template>
  <div class="fixed z-50 w-full">
    <div
      class="fixed left-0 top-0 z-30 h-full w-full overflow-hidden bg-black/80"
    ></div>

    <div
      class="fixed left-1/2 top-1/2 z-40 w-[1000px] max-w-[94%] -translate-x-1/2 -translate-y-1/2 object-cover"
    >
      <div class="inline-block w-full">
        <video
          ref="video"
          controls
          class="aspect-[1/0.6] object-cover"
          src="~/assets/videos/video1.mp4"
        ></video>
      </div>

      <div
        class="absolute right-0 top-[-35px] z-40 h-[31px] w-[31px] text-center lg:right-[-42px] lg:top-0"
      >
        <button
          @click="$emit('hideVideoPlay')"
          class="group flex h-full w-full justify-center"
        >
          <svg
            t="1623297466363"
            class="icon duration-[600ms] group-hover:rotate-180"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3150"
            width="18"
            height="18"
          >
            <path
              d="M881.152 776.192c-0.512-1.024-1.024-1.536-2.048-2.56L616.96 511.488l262.144-262.144c0.512-1.024 1.536-1.536 2.048-2.56l1.024-1.024c28.672-28.672 28.16-74.24 0-102.912-1.024-1.024-2.048-1.536-3.072-2.56-1.536-1.536-2.56-3.072-4.096-4.096l-0.512 0.512c-28.672-21.504-69.12-19.456-95.232 6.144L514.048 408.064 251.904 146.432c-1.024-0.512-1.536-1.536-2.56-2.048l-1.024-1.024c-28.16-28.16-74.24-28.16-102.912 0-1.024 1.024-1.536 2.048-2.56 3.072-1.536 1.536-3.072 2.56-4.096 4.096l0.512 0.512c-21.504 28.672-19.456 69.12 6.144 95.232l265.216 265.216-265.216 265.216c-26.112 26.112-27.648 66.56-6.144 95.232l-0.512 0.512c1.024 1.536 2.56 2.56 4.096 4.096 1.024 1.024 1.536 2.048 2.56 3.072 28.672 28.16 74.24 28.16 102.912 0l1.024-1.024c1.024-0.512 1.536-1.024 2.56-2.048L514.048 614.4l265.216 265.216c26.112 26.112 66.56 27.648 95.232 6.144l0.512 0.512c1.536-1.024 2.56-2.56 4.096-4.096 1.024-1.024 2.048-1.536 3.072-2.56 28.16-28.672 28.16-74.24 0-102.912l-1.024-0.512z"
              p-id="3151"
              fill="#ffffff"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isVideoPlayActive: {
    type: Boolean,

    default: false,
  },
});

const video = ref(null);

watch(
  () => props.isVideoPlayActive,
  (newValue) => {
    if (newValue) {
      video.value.currentTime = 0;

      video.value.play();
    } else {
      video.value.pause();
    }
  }
);
</script>
