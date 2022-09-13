<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const setImageUrl = (index) => {
  return new URL("/hero-" + index + ".png", import.meta.url);
};
</script>

<template>
  <main>
    <div class="relative w-full h-[645px]">
      <div class="absolute top-0 left-0 w-full h-full hero-slider">
        <carousel
          :items-to-show="1"
          :autoplay="4500"
          :wrapAround="true"
          :mouseDrag="false"
          :touchDrag="false"
        >
          <slide v-for="slide in 2" :key="slide">
            <div
              class="w-full bg-center bg-no-repeat bg-cover"
              :style="{ backgroundImage: `url(${setImageUrl(slide)})` }"
            >
              <div
                class="container text-left pt-[170px] pb-[77px] relative z-50"
              >
                <div class="mb-[10px]">
                  <h1
                    class="
                      text-[72px]
                      leading-[79px]
                      font-bold
                      text-[#ff7800]
                      font-rajdhani
                      glow
                    "
                  >
                    LED
                  </h1>
                  <h1
                    class="
                      text-[72px]
                      leading-[79px]
                      font-bold
                      text-[#ff7800]
                      font-rajdhani
                      glow
                    "
                  >
                    LUMINAIRES
                  </h1>
                </div>
                <p
                  class="
                    text-[20px]
                    leading-[28px]
                    text-[#fafafa]
                    font-medium font-rubik
                  "
                >
                  LIVING ROOMS
                </p>
                <p
                  class="
                    text-[20px]
                    leading-[28px]
                    text-[#fafafa]
                    font-medium font-rubik
                  "
                >
                  OFFICES
                </p>
                <p
                  class="
                    text-[20px]
                    leading-[28px]
                    text-[#fafafa]
                    font-medium font-rubik
                  "
                >
                  KITCHENS
                </p>
                <p
                  class="
                    text-[20px]
                    leading-[28px]
                    text-[#fafafa]
                    font-medium font-rubik
                  "
                >
                  DINING ROOMS
                </p>
                <p
                  class="
                    text-[20px]
                    leading-[28px]
                    text-[#fafafa]
                    font-medium font-rubik
                  "
                >
                  CONFERENCE ROOMS
                </p>
                <p
                  class="
                    text-[20px]
                    leading-[28px]
                    text-[#fafafa]
                    font-medium font-rubik
                  "
                >
                  RECEPTION
                </p>
                <p
                  class="
                    text-[20px]
                    leading-[28px]
                    text-[#fafafa]
                    font-medium font-rubik
                  "
                >
                  HOTEL ROOMS
                </p>
                <p
                  class="
                    mt-[20px]
                    text-[20px]
                    leading-[28px]
                    font-semibold font-rubik
                    text-[#ff7800]
                  "
                >
                  ...modern design and decores light led fixture...
                </p>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
    <div class="w-full bg-white">
      <div class="container py-[50px]">
        <div
          class="
            flex
            items-center
            justify-between
            gap-[30px]
            lg:gap-[20px]
            flex-wrap
          "
        >
          <p
            class="
              order-1
              w-full
              lg:w-[30%]
              font-rajdhani
              text-[20px]
              leading-[27px]
            "
          >
            Large-scale construction requires collaboration across multiple
            disciplines. The project manager usually manages the work and a
            construction manager, designer, civil engineer or architect
            supervises it. For more than 90 years, we have enabled sustainable
            progress and initiated positive changes on all continents. We are
            the world's leading manufacturer of construction equipment.
          </p>
          <p
            class="
              order-3
              lg:order-2
              w-full
              lg:w-[30%]
              font-rajdhani
              text-[20px]
              leading-[27px]
            "
          >
            Those involved in design and construction must consider zoning
            requirements, the environmental impact of the the work, scheduiling,
            budgeting, site safety, accessibility and transportation of the
            building. Customers turn to Caterpillar to help them develop
            infrastructure, energy and natural resources. The company mainly
            operates through its three primary segments.
          </p>
          <img
            class="
              order-2
              lg:order-3
              w-full
              lg:w-[30%]
              transition-all
              duration-100
              transform
              cursor-pointer
              product-image
            "
            src="../assets/images/slide-1.png"
            alt="download"
          />
        </div>
      </div>
    </div>
    <div class="w-full bg-[#F6F6F6]">
      <div class="container py-[50px]">
        <div
          class="
            flex
            items-center
            justify-between
            sm:gap-[30px]
            gap-[50px]
            text-center
            flex-wrap
          "
        >
          <div
            class="
              flex flex-col
              items-center
              justify-center
              flex-[100%]
              lg:flex-[22%]
              sm:flex-[45%]
            "
          >
            <h4 class="font-medium text-[18px] leading-[26px] font-rubik">
              TEAM MEMBERS
            </h4>
            <p
              class="
                py-[5px]
                text-[#f78800]
                font-rajdhani
                text-[48px]
                leading-[56px]
                font-bold
              "
            >
              30
            </p>
            <span class="text-[12px] leading-[16px] font-rubik text-[#4c4c4c]">
              AN INCREASE COMPARED TO MID-2010.
            </span>
          </div>
          <div
            class="
              flex flex-col
              items-center
              justify-center
              flex-[100%]
              lg:flex-[22%]
              sm:flex-[45%]
            "
          >
            <h4 class="font-medium text-[18px] leading-[26px] font-rubik">
              GROWTH
            </h4>
            <p
              class="
                py-[5px]
                text-[#f78800]
                font-rajdhani
                text-[48px]
                leading-[56px]
                font-bold
              "
            >
              30
            </p>
            <span class="text-[12px] leading-[16px] font-rubik text-[#4c4c4c]">
              BUSINESS DAILY GROWTH
            </span>
          </div>
          <div
            class="
              flex flex-col
              items-center
              justify-center
              flex-[100%]
              lg:flex-[22%]
              sm:flex-[45%]
            "
          >
            <h4 class="font-medium text-[18px] leading-[26px] font-rubik">
              CLIENTS
            </h4>
            <p
              class="
                py-[5px]
                text-[#f78800]
                font-rajdhani
                text-[48px]
                leading-[56px]
                font-bold
              "
            >
              250
            </p>
            <span class="text-[12px] leading-[16px] font-rubik text-[#4c4c4c]">
              NUMBER OF CLIENTS WE HAVE HELPED.
            </span>
          </div>
          <div
            class="
              flex flex-col
              items-center
              justify-center
              flex-[100%]
              lg:flex-[22%]
              sm:flex-[45%]
            "
          >
            <h4 class="font-medium text-[18px] leading-[26px] font-rubik">
              PROJECTS
            </h4>
            <p
              class="
                py-[5px]
                text-[#f78800]
                font-rajdhani
                text-[48px]
                leading-[56px]
                font-bold
              "
            >
              300
            </p>
            <span class="text-[12px] leading-[16px] font-rubik text-[#4c4c4c]">
              NUMBER OF PROJECTS.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-white">
      <div class="container py-[25px]">
        <h1
          class="
            lg:text-[52px] lg:leading-[57px]
            text-[42px]
            leading-[46px]
            font-[900]
            text-[#ff7800]
            font-rajdhani
          "
        >
          PRODUCTS
        </h1>
        <div
          class="
            flex
            items-stretch
            lg:flex-row
            flex-col
            mt-[25px]
            lg:mt-[40px]
            gap-[30px]
            justify-between
          "
        >
          <div
            class="
              flex
              items-start
              gap-[30px]
              md:gap-[46px]
              lg:flex-row
              flex-col
            "
          >
            <router-link to="/products/TL1">
              <img
                class="
                  product-image
                  cursor-pointer
                  w-full
                  lg:max-w-[440px]
                  xl:max-w-[540px]
                  transition-all
                  duration-100
                  transform
                "
                src="../assets/images/slide-1.png"
                alt="download"
              />
            </router-link>
            <div class="flex flex-col gap-[20px] md:gap-[30px]">
              <router-link
                to="/products/TL1"
                class="
                  cursor-pointer
                  text-[32px]
                  leading-[35px]
                  text-[#696969]
                  hover:text-[#f47708]
                  transition-all
                  duration-500
                  font-medium font-rajdhani
                "
              >
                MODEL: TL 1
              </router-link>
              <router-link
                to="/products/TL1"
                class="
                  cursor-pointer
                  text-[22px]
                  leading-[28px]
                  text-[#696969]
                  hover:text-[#f1770a]
                  font-rubik
                  model-name
                  transition-all
                  duration-500
                "
              >
                LED Pendant Luminaires
              </router-link>
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <router-link to="/products/TL1">
              <img
                class="
                  cursor-pointer
                  w-full
                  lg:max-w-[220px]
                  xl:max-w-[270px]
                  transition-all
                  duration-100
                  transform
                "
                src="../assets/images/tl1-go.png"
                alt="product"
              />
            </router-link>
            <router-link to="/products/TL1" class="lg:mt-0 mt-[30px] btn"
              >DISCOVER TL - 1</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-[#F6F6F6]">
      <div class="container lg:py-[75px] py-[50px]">
        <div
          class="
            flex
            items-stretch
            lg:flex-row
            flex-col
            mt-[25px]
            lg:mt-[40px]
            gap-[30px]
            justify-between
          "
        >
          <div
            class="
              flex
              items-start
              gap-[30px]
              md:gap-[46px]
              lg:flex-row
              flex-col
            "
          >
            <router-link to="/products/TL2">
              <img
                class="
                  product-image
                  cursor-pointer
                  w-full
                  lg:max-w-[440px]
                  xl:max-w-[540px]
                  transition-all
                  duration-100
                  transform
                "
                src="../assets/images/slide-2.png"
                alt="download"
              />
            </router-link>
            <div class="flex flex-col gap-[20px] md:gap-[30px]">
              <router-link
                to="/products/TL2"
                class="
                  cursor-pointer
                  text-[24px]
                  leading-[26px]
                  text-[#696969]
                  hover:text-[#f47708]
                  font-medium font-rajdhani
                  transition-all
                  duration-500
                "
              >
                MODEL: TL 2
              </router-link>
              <router-link
                to="/products/TL2"
                class="
                  cursor-pointer
                  text-[22px]
                  leading-[28px]
                  text-[#696969]
                  hover:text-[#f1770a]
                  font-rubik
                  model-name
                  transition-all
                  duration-500
                "
              >
                LED Ceiling Luminaires
              </router-link>
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <router-link to="/products/TL2">
              <img
                class="
                  cursor-pointer
                  w-full
                  lg:max-w-[220px]
                  xl:max-w-[270px]
                  transition-all
                  duration-100
                  transform
                "
                src="../assets/images/tl2-grigio.png"
                alt="download"
              />
            </router-link>
            <router-link to="/products/TL2" class="lg:mt-0 mt-[30px] btn"
              >DISCOVER TL - 2</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-white">
      <div class="container lg:py-[75px] py-[50px]">
        <div
          class="
            flex
            items-stretch
            lg:flex-row
            flex-col
            mt-[25px]
            lg:mt-[40px]
            gap-[30px]
            justify-between
          "
        >
          <div
            class="
              flex
              items-start
              gap-[30px]
              md:gap-[46px]
              lg:flex-row
              flex-col
            "
          >
            <router-link to="/products/TL3">
              <img
                class="
                  cursor-pointer
                  product-image
                  w-full
                  lg:max-w-[440px]
                  xl:max-w-[540px]
                  transition-all
                  duration-100
                  transform
                "
                src="../assets/images/slide-3.png"
                alt="download"
              />
            </router-link>

            <div class="flex flex-col gap-[20px] md:gap-[30px]">
              <router-link
                to="/products/TL3"
                class="
                  cursor-pointer
                  text-[24px]
                  leading-[26px]
                  text-[#696969]
                  hover:text-[#f47708]
                  font-medium font-rajdhani
                  transition-all
                  duration-500
                "
              >
                MODEL: TL 3
              </router-link>
              <router-link
                to="/products/TL3"
                class="
                  cursor-pointer
                  text-[22px]
                  leading-[28px]
                  text-[#696969]
                  hover:text-[#f1770a]
                  font-rubik
                  model-name
                  transition-all
                  duration-500
                "
              >
                LED Wall Luminaires
              </router-link>
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <router-link to="/products/TL3">
              <img
                class="
                  cursor-pointer
                  w-full
                  lg:max-w-[220px]
                  xl:max-w-[270px]
                  transition-all
                  duration-100
                  transform
                "
                src="../assets/images/tl3-white.png"
                alt="download"
              />
            </router-link>
            <router-link to="/products/TL3" class="btn lg:mt-0 mt-[30px]"
              >DISCOVER TL - 3</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.hero-slider .carousel__prev {
  display: none !important;
}

.hero-slider .carousel__next {
  display: none !important;
}
</style>

