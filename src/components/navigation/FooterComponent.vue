<template>
  <footer class="bg-dark text-white w-full">
    <div class="mx-auto max-w-screen-2xl py-8 p-heading-page">
      <div class="grid grid-cols-2 gap-10 xs:gap-3 lg:gap-10">
        <div class="col-span-2 xs:col-span-1 lg:col-span-2 xs:order-2 lg:order-1">
          <ul
            class="gap-1 lg:gap-10 flex items-center xs:items-start justify-center flex-col lg:flex-row"
          >
            <li v-for="item in filteredNavItems" :key="item.title">
              <router-link
                :to="item.route"
                class="text-white sm:hover:underline sm:hover:decoration-tertiary sm:hover:decoration-2 sm:hover:underline-offset-4 uppercase text-lg font-medium"
                aria-current="page"
                >{{ item.title }}</router-link
              >
            </li>
          </ul>
        </div>
        <div
          class="col-span-2 xs:col-span-1 lg:col-span-2 flex flex-col lg:items-center lg:justify-center order-1 items-center xs:items-start"
        >
          <div class="flex flex-shrink-0 gap-3 items-center">
            <router-link :to="{ name: 'home' }" class="w-14 sm:w-14 h-auto"
              ><SvgComponent
                name="logo"
                outline-class="fill-white"
                inner-secondary-class="fill-dark"
                inner-class="fill-dark"
            /></router-link>

            <small class="flex flex-col">
              <span>Copyright &copy; {{ new Date().getFullYear() }}</span>
              <span>Monique Blignaut</span>
              <span>All Rights Reserved</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { navItems } from '@/data/navigation'
import SvgComponent from '@/components/misc/SvgComponent.vue'

const filteredNavItems = navItems.filter((item) => item.title != 'Home')
</script>

<style lang="css" scoped></style>
