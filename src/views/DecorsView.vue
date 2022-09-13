<template>
  <div>
    <PageHero name="DECORS" />
    <div class="w-full bg-white">
      <div
        class="container flex items-center justify-evenly gap-[20px] py-[50px] flex-wrap"
      >
        <div class="flex items-center lg:gap-[40px] justify-center flex-col">
          <h3
            class="
              font-rajdhani font-[900]
              text-[30px]
              leading-[33px]
              text-[#ff7800]
              py-[30px]
              lg:py-0
            "
          >
            GOLDEN OAK
          </h3>
          <div class="max-w-full md:max-w-[340px] hover:bg-black relative z-10 group">
            <img
              class="relative z-20 w-full filter-img-behind group-hover:opacity-80"
              src="../assets/images/tl1-go.png"
              alt="decors"
            />
          </div>
        </div>
        <div class="flex items-center lg:gap-[40px] justify-center flex-col">
          <h3
            class="
              font-rajdhani font-[900]
              text-[30px]
              leading-[33px]
              text-[#ff7800]
              py-[30px]
              lg:py-0
            "
          >
            GRIGIO ANTICO
          </h3>
          <div class="max-w-full md:max-w-[340px] hover:bg-black relative z-10 group">
            <img
              class="relative z-20 w-full filter-img-behind group-hover:opacity-80"
              src="../assets/images/tl1-grigio.png"
              alt="decors"
            />
          </div>
        </div>
        <div class="flex items-center lg:gap-[40px] justify-center flex-col">
          <h3
            class="
              font-rajdhani font-[900]
              text-[30px]
              leading-[33px]
              text-[#ff7800]
              py-[30px]
              lg:py-0
            "
          >
            WHITE
          </h3>
          <div class="max-w-full md:max-w-[340px] hover:bg-black relative z-10 group">
            <img
              class="relative z-20 w-full filter-img-behind group-hover:opacity-80"
              src="../assets/images/tl1-white.png"
              alt="decors"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHero from "../components/PageHero.vue";
</script>

<style lang="scss" scoped>
</style>