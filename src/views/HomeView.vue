<template>
  <div>
    <LandingComponent id="home" />
    <ProjectsComponent id="projects" />
    <AboutComponent id="about" />
    <ContactComponent id="contact" />
  </div>
</template>

<script setup lang="ts">
import AboutComponent from '@/components/about/AboutComponent.vue'
import ContactComponent from '@/components/contact/ContactComponent.vue'
import LandingComponent from '@/components/landing/LandingComponent.vue'
import ProjectsComponent from '@/components/projects/ProjectsComponent.vue'
</script>

<style scoped></style>
