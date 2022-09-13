<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useRouter } from "vue-router";                                                                                                                   
import { ref, computed, watch, onUpdated } from "vue";

const router = useRouter();
console.log(router.currentRoute.value.name, 'ahahha')
watch(() => router.currentRoute.value.name, (newVal) => {
  console.log(`MyCoolComponent - watch route.name changed to ${newVal}`);
 }, { immediate: true });

</script>

<template>
  <Header />

  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>

  <Footer />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.menu-hamb .router-link-exact-active {
  text-decoration: underline !important;
}
</style>