<template>
  <div>
    <PageHero name="APPLICATIONS" />
    <div class="py-[50px] container main-slideshow">
      <carousel
        :items-to-show="1"
        :autoplay="3000"
        :wrapAround="true"
        :snapAlign="center"
        :mouseDrag="false"
        :touchDrag="false"
      >
        <slide v-for="slide in 3" :key="slide">
          <router-link class="w-full h-full" :to="`/products/TL${slide}`">
            <img class="w-full h-full" :src="setImageUrl(slide)" alt="slide-1" />
          </router-link>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script setup>
import PageHero from "../components/PageHero.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const setImageUrl = (index) => {
  return new URL("/src/assets/images/slide-" + index + ".png", import.meta.url);
};
</script>

<style>
.carousel__prev {
  left: 25px !important;
}
.carousel__next {
  right: 25px !important;
}

.carousel__next,
.carousel__prev {
  background-color: #ff7800 !important;
}

.carousel__pagination-button {
  background-color: rgba(255, 120, 0, 0.4) !important;
}

.carousel__pagination-button--active {
  background-color: rgba(255, 120, 0, 1) !important;
}

.carousel__pagination {
    margin-top: 20px;
}

</style>