<template>
  <div class="w-full bg-[#4C4C4C]">
    <div class="container pb-[71px] pt-[86px]">
      <h1
        class="font-rajdhani font-[900] text-[30px] leading-[33px] md:text-[45px] md:leading-[50px] text-white"
      >
        {{ name.toUpperCase() }}
      </h1>
      <p
        v-if="type"
        class="
          pt-[10px]
          md:text-[15px]
          leading-[28px]
          text-[13px]
          font-rajdhani
          text-white text-opacity-[85]
          font-medium
        "
      >
        MODEL: {{type}}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  type: {
    default: null,
    type: String
  }
});
</script>

<style lang="scss" scoped>
</style>