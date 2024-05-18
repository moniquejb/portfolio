<template>
  <nav id="nav" class="bg-primary sticky top-0 h-20 sm:h-24 z-50 drop-shadow-md sm:drop-shadow-sm">
    <div class="mx-auto max-w-screen-2xl h-full px-4 sm:px-6 lg:px-8">
      <div class="relative flex flex-row-reverse h-full items-center justify-between">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <HamburgerMenuComponent @click="toggle" :visible="showMenu" />
        </div>
        <div class="flex flex-1 items-center sm:items-stretch justify-start">
          <div class="flex flex-shrink-0 items-center text-white">
            <router-link :to="{ name: 'home' }" class="w-14 sm:w-16 h-auto"
              ><SvgComponent name="logo"
            /></router-link>
          </div>
          <div class="hidden sm:ml-1 md:ml-6 sm:flex items-center justify-between w-full">
            <ul class="flex sm:space-x-2 md:space-x-4">
              <li v-for="item in navItems" :key="item.title" class="px-3 py-2">
                <router-link
                  :to="item.route"
                  class="text-white sm:hover:underline sm:hover:decoration-tertiary sm:hover:decoration-2 sm:hover:underline-offset-4 uppercase text-lg font-medium"
                  aria-current="page"
                  >{{ item.title }}</router-link
                >
              </li>
            </ul>
            <ul class="flex space-x-4 items-center">
              <li class="px-1">
                <a href="mailto:moniblig@gmail.com" title="moniblig@gmail.com" target="_blank">
                  <SvgComponent name="email" className="w-8 h-auto"
                /></a>
              </li>
              <li class="px-1">
                <a href="https://wa.me/27825639133" title="+27 82 563 9133" target="_blank"
                  ><SvgComponent name="whatsapp" className="w-8 h-auto"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div :class="{ hidden: !showMenu, block: showMenu }" class="sm:hidden" id="mobile-menu">
      <div class="text-center px-2 pb-3 pt-2 items-center bg-primary flex flex-col">
        <ul class="flex flex-col">
          <li class="space-y-1 px-3 py-2" v-for="item in navItems" :key="item.title">
            <router-link
              v-slot="{ href, navigate }"
              :to="item.route"
              class="text-white sm:hover:underline sm:hover:decoration-tertiary sm:hover:decoration-2 sm:hover:underline-offset-4 uppercase text-lg font-medium"
              aria-current="page"
            >
              <a :href="href" @click="(showMenu = false), navigate($event)">
                {{ item.title }}</a
              ></router-link
            >
          </li>
        </ul>
        <ul class="flex space-x-5 items-center pt-5">
          <li>
            <a href="mailto:moniblig@gmail.com" title="moniblig@gmail.com" target="_blank">
              <SvgComponent name="email" className="w-7 h-auto"
            /></a>
          </li>
          <li>
            <a href="https://wa.me/27825639133" title="+27 82 563 9133" target="_blank"
              ><SvgComponent name="whatsapp" className="w-7 h-auto"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HamburgerMenuComponent from '@/components/navigation/HamburgerMenuComponent.vue'
import SvgComponent from '@/components/misc/SvgComponent.vue'
import { navItems } from '@/data/navigation'

const showMenu = ref(false)

function toggle() {
  showMenu.value = !showMenu.value
}
</script>
