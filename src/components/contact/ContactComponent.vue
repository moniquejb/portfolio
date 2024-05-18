<template>
  <div class="mx-auto max-w-screen-2xl p-heading-page">
    <h3 class="text-center heading-page">Contact</h3>
    <p class="py-paragraph text-base xs:text-lg md:text-2xl text-center md:text-start">
      Get in touch, I am always happy to connect!
    </p>
    <div class="flex justify-center md:justify-start">
      <ul class="flex flex-col gap-6 justify-center">
        <li class="px-1 inline-flex">
          <a
            href="mailto:moniblig@gmail.com"
            class="flex gap-3 items-center group/item"
            target="_blank"
            title="moniblig@gmail.com"
          >
            <SvgComponent
              name="email"
              className="w-8 md:w-10 h-auto"
              innerClass="fill-tertiary sm:group-hover/item:fill-secondary"
            />
            <span class="text-lg md:text-xl">moniblig@gmail.com</span>
          </a>
        </li>
        <li class="px-1 inline-flex">
          <a
            href="https://wa.me/27825639133"
            class="flex gap-3 items-center group/item"
            target="_blank"
            title="+27 82 563 9133"
            ><SvgComponent
              name="whatsapp"
              className="w-8 md:w-10 h-auto"
              innerClass="fill-tertiary sm:group-hover/item:fill-secondary"
            />
            <span class="text-lg md:text-xl">+27 82 563 9133</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgComponent from '@/components/misc/SvgComponent.vue'
</script>

<style lang="css" scoped></style>
