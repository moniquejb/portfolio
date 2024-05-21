<template>
  <div class="bg-light flex flex-wrap">
    <div
      class="w-full xl:w-4/6 min-h-[400px] xs:min-h-[450px] xl:min-h-[650px] h-[calc(60vh-theme('spacing.20'))] sm:h-[calc(75svh-theme('spacing.20'))] xl:h-[calc(100svh-theme('spacing.24'))] flex justify-center xl:items-center"
    >
      <div
        class="rounded-3xl min-h-[400px] xs:min-h-[450px] xl:min-h-[600px] h-[calc(60vh-theme('spacing.20'))] sm:h-[calc(75svh-theme('spacing.20'))] xl:h-[calc(90svh-theme('spacing.24'))] w-full pt-4 xl:pt-0 xl:-mt-3"
      >
        <div class="grid grid-cols-12 grid-rows-12 h-full">
          <div class="col-span-1"></div>
          <div class="col-span-10 relative row-span-12 w-full">
            <div
              class="z-10 max-w-[1400px] border-2 xl:border-[3px] border-dark absolute top-0 left-1/2 -translate-x-1/2 rounded-3xl h-full bg-white w-full"
            >
              <FridgeMagnetsComponent />
            </div>
            <div
              class="z-0 max-w-[1400px] absolute top-2 xl:top-3 left-1/2 -translate-x-1/2 rounded-3xl h-full bg-dark w-full"
            ></div>
          </div>

          <div class="col-span-1"></div>
        </div>
      </div>
    </div>
    <div
      class="w-full xl:w-2/6 xl:min-h-[650px] xl:h-[calc(100svh-theme('spacing.24'))] flex justify-center flex-col xl:-ms-8 px-8 xl:px-0 py-8 xs:py-12 xl:py-0"
    >
      <h1 class="heading-main text-center">Frontend Software Developer</h1>

      <h2 class="text-base xs:text-lg lg:text-2xl xl:text-xl 2xl:text-2xl text-center my-5 xl:my-4">
        Vue.js &bull; Typescript &bull; Javascript<span class="inline xl:hidden"> &bull; </span
        ><br class="hidden xl:block" />
        Pinia &bull; HTML &bull; CSS/ SCSS<span class="inline xl:hidden"> &bull; </span
        ><br class="hidden xl:block" />
        Illustrator &bull; Photoshop
      </h2>
      <div class="text-center">
        <router-link :to="{ name: 'home', hash: '#projects' }">
          <ButtonComponent>View projects</ButtonComponent></router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/misc/ButtonComponent.vue'
import FridgeMagnetsComponent from '@/components/landing/FridgeMagnetsComponent.vue'
</script>

<style lang="css" scoped></style>
