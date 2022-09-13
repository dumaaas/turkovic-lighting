<template>
  <div>
    <div v-if="product">
      <PageHero name="Products" :type="product.name" />
      <div class="bg-white hover:bg-[#4C4C4C] mt-[1px]">
        <div class="container">
          <div
            class="
              text-[30px]
              leading-[33px]
              text-[#ff7800]
              font-[900] font-rajdhani
              py-[20px]
            "
          >
            <h4>MODEL: {{ product.name }}</h4>
            <h5>
              {{ product.lightSource.toUpperCase() }}
              {{ product.type.toUpperCase() }}
            </h5>
          </div>
          <div class="flex gap-[40px] lg:flex-row flex-col items-stretch justify-between min-h-full">
            <div class="flex-[62%]">
              <img
                class="filter-img w-[716px]"
                :src="productImage"
                alt="product-image"
              />
            </div>
            <div
              class="
                flex-[24%]
                min-h-full
                bg-[#444444]
                pt-[15px]
                px-[20px]
                pb-[55px]
                relative
              "
            >
              <h5
                class="
                  font-rajdhani
                  text-[28px]
                  leading-[31px]
                  text-[#ff7800]
                  font-bold
                  pb-[10px]
                "
              >
                DETAILS
              </h5>
              <p class="text-[15px] leading-[24px] text-[#fafafa] font-rubik">
                <b class="font-medium">Type</b>
                {{ product.type ? product.type : "-" }}
              </p>
              <p class="text-[15px] leading-[24px] text-[#fafafa] font-rubik">
                <b class="font-medium">Light source</b>
                {{ product.lightSource ? product.lightSource : "-" }}
              </p>
              <p class="text-[15px] leading-[24px] text-[#fafafa] font-rubik">
                <b class="font-medium">Ligth distribution</b>
                {{
                  product.lightDistribution
                    ? product.lightDistribution.join(", ")
                    : "-"
                }}
              </p>
              <p class="text-[15px] leading-[24px] text-[#fafafa] font-rubik">
                <b class="font-medium">Housing color </b>
                {{
                  product.housingColor ? product.housingColor.join(", ") : "-"
                }}
              </p>
              <p class="text-[15px] leading-[24px] text-[#fafafa] font-rubik">
                <b class="font-medium">Length </b>
                {{ product.length ? product.length.join(", ") + " mm" : "-" }}
              </p>
              <p class="text-[15px] leading-[24px] text-[#fafafa] font-rubik">
                <b class="font-medium">Colour temperature</b>
                {{
                  product.colorTemperature
                    ? product.colorTemperature.join(", ")
                    : "-"
                }}
              </p>
              <p class="text-[15px] leading-[24px] text-[#fafafa] font-rubik">
                <b class="font-medium">Electric power</b>
                {{ product.electricPower ? product.electricPower : "-" }}
              </p>
              <p class="text-[15px] leading-[24px] text-[#fafafa] font-rubik">
                <b class="font-medium">Light direction</b>
                {{
                  product.lightDistribution
                    ? product.lightDistribution.join(", ")
                    : "-"
                }}
              </p>
              <p class="text-[15px] leading-[24px] text-[#fafafa] font-rubik">
                <b class="font-medium">Control</b>
                {{ product.control ? product.control.join(", ") : "-" }}
              </p>
              <p class="text-[15px] leading-[24px] text-[#fafafa] font-rubik">
                <b class="font-medium">Flux</b>
                {{ product.flux ? product.flux : "-" }}
              </p>
              <p class="text-[15px] leading-[24px] text-[#fafafa] font-rubik">
                <b class="font-medium">Ra</b>
                {{ product.ra ? product.ra : "-" }}
              </p>
              <p class="text-[15px] leading-[24px] text-[#fafafa] font-rubik">
                <b class="font-medium">Weight</b>
                {{ product.weight ? product.weight : "-" }}
              </p>
              <p class="text-[15px] leading-[24px] text-[#fafafa] font-rubik">
                <b class="font-medium">Operating voltage</b>
                {{ product.operatingVoltage ? product.operatingVoltage : "-" }}
              </p>
              <router-link
                :to="{
                  path: '/configurator',
                  query: {
                    model: getProductFullName(product),
                    color: imageUrl,
                  },
                }"
                class="
                  hover:text-[#FFA100]
                  absolute
                  bottom-[15px]
                  right-[15px]
                  text-[18px]
                  leading-[28px]
                  text-[#ff7800]
                  border-b-[#ff7800]
                  font-bold
                  border-0 border-b-[1px] border-dotted
                "
                >MORE</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#E9E9E9] w-full">
        <div
          class="
            container
            flex flex-col
            items-center
            justify-center
            text-center
            pt-[25px]
            pb-[50px]
          "
        >
          <h6
            class="
              text-[24px]
              leading-[26px]
              text-[#ff7800]
              font-medium font-rajdhani
              pb-[20px]
            "
          >
            STANDARD HOUSING COLOURE
          </h6>
          <div class="flex gap-[20px]">
            <div
              class="w-[110px] h-[70px] cursor-pointer"
              @click="setImageUrl('go')"
            >
              <img
                class="
                  w-full
                  h-full
                  rounded-[10px]
                  border-[3px]
                  hover:border-[3px] hover:border-[#4c4c4c]
                "
                :class="
                  imageUrl === 'go' ? 'border-[#4c4c4c]' : 'border-transparent'
                "
                src="../assets/images/go.png"
                alt="logo"
              />
              <p
                class="
                  text-[15px]
                  leading-[17px]
                  text-[#4c4c4c]
                  font-bold font-rajdhani
                  my-[10px]
                "
              >
                GOLDEN OAK
              </p>
            </div>
            <div
              class="w-[110px] h-[70px] cursor-pointer"
              @click="setImageUrl('grigio')"
            >
              <img
                class="
                  w-full
                  h-full
                  rounded-[10px]
                  border-[3px]
                  hover:border-[3px] hover:border-[#4c4c4c]
                "
                :class="
                  imageUrl === 'grigio'
                    ? 'border-[#4c4c4c]'
                    : 'border-transparent'
                "
                src="../assets/images/grigio.png"
                alt="logo"
              />
              <p
                class="
                  text-[15px]
                  leading-[17px]
                  text-[#4c4c4c]
                  font-bold font-rajdhani
                  my-[10px]
                "
              >
                GRIGIO ANTICO
              </p>
            </div>
            <div
              @click="setImageUrl('white')"
              class="w-[110px] h-[70px] cursor-pointer"
            >
              <div
                class="
                  w-full
                  h-full
                  rounded-[10px]
                  bg-white
                  border-[3px]
                  hover:border-[3px] hover:border-[#4c4c4c]
                "
                :class="
                  imageUrl === 'white'
                    ? 'border-[#4c4c4c]'
                    : 'border-transparent'
                "
              ></div>
              <p
                class="
                  text-[15px]
                  leading-[17px]
                  text-[#4c4c4c]
                  font-bold font-rajdhani
                  my-[10px]
                "
              >
                WHITE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <PageHero name="Products" />
      <div class="w-full bg-white">
        <div class="container py-[100px]">
          <h4 class="text-[60px] leading-[80px] font-bold font-rajdhani">
            Product is not found.
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductStore } from "@/stores/products";
import { useRouter } from "vue-router";
import PageHero from "../components/PageHero.vue";
import { ref, computed, watch } from "vue";
export default {
  components: {
    PageHero,
  },
  setup() {
    const products = useProductStore();
    const router = useRouter();

    const getProduct = products.getProduct;

    var imageUrl = ref("go");

    const setImageUrl = (newUrl) => {
      imageUrl.value = newUrl;
    };

    const product = ref();

    watch(
      () => router.currentRoute.value.params.name,
      () => {
        product.value = getProduct(router.currentRoute.value.params.name);
      },
      { immediate: true }
    );

    var productImage = computed({
      get() {
        return new URL(
          "/src/assets/images/" +
            product.value.name.toLowerCase() +
            "-" +
            imageUrl.value +
            ".png",
          import.meta.url
        );
      },
    });

    const getProductFullName = (product) => {
      var name = `${product.name} ${product.lightSource.toUpperCase()} ${product.type.toUpperCase()}`
      return name;
    };

    return {
      product,
      imageUrl,
      productImage,
      setImageUrl,
      getProductFullName
    };
  },
};
</script>

<style lang="scss" scoped>
</style>