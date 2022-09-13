<template>
  <div class="">
    <PageHero name="Configurator" />
    <div class="w-full bg-[#F5F5F5]">
      <div class="container py-[50px]">
        <button class="btn" @click="refreshPage()">START NEW ONE</button>
        <div
          class="
            flex flex-wrap
            items-center
            justify-center
            gap-[6px]
            my-[29px]
          "
        >
          <CustomSelect
            :label="modelLabel"
            @setProp="setModel"
            width="222"
            :items="[
              { name: 'TL1 LED PENDANT LUMINAIRE' },
              { name: 'TL2 LED CEILING LUMINAIRE' },
              { name: 'TL3 LED WALL LUMINAIRE' },
            ]"
          />
          <CustomSelect
            label="LIGHT DISTRIBUTION"
            @setProp="setLight"
            width="177"
            :items="[
              { name: 'PRO RASTER UGR < 19' },
              { name: 'OPAL OPAL COVER' },
            ]"
          />
          <CustomSelect
            :label="colorLabel"
            @setProp="setColor"
            width="155"
            :items="[
              { name: 'GOLDEN OAK', image: 'go' },
              { name: 'GRIGIO ANTICO', image: 'grigio' },
              { name: 'WHITE', image: 'white' },
            ]"
          />
          <CustomSelect
            label="LENGTH"
            @setProp="setLength"
            width="100"
            :items="[
              { name: '960 mm' },
              { name: '1150 mm' },
              { name: '1342 mm' },
            ]"
          />
          <CustomSelect
            label=">COL. TEM."
            @setProp="setCol"
            width="122"
            :items="[{ name: '830 - 30000K' }, { name: '840 - 4000K' }]"
          />
          <CustomSelect
            label="DIRECT/INDIRECT"
            @setProp="setDirect"
            width="151"
            :items="[{ name: 'DIRECT+INDIRECT' }, { name: 'DIRECT' }]"
          />
          <CustomSelect
            label="CONTROL"
            @setProp="setControl"
            width="173"
            :items="[{ name: 'PUSH DIMMING. DALI' }, { name: 'ON/OFF' }]"
          />
        </div>
        <div class="flex justify-end">
          <button class="btn" @click="saveDataModel()">DONE</button>
        </div>
        <p
          class="text-red-500 text-[13px]"
          v-if="productStoreData.showError.value"
        >
          You already added this product
        </p>
        <p class="text-red-500 text-[13px]" v-if="showError">
          All fields are mandatory
        </p>
      </div>
      <div
        class="w-full bg-white"
        v-if="productStoreData.selectedProducts.value.length"
      >
        <div class="container py-[50px]">
          <div class="flex items-center justify-center flex-wrap gap-[5px]">
            <p
              class="
                hover:bg-[#ff7800] hover:text-white
                cursor-pointer
                text-[#ff7800]
                border-[#ff7800] border-[1px]
                px-[8px]
                py-[5px]
                bg-white
              "
              :class="{ 'bg-[#ff7800] text-white': activeItem == index }"
              @click="activeItem = index"
              v-for="(item, index) in productStoreData.selectedProducts.value"
              :key="item.dataPass"
            >
              {{ item.dataPass }}
            </p>
          </div>
          <div
            class="
              flex
              items-center
              flex-wrap
              gap-[20px]
              flex-col
              justify-center
              md:flex-row md:justify-between
              pt-[80px]
            "
            v-if="productStoreData.selectedProducts.value.length"
          >
            <div
              class="
                flex flex-col
                gap-[15px]
                font-rubik font-medium
                text-[15px]
                leading-[28px]
                text-[#ff7800]
              "
            >
              <p>
                {{
                  productStoreData.selectedProducts.value[activeItem].dataPass
                }}
              </p>
              <p>PRO CODE</p>
            </div>
            <div class="max-w-[240px]">
              <img
                class="w-full"
                :src="
                  setImageUrl(
                    productStoreData.selectedProducts.value[activeItem].imageUrl
                  )
                "
                alt="product"
              />
            </div>
            <div class="">
              {{
                productStoreData.selectedProducts.value[activeItem]
                  .pdfGeneralUrl
              }}
              <a
                class="max-w-[40px]"
                :href="
                  setPdfUrl(
                    productStoreData.selectedProducts.value[activeItem]
                      .pdfGeneralUrl
                  )
                "
                :download="`${productStoreData.selectedProducts.value[activeItem].model}-GENERAL`"
              >
                <img
                  class="
                    mx-auto
                    max-w-[40px]
                    w-full
                    transition-all
                    duration-100
                    transform
                    cursor-pointer
                    hover:scale-125
                  "
                  src="../assets/images/download.png"
                  alt="download"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full bg-[#f5f5f5]"
        v-if="productStoreData.selectedProducts.value.length"
      >
        <div class=" overflow-x-auto overflow-y-hidden container pt-[40px] pb-[100px] relative">
          <div
            class="
              flex
              max-w-[600px]
              min-w-[444px]
              overflow-x-auto
              mx-auto
              items-center
              justify-center
              border-[1px] border-b-0 border-l-0 border-[#e9e9e9]
              pb-[25px]
            "
          >
            <div
              class="
                w-[230px]
                text-[15px]
                leading-[28px]
                text-[#00004d]
                font-bold font-rubik
              "
            >
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                Type
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                Light distriution:
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                Light source:
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                Housing color:
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                Lenght:
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                Color Temperature:
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                Electric power:
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                Light direction:
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                Control:
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                Flux:
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                Ra:
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                Weight:
              </p>
            </div>
            <div
              class="
                w-[370px]
                text-[15px]
                leading-[28px]
                text-[#00004d]
                font-rubik
              "
            >
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                {{ productStoreData.selectedProducts.value[activeItem].model }}
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                {{ productStoreData.selectedProducts.value[activeItem].light }}
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                LED
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                {{ productStoreData.selectedProducts.value[activeItem].color }}
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                {{ productStoreData.selectedProducts.value[activeItem].length }}
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                {{ productStoreData.selectedProducts.value[activeItem].col }}
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                29W
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                {{ productStoreData.selectedProducts.value[activeItem].direct }}
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                {{
                  productStoreData.selectedProducts.value[activeItem].control
                }}
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                -
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                > 80
              </p>
              <p
                class="border-b-[1px] border-l-[1px] pl-[10px] border-[#e9e9e9]"
              >
                1.2kg
              </p>
            </div>
          </div>
          <a href="#arrows_select" class="select-arrows">
            <svg class="arrows-select">
              <!-- <path class="a1" d="M0 0 L30 32 L60 0"></path> -->
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </a>
        </div>
      </div>
      <div
        class="w-full bg-white"
        v-if="productStoreData.selectedProducts.value.length"
      >
        <div class="container py-[25px]">
          <div class="flex items-center justify-center">
            <button class="btn">SELECT PRODUCT ON REQUEST LIST</button>
          </div>
          <form @submit.prevent="sendEmail" class="">
            <h2
              class="
                text-center
                my-[50px]
                text-[30px]
                leading-[33px]
                text-[#ff7800]
                font-[900] font-rajdhani
              "
            >
              REQUEST LIST
            </h2>
            <div class="overflow-x-auto">
              <table
                class="
                  w-full
                  border-collapse border-spacing-0 border-[1px] border-[#ddd]
                "
              >
                <thead
                  class="
                    text-[18px]
                    leading-[20px]
                    text-[#ff7800]
                    font-semibold font-rajdhani
                  "
                >
                  <tr>
                    <th class="text-left p-[8px]">PRODUCT CODE</th>
                    <th class="text-left p-[8px]">QUANTITY</th>
                    <th class="text-left p-[8px]">PDF</th>
                    <th class="text-left p-[8px]">PRINT</th>
                    <th class="text-left p-[8px]"></th>
                  </tr>
                </thead>
                <tbody class="font-rajdhani">
                  <tr
                    class="odd:bg-[#F5F5F5]"
                    v-for="p in productStoreData.selectedProducts.value"
                    :key="p.dataPass"
                  >
                    <td class="text-left p-[8px]">{{ p.dataPass }}</td>
                    <td class="text-left p-[8px]">
                      <input
                        min="1"
                        required
                        type="number"
                        v-model="p.quantity"
                        class="
                          outline-none
                          focus:outline-none
                          border-[1px] border-[#ff7800]
                          max-w-[45px] max-h-[20px]
                          mr-[5px]
                          pl-[5px]
                        "
                      />
                      PCS
                    </td>
                    <td class="text-left p-[8px]">
                      <a
                        :href="setPdfUrl(p.pdfInstallmentUrl)"
                        class="cursor-pointer"
                        :download="`${p.model}-INSTALLMENT`"
                      >
                        <img
                          class="
                            min-w-[22px]
                            max-w-[22px]
                            transition-all
                            duration-100
                            transform
                            hover:scale-125
                          "
                          src="../assets/images/pdf.png"
                          alt="download"
                        />
                      </a>
                    </td>
                    <td class="text-left p-[8px]">
                      <img
                        class="
                          min-w-[22px]
                          max-w-[22px]
                          transition-all
                          duration-100
                          transform
                          cursor-pointer
                          hover:scale-125
                        "
                        src="../assets/images/print.png"
                        alt="download"
                      />
                    </td>
                    <td class="text-left p-[8px]">
                      <img
                        @click="productStore.removeSelectedProduct(p)"
                        class="
                          min-w-[22px]
                          max-w-[22px]
                          transition-all
                          duration-100
                          transform
                          cursor-pointer
                          hover:scale-125
                        "
                        src="../assets/images/trash.png"
                        alt="download"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mt-[25px]">
              <div class="flex items-end justify-between flex-wrap gap-[20px]">
                <div class="flex flex-col gap-[5px]">
                  <label
                    class="text-[15px] leading-[28px] text-[#4c4c4c] font-rubik"
                    >Your email</label
                  >
                  <input
                    v-model="userEmail"
                    required
                    class="
                      outline-none
                      focus:outline-none
                      border-[1px] border-[#ff7800]
                      px-[8px]
                      py-[5px]
                      mr-[5px]
                    "
                    type="email"
                    placeholder="Your Email"
                  />
                </div>

                <button class="btn flex gap-[10px] items-center">
                  <img
                    class="animate-spin w-[22px] cursor-pointer"
                    src="../assets/images/loading.png"
                    alt="download"
                    v-if="isLoading"
                  />SEND
                </button>
              </div>

              <div
                v-if="emailError"
                class="
                  bg-[#fcf8e3]
                  border-[1px] border-[#faebcc]
                  p-[15px]
                  rounded-[4px]
                  mt-[20px]
                "
              >
                <p class="font-rubik text-[15px] leading-28px] text-[#8a6d3b]">
                  Error, please retry. Your request has not been sent.
                </p>
              </div>
              <div
                v-if="emailSuccess"
                class="
                  bg-[#dff0d8]
                  border-[1px] border-[#d6e9c6]
                  p-[15px]
                  rounded-[4px]
                  mt-[20px]
                "
              >
                <p class="font-rubik text-[15px] leading-28px] text-[#3c763d]">
                  Congratulations. Your request has been sent successfully
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHero from "../components/PageHero.vue";
import CustomSelect from "../components/CustomSelect.vue";

import { useProductStore } from "@/stores/products";
import { useRouter } from "vue-router";
import { ref, computed, watch, reactive, onMounted } from "vue";
import { storeToRefs } from "pinia";
import emailjs from "@emailjs/browser";

const productStore = useProductStore();

var productStoreData = storeToRefs(productStore);
var showError = ref(false);
var activeItem = ref(0);
var userEmail = ref("");
var emailError = ref(false);
var emailSuccess = ref(false);
var isLoading = ref(false);
var modelLabel = ref("MODEL");
var colorLabel = ref("HOSUING COLOR");
const router = useRouter();

console.log(router, "router");

var dataModel = ref({
  weight: "1.2kg",
  ra: "> 80",
  flux: null,
  power: "29W",
  dataPass: "",
  imageUrl: "",
  pdfInstallmentUrl: "",
  pdfGeneralUrl: "",
});

onMounted(() => {
  if (router.currentRoute.value.query) {
    var color = "";
    switch (router.currentRoute.value.query.color) {
      case "go":
        color = "GOLDEN OAK";
        break;
      case "grigio":
        color = "GRIGIO ANTICO";
        break;
      case "white":
        color = "WHITE";
        break;
      default:
        return;
        break;
    }
    setModel(router.currentRoute.value.query.model);
    modelLabel.value = router.currentRoute.value.query.model;
    setColor(color);
    colorLabel.value = color;
    console.log('hej hej')
  }
});

const sendEmail = () => {
  isLoading.value = true;
  emailError.value = false;
  emailSuccess.value = false;
  var makeString = "";
  productStoreData.selectedProducts.value.forEach((element) => {
    makeString += `Product: ${element.dataPass} (${element.quantity} quantity) is requested. `;
  });
  var requestedObj = { products: makeString, email: userEmail.value };
  emailjs
    .send(
      "service_0o3fhge",
      "turkovicproducts",
      requestedObj,
      "DKK_F1A5_TAT8fN6U"
    )
    .then(
      (result) => {
        console.log("SUCCESS", result.text);
        isLoading.value = false;
        emailSuccess.value = true;
      },
      (error) => {
        console.log("FAILED...", error.text);
        emailError.value = true;
        isLoading.value = false;
      }
    );
};

const setImageUrl = (image) => {
  return new URL("/src/assets/images/" + image, import.meta.url);
};

const setPdfUrl = (pdf) => {
  return new URL("/src/assets/pdf/" + pdf, import.meta.url);
};

const setModel = (value) => {
  console.log('value', value)
  dataModel.value.model = value;
  productStore.setShowError(false);
  showError.value = false;
};

const setLight = (value) => {
  dataModel.value.light = value;
  productStore.setShowError(false);
  showError.value = false;
};

const setColor = (value) => {
  dataModel.value.color = value;
  productStore.setShowError(false);
  showError.value = false;
};

const setLength = (value) => {
  dataModel.value.length = value;
  productStore.setShowError(false);
  showError.value = false;
};

const setCol = (value) => {
  dataModel.value.col = value;
  productStore.setShowError(false);
  showError.value = false;
};

const setDirect = (value) => {
  dataModel.value.direct = value;
  productStore.setShowError(false);
  showError.value = false;
};

const setControl = (value) => {
  dataModel.value.control = value;
  productStore.setShowError(false);
  showError.value = false;
};

const saveDataModel = () => {
  if (Object.keys(dataModel.value).length !== 15) {
    showError.value = true;
    return;
  }
  var dataPass = createDataPass();
  dataModel.value.dataPass = dataPass;

  var imageUrl = createImageUrl();
  dataModel.value.imageUrl = imageUrl;

  var pdfInstallmentUrl = createPdfInstallmentUrl();
  dataModel.value.pdfInstallmentUrl = pdfInstallmentUrl;

  var pdfGeneralUrl = createPdfGeneralUrl();
  dataModel.value.pdfGeneralUrl = pdfGeneralUrl;
  console.log(pdfGeneralUrl, "url");

  var p = Object.assign({}, dataModel.value);
  productStore.addSelectedProduct(p);
};

const createImageUrl = () => {
  // var imageUrl = dataModel.value.model.replace(/ /g, "_").toLowerCase();
  var imageUrl = dataModel.value.model.split(" ")[0].toLowerCase();
  var imageData = dataModel.value.color.split(" ")[0];
  var imageFinal = "";
  switch (imageData) {
    case "GOLDEN":
      imageFinal = "-go.png";
      break;
    case "GRIGIO":
      imageFinal = "-grigio.png";
      break;
    case "WHITE":
      imageFinal = "-white.png";
      break;
  }

  return imageUrl + imageFinal;
};

const createPdfInstallmentUrl = () => {
  var pdf = dataModel.value.model.split(" ")[0];
  return pdf.toLowerCase() + "_installation.pdf";
};

const createPdfGeneralUrl = () => {
  var pdf = dataModel.value.model.split(" ")[0];
  return pdf.toLowerCase() + "_general.pdf";
};

const createDataPass = () => {
  var nameArr = dataModel.value.model.split(" ");
  var name = nameArr[0] + "-" + nameArr[2];
  var light = dataModel.value.light.split(" ")[0];
  var color = dataModel.value.color.split(" ")[0];
  var length = "L" + dataModel.value.length.split(" ")[0];
  var col = dataModel.value.col.split(" ")[0];
  var direct = dataModel.value.direct == "DIRECT" ? "1" : "2";
  var control = dataModel.value.control == "ON/OFF" ? "1" : "2";

  var dataPass =
    name +
    "-" +
    light +
    "-" +
    color +
    "-" +
    length +
    "-" +
    col +
    "-" +
    direct +
    "-" +
    control;

  return dataPass;
};

const refreshPage = () => {
  router.go();
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
