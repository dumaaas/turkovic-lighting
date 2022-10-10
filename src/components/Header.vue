<template>
  <header
    class="w-full bg-white relative z-[100] header-selector"
    :class="router.currentRoute.value.name == 'home' ? 'bg-black' : 'bg-white'"
  >
    <div
      class="container hidden mx-auto lg:block"
      :class="
        router.currentRoute.value.name == 'home' ? ' py-[25px] relative' : ''
      "
    >
      <div
        class="lg:my-[15px] p-[15px] pl-0 lg:pl-[15px]"
        v-if="router.currentRoute.value.name !== 'home'"
      >
        <Logo />
      </div>
      <p
        v-else
        class="font-rajdhani font-medium text-[13px] leading-[19px] text-white"
      >
        +385 98 195 4 732 | info@turkoviclighting.com
      </p>
    </div>
    <StickyElement
      visibleOnDirection="disabled"
      :stuckClass="
        router.currentRoute.value.name == 'home'
          ? 'sticky-header'
          : 'sticky-header-2 shadow-header'
      "
    >
      <Navigation
        @emitMenu="emitMenu"
        v-if="router.currentRoute.value.name !== 'home'"
      />
      <div
        v-else
        class="
          absolute
          lg:top-[77px]
          top-[10px]
          w-full
          flex
          items-center
          justify-center
        "
      >
        <div class="container">
          <div class="w-full flex justify-between gap-[20px] items-center">
            <Logo class="ml-[-25px]" />
            <div class="hidden lg:flex items-center gap-[5px] relative z-[100]">
              <div
                class="
                  text-[18px]
                  hover:bg-[#f78800]
                  cursor-pointer
                  transition-all
                  duration-150
                  ease-in-out
                  font-rajdhani
                  py-[10px]
                  px-[20px]
                  text-center
                  bg-[#0A0026] bg-opacity-90
                  tracking-[1px]
                  text-white
                  header-menu
                "
              >
                <router-link to="/" class=""> HOME </router-link>
              </div>

              <div
                class="
                  text-[18px]
                  hover:bg-[#f78800]
                  cursor-pointer
                  transition-all
                  duration-150
                  ease-in-out
                  font-rajdhani
                  py-[10px]
                  px-[20px]
                  text-center
                  bg-[#0A0026] bg-opacity-90
                  tracking-[1px]
                  text-white
                  relative
                  group
                  header-menu
                "
              >
                <p class="">PRODUCTS</p>
                <div
                  class="
                    bg-white bg-opacity-90
                    absolute
                    top-[47px]
                    left-0
                    w-[200px]
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
                        hover:bg-[#f78800] hover:text-white
                        bg-opacity-90
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
                        top-0
                        right-[-150px]
                        bg-white
                        border-l-[1px] border-transparent
                        w-[150px]
                        hidden
                        bg-opacity-90
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
                          hover:bg-[#f78800] hover:text-white
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
                          hover:bg-[#f78800] hover:text-white
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
                          hover:bg-[#f78800] hover:text-white
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
                      hover:bg-[#f78800] hover:text-white
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
                      hover:bg-[#f78800] hover:text-white
                      header-menu
                    "
                  >
                    APPLICATIONS
                  </router-link>
                </div>
              </div>
              <div
                class="
                  text-[18px]
                  hover:bg-[#f78800]
                  cursor-pointer
                  transition-all
                  duration-150
                  ease-in-out
                  font-rajdhani
                  py-[10px]
                  px-[20px]
                  text-center
                  bg-[#0A0026] bg-opacity-90
                  tracking-[1px]
                  text-white
                  header-menu
                "
              >
                <router-link to="/configurator" class="">
                  CONFIGURATOR
                </router-link>
              </div>
              <div
                class="
                  text-[18px]
                  hover:bg-[#f78800]
                  cursor-pointer
                  transition-all
                  duration-150
                  ease-in-out
                  font-rajdhani
                  py-[10px]
                  px-[20px]
                  text-center
                  bg-[#0A0026] bg-opacity-90
                  tracking-[1px]
                  text-white
                  header-menu
                "
              >
                <router-link to="/contact" class=""> CONTACT </router-link>
              </div>
            </div>
            <div
              @click="openMenu = !openMenu"
              class="lg:hidden hamburger-btn mr-30px -mt-7px"
              id="hamburger"
              :class="openMenu ? 'change' : ''"
            >
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>
          </div>
        </div>
      </div>
    </StickyElement>
    <div
      class="fixed top-0 left-0 w-full h-screen text-center bg-white menu-hamb"
      v-if="openMenu"
    >
      <header class="flex justify-end items-center w-full py-[10px]">
        <div
          @click="openMenu = !openMenu"
          class="lg:hidden hamburger-btn mr-[10px!important]"
          id="hamburger"
          :class="openMenu ? 'change' : ''"
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </header>
      <div
        class="
          mt-[-30px]
          gap-[8px]
          text-[#ff7800]
          font-rajdhani
          text-[24px]
          leading-[30px]
          font-semibold
          flex flex-col
          items-center
          justify-center
          w-full
          h-full
        "
      >
        <router-link to="/" class="" @click="openMenu = false && openSubmenu == false && openSubSubMenu == false"
          >HOME</router-link
        >
        <div class="">
          <div
            class="flex items-center gap-[10px] justify-center cursor-pointer"
            @click="openSubmenu = !openSubmenu"
          >
            <p>PRODUCTS</p>
            <div
              class="
                w-0
                h-0
                border-[6px] border-b-0 border-transparent border-t-[#ff7800]
                transform
                transition-all
                duration-150
              "
              :class="openSubmenu ? 'rotate-180' : ''"
            ></div>
          </div>

          <div
            v-if="openSubmenu"
            class="
              mt-[8px]
              flex flex-col
              text-[20px]
              gap-[4px]
              font-medium
              text-center
            "
          >
            <div class="">
              <div
                class="
                  flex
                  items-center
                  gap-[10px]
                  cursor-pointer
                  justify-center
                "
                @click="openSubSubMenu = !openSubSubMenu"
              >
                <p>LED LUMINAIRES</p>
                <div
                  class="
                    w-0
                    h-0
                    border-[6px]
                    border-b-0
                    border-transparent
                    border-t-[#ff7800]
                    transform
                    transition-all
                    duration-150
                  "
                  :class="openSubSubMenu ? 'rotate-180' : ''"
                ></div>
              </div>

              <div
                v-if="openSubSubMenu"
                class="
                  flex flex-col
                  font-normal
                  text-[18px] text-[#4c4c4c] text-center
                "
              >
                <router-link to="/products/TL1" @click="openMenu = false && openSubmenu == false && openSubSubMenu == false"
                  >TL 1</router-link
                >
                <router-link to="/products/TL2" @click="openMenu = false && openSubmenu == false && openSubSubMenu == false"
                  >TL 2</router-link
                >
                <router-link to="/products/TL3" @click="openMenu = false && openSubmenu == false && openSubSubMenu == false"
                  >TL 3</router-link
                >
              </div>
            </div>

            <router-link to="/decors" @click="openMenu = false && openSubmenu == false && openSubSubMenu == false">
              DECORS
            </router-link>
            <router-link to="/applications" @click="openMenu = false && openSubmenu == false && openSubSubMenu == false">
              APPLICATIONS
            </router-link>
          </div>
        </div>
        <router-link to="/configurator" class="" @click="openMenu = false && openSubmenu == false && openSubSubMenu == false"
          >CONFIGURATOR</router-link
        >
        <router-link to="/contact" class="" @click="openMenu = false && openSubmenu == false && openSubSubMenu == false"
          >CONTACTS</router-link
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from "./Logo.vue";
import Navigation from "./Navigation.vue";
import StickyElement from "vue-sticky-element";
import { useRouter } from "vue-router";
import { ref, computed, watch, onUpdated } from "vue";
const openMenu = ref(false);
const openSubmenu = ref(false);
const openSubSubMenu = ref(false);
const router = useRouter();

const emitMenu = () => {
  openMenu.value = true;
}

watch(
  () => router.currentRoute.value.name,
  (newVal) => {
    console.log(`MyCoolComponent - watch route.name changed to ${newVal}`);
  },
  { immediate: true }
);
</script>


<style scoped>
</style>