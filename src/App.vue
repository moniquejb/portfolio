<template>
  <NavbarComponent />
  <main class="h-full w-full">
    <RouterView />
  </main>
  <FooterComponent />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarComponent from '@/components/navigation/NavbarComponent.vue'
import FooterComponent from '@/components/navigation/FooterComponent.vue'
</script>

<style scoped></style>
