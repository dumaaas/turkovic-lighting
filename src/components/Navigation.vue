<template>
  <div class="bg-white w-full border-t-[1px] border-[#CCC]">
    <div class="container mx-auto">
      <div
        class="
          lg:hidden
          w-full
          flex
          justify-between
          gap-[20px]
          items-center
          h-[65px]
        "
      >
        <Logo class="ml-[-25px]" />

        <div
          @click="emitMenu()"
          class="lg:hidden hamburger-btn mr-30px -mt-7px"
          id="hamburger"
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
      <div class="items-center justify-center hidden text-center lg:flex">
        <router-link
          to="/"
          class="
            border-l-[1px] border-[#CCC]
            py-[14px]
            w-[285px]
            last:border-r-[1px]
            text-[20px]
            leading-[11px]
            font-semibold font-rajdhani
            text-[#2d2d2d]
            transition-all
            duration-300
            ease-in-out
            cursor-pointer
            hover:text-white hover:bg-[#ff7800]
          "
        >
          HOME
        </router-link>
        <div class="relative font-medium group font-rajdhani">
          <p
            class="
              border-l-[1px] border-[#CCC]
              py-[14px]
              w-[285px]
              last:border-r-[1px]
              text-[20px]
              leading-[11px]
              font-semibold font-rajdhani
              text-[#2d2d2d]
              transition-all
              duration-300
              ease-in-out
              cursor-pointer
              hover:text-white hover:bg-[#ff7800]
              group-hover:text-white group-hover:bg-[#ff7800]
              products-main
            "
          >
            PRODUCTS
          </p>
          <div
            class="
              bg-white
              absolute
              top-[39px]
              left-[1px]
              w-[284px]
              hidden
              group-hover:block
              text-[16px]
              leading-[24px]
              text-[#2d2d2d]
              products-subdata
            "
          >
            <div class="relative submenu">
              <div
                class="
                  flex
                  items-center
                  justify-between
                  pl-[20px]
                  pt-[12px]
                  pb-[10px]
                  cursor-pointer
                  hover:bg-[#ff7800] hover:text-white
                "
              >
                <p>LED LUMINAIRES</p>
                <img
                  class="max-h-[30px]"
                  src="../assets/images/arrow-right.svg"
                  alt="logo"
                />
              </div>
              <div
                class="
                  absolute
                  top-[-1px]
                  right-[-100%]
                  bg-white
                  border-l-[1px] border-transparent
                  w-full
                  hidden
                  submenu-items
                  text-[16px]
                  leading-[24px]
                  text-[#2d2d2d]
                "
              >
                <router-link
                  to="/products/TL1"
                  class="
                    shadow-[0
                    6px
                    12px
                    rgb(0
                    0 0
                    /
                    18%)]
                    flex
                    items-center
                    justify-between
                    pl-[20px]
                    pt-[12px]
                    pb-[10px]
                    h-[48px]
                    cursor-pointer
                    hover:bg-[#ff7800] hover:text-white
                  "
                >
                  TL1
                </router-link>
                <router-link
                  to="/products/TL2"
                  class="
                    h-[48px]
                    flex
                    items-center
                    justify-between
                    pl-[20px]
                    pt-[12px]
                    pb-[10px]
                    cursor-pointer
                    hover:bg-[#ff7800] hover:text-white
                  "
                >
                  TL2
                </router-link>
                <router-link
                  to="/products/TL3"
                  class="
                    h-[49px]
                    flex
                    items-center
                    justify-between
                    pl-[20px]
                    pt-[12px]
                    pb-[10px]
                    cursor-pointer
                    hover:bg-[#ff7800] hover:text-white
                  "
                >
                  TL3
                </router-link>
              </div>
            </div>
            <router-link
              to="/decors"
              class="
                flex
                items-center
                justify-between
                pl-[20px]
                pt-[12px]
                pb-[10px]
                cursor-pointer
                hover:bg-[#ff7800] hover:text-white
              "
            >
              DECORS
            </router-link>
            <router-link
              to="/applications"
              class="
                flex
                items-center
                justify-between
                pl-[20px]
                pt-[12px]
                pb-[10px]
                cursor-pointer
                hover:bg-[#ff7800] hover:text-white
              "
            >
              APPLICATIONS
            </router-link>
          </div>
        </div>

        <router-link
          to="/configurator"
          class="
            border-l-[1px] border-l-[#CCC]
            py-[14px]
            w-[285px]
            last:border-r-[1px]
            text-[20px]
            leading-[11px]
            font-semibold font-rajdhani
            text-[#2d2d2d]
            transition-all
            duration-300
            ease-in-out
            cursor-pointer
            hover:text-white hover:bg-[#ff7800]
          "
        >
          CONFIGURATOR
        </router-link>
        <router-link
          to="/contact"
          class="
            border-l-[1px] border-[#CCC]
            py-[14px]
            w-[285px]
            last:border-r-[1px]
            text-[20px]
            leading-[11px]
            font-semibold font-rajdhani
            text-[#2d2d2d]
            transition-all
            duration-300
            ease-in-out
            cursor-pointer
            hover:text-white hover:bg-[#ff7800]
          "
        >
          CONTACT
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from "../components/Logo.vue";
const emit = defineEmits(["enlargeText"]);
const menus = ["HOME", "PRODUCTS", "CONFIGURATOR", "CONTACT"];

function emitMenu() {
  console.log("trying");
  emit("emitMenu");
}
</script>
