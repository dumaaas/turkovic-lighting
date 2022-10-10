<template>
  <footer class="pt-[80px] bg-[#F5F5F5]">
    <div
      class="
        flex flex-wrap
        gap-[30px]
        container
        mx-auto
        justify-between
        pb-[70px]
      "
    >
      <div class="">
        <div class="ml-[-21px]">
          <Logo />
          <p
            class="
              font-rubik
              text-[13px]
              leading-[24px]
              text-[#4c4c4c]
              pt-[30px]
              pb-[20px]
              ml-[23px]
            "
          >
            Trade for the production of electrical equipment
          </p>
        </div>

        <!-- <div class="flex items-center gap-[19px]">
          <a
            title="Facebook"
            class="
              rounded-full
              hover:bg-[#3B5998]
              transition-all
              duration-200
              ease-in-out
              border-[1px] border-[#828282]
              w-[43px]
              h-[43px]
              bg-transparent
            "
            href=""
          >
          </a>
          <a
            title="LinkedIn"
            class="
              rounded-full
              border-[1px]
              hover:bg-[#0077B5]
              transition-all
              duration-200
              ease-in-out
              border-[#828282]
              w-[43px]
              h-[43px]
              bg-transparent
            "
            href=""
          >
          </a>
        </div> -->
      </div>
      <div>
        <h3
          class="
            font-rajdhani font-[900]
            text-[24px]
            leading-[26px]
            text-[#4c4c4c]
          "
        >
          CONTACT INFO
        </h3>
        <ul
          class="
            text-rubik text-[13px]
            leading-[26px]
            text-[#4c4c4c]
            list-[square]
            ml-[19px]
            pl-[24px]
            mt-[30px]
          "
        >
          <li>Kringa, Prenci 38a</li>
          <li>52444, Kringa, Istarska zupanija Croatia</li>
          <li>info@turkoviclighting.com</li>
          <li>+385 195 4 732</li>
        </ul>
      </div>
      <div>
        <h3
          class="
            font-rajdhani font-[900]
            text-[24px]
            leading-[26px]
            text-[#4c4c4c]
          "
        >
          LINKS
        </h3>
        <div
          class="
            pl-[24px]
            border-l-[1px] border-l-[#9c9c9c]
            flex flex-col
            mt-[30px]
          "
        >
          <router-link
            to="/"
            class="
              relative
              footer-link
              py-[5px]
              pl-[30px]
              text-[13px]
              leading-[17px]
              text-[#696969]
              hover:text-[#EE760C]
              transition-all
              duration-200
              ease-in-out
            "
            >HOME</router-link
          >
          <router-link
            to="/"
            class="
              relative
              footer-link
              py-[5px]
              pl-[30px]
              text-[13px]
              leading-[17px]
              text-[#696969]
              hover:text-[#EE760C]
              transition-all
              duration-200
              ease-in-out
            "
            >ABOUS US</router-link
          >
          <router-link
            to="/"
            class="
              relative
              footer-link
              py-[5px]
              pl-[30px]
              text-[13px]
              leading-[17px]
              text-[#696969]
              hover:text-[#EE760C]
              transition-all
              duration-200
              ease-in-out
            "
            >CONFIGURATOR</router-link
          >
          <router-link
            to="/"
            class="
              relative
              footer-link
              py-[5px]
              pl-[30px]
              text-[13px]
              leading-[17px]
              text-[#696969]
              hover:text-[#EE760C]
              transition-all
              duration-200
              ease-in-out
            "
            >CONTACT</router-link
          >
        </div>
      </div>
    </div>
    <div
      class="
        pt-[25px]
        pb-[20px]
        px-[20px]
        text-center
        w-full
        border-t-[1px] border-[#ccc]
      "
    >
      <span class="text-[12px] leading-[20px] text-[#696969] font-rubik">
        © 2022 BitLab
      </span>
    </div>
  </footer>
</template>

<script setup>
import Logo from "./Logo.vue";
</script>

<style lang="scss" scoped>
</style>