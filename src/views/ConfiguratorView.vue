<template>
  <div class="">
    <PageHero name="Configurator" />
    <div class="w-full bg-[#F5F5F5]">
      <div class="container py-[50px]">
        <button class="btn" @click="refreshPage()">START NEW ONE</button>
        <div
          class="flex flex-wrap items-center justify-center gap-[6px] my-[29px]"
        >
          <CustomSelect
            :label="modelLabel"
            @setProp="setModel"
            width="222"
            :error="modelError"
            :items="[
              { name: 'TL1 LED PENDANT LUMINAIRE' },
              { name: 'TL2 LED CEILING LUMINAIRE' },
              { name: 'TL3 LED WALL LUMINAIRE' },
            ]"
          />
          <CustomSelect
            label="LIGHT DISTRIBUTION"
            @setProp="setLight"
            :error="lightError"
            :disabled="dataModel.model ? false : true"
            width="177"
            :items="lightItems"
          />
          <CustomSelect
            :label="colorLabel"
            @setProp="setColor"
            :error="colorError"
            width="155"
            :disabled="dataModel.model ? false : true"
            :items="colorItems"
          />
          <CustomSelect
            label="LENGTH"
            @setProp="setLength"
            :error="lengthError"
            width="100"
            :disabled="dataModel.model ? false : true"
            :items="lengthItems"
          />
          <CustomSelect
            label=">COL. TEM."
            @setProp="setCol"
            :error="colError"
            width="122"
            :disabled="dataModel.model ? false : true"
            :items="[{ name: '830 - 30000K' }, { name: '840 - 4000K' }]"
          />
          <CustomSelect
            label="DIRECT/INDIRECT"
            @setProp="setDirect"
            :error="directError"
            width="151"
            :disabled="dataModel.model ? false : true"
            :items="directItems"
          />
          <CustomSelect
            label="CONTROL"
            @setProp="setControl"
            :error="controlError"
            width="173"
            :disabled="dataModel.model ? false : true"
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
        <div
          class="
            overflow-x-auto overflow-y-hidden
            container
            pt-[40px]
            pb-[100px]
            relative
          "
        >
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
          <a @click="goTo('requestList')" class="cursor-pointer select-arrows">
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
        ref="requestList"
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
            <div class="mt-[50px]">
              <div class="flex items-end justify-between flex-wrap gap-[20px]">
                <div class="">
                  <div class="flex flex-wrap gap-[13px] justify-between">
                    <div class="md:flex-[30%] flex-[100%]">
                      <label
                        class="
                          font-rubik
                          text-[15px]
                          leading-[28px]
                          text-[#4c4c4c]
                        "
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        v-model="userName"
                        class="
                          outline-0
                          focus:outline-0 focus:border-b-[#FF7800]
                          border-0 border-b-[1px] border-b-[#2d2d2d]
                          p-0
                          mb-0
                          bg-transparent
                          h-[34px]
                          text-[14px]
                          color-[#555555]
                          leading-[1.42857143]
                          w-full
                        "
                        name="from_name"
                      />
                    </div>
                    <div class="md:flex-[30%] flex-[100%]">
                      <label
                        class="
                          font-rubik
                          text-[15px]
                          leading-[28px]
                          text-[#4c4c4c]
                        "
                      >
                        E-mail
                      </label>
                      <input
                        type="email"
                        required
                        v-model="userEmail"
                        class="
                          outline-0
                          focus:outline-0 focus:border-b-[#FF7800]
                          border-0 border-b-[1px] border-b-[#2d2d2d]
                          p-0
                          mb-0
                          bg-transparent
                          h-[34px]
                          text-[14px]
                          color-[#555555]
                          leading-[1.42857143]
                          w-full
                        "
                        name="from_email"
                      />
                    </div>
                    <div class="md:flex-[30%] flex-[100%]">
                      <label
                        class="
                          font-rubik
                          text-[15px]
                          leading-[28px]
                          text-[#4c4c4c]
                        "
                      >
                        Phone number
                      </label>
                      <input
                        type="text"
                        v-model="userPhone"
                        class="
                          outline-0
                          focus:outline-0 focus:border-b-[#FF7800]
                          border-0 border-b-[1px] border-b-[#2d2d2d]
                          p-0
                          mb-0
                          bg-transparent
                          h-[34px]
                          text-[14px]
                          color-[#555555]
                          leading-[1.42857143]
                          w-full
                        "
                        name="from_phone"
                      />
                    </div>
                  </div>
                  <div class="w-full mt-[20px]">
                    <label
                      class="
                        font-rubik
                        text-[15px]
                        leading-[28px]
                        text-[#4c4c4c]
                      "
                    >
                      Message
                    </label>
                    <textarea
                      type="text"
                      required
                      v-model="userMessage"
                      class="
                        outline-0
                        focus:outline-0 focus:border-b-[#FF7800]
                        border-0 border-b-[1px] border-b-[#2d2d2d]
                        p-0
                        mb-0
                        bg-transparent
                        h-[34px]
                        text-[14px]
                        color-[#555555]
                        leading-[1.42857143]
                        w-full
                      "
                      name="from_message"
                    />
                  </div>
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
var userName = ref("");
var userPhone = ref("");
var userMessage = ref("");

var modelError = ref(false);
var lightError = ref(false);
var colorError = ref(false);
var lengthError = ref(false);
var colError = ref(false);
var directError = ref(false);
var controlError = ref(false);

var emailError = ref(false);
var emailSuccess = ref(false);
var isLoading = ref(false);
var modelLabel = ref("MODEL");
var colorLabel = ref("HOSUING COLOR");
const router = useRouter();

const requestList = ref();

var lengthItems = ref([]);
var directItems = ref([{ name: "DIRECT+INDIRECT" }, { name: "DIRECT" }]);
var lightItems = ref([]);
var colorItems = ref([]);

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

watch(
  () => dataModel.value.model,
  (newValue, oldValue) => {
    if (newValue) {
      let modelName = newValue.split(" ")[0];
      switch (modelName) {
        case "TL1":
          lengthItems.value = [
            { name: "960 mm" },
            { name: "1150 mm" },
            { name: "1342 mm" },
            { name: "1533 mm" },
          ];
          directItems.value = [{ name: "DIRECT+INDIRECT" }, { name: "DIRECT" }];
          lightItems.value = [
            { name: "PRO RASTER UGR < 19" },
            { name: "PRO2" },
            { name: "OPAL OPAL COVER" },
          ];
          colorItems.value = [
            { name: "GOLDEN OAK", image: "go" },
            { name: "GRIGIO ANTICO", image: "grigio" },
            { name: "WHITE", image: "white" },
          ];
          break;
        case "TL2":
          lengthItems.value = [
            { name: "960 mm" },
            { name: "1150 mm" },
            { name: "1342 mm" },
            { name: "1533 mm" },
          ];
          directItems.value = [{ name: "DIRECT" }];
          lightItems.value = [
            { name: "PRO RASTER UGR < 19" },
            { name: "PRO2" },
            { name: "OPAL OPAL COVER" },
          ];
          colorItems.value = [
            { name: "GOLDEN OAK", image: "go" },
            { name: "GRIGIO ANTICO", image: "grigio" },
            { name: "WHITE", image: "white" },
          ];
          break;
        case "TL3":
          lengthItems.value = [{ name: "385 mm" }, { name: "960 mm" }];
          directItems.value = [{ name: "DIRECT+INDIRECT" }, { name: "DIRECT" }];
          lightItems.value = [
            { name: "PRO RASTER UGR < 19" },
            { name: "PRO2" },
            { name: "OPAL OPAL COVER" },
            { name: "MIX" },
            { name: "MIX2" },
          ];
          colorItems.value = [
            { name: "GOLDEN OAK", image: "go" },
            { name: "GRIGIO ANTICO", image: "grigio" },
            { name: "WHITE", image: "white" },
            { name: "MIX", image: "white" },
            { name: "MIX2", image: "white" },
          ];
          break;
        default:
          break;
      }
    }
  },
  { deep: true }
);

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
      case "mix":
        color = "WHITE";
        break;
      case "mix2":
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
  var requestedObj = {
    products: makeString,
    email: userEmail.value,
    name: userName.value,
    phoneNumber: userPhone.value,
    message: userMessage.value,
  };
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
  return new URL("/" + image, import.meta.url);
};

const setPdfUrl = (pdf) => {
  return new URL("/" + pdf, import.meta.url);
};

const setModel = (value) => {
  dataModel.value.model = value;
  productStore.setShowError(false);
  modelError.value = false;
  showError.value = false;
};

const setLight = (value) => {
  dataModel.value.light = value;
  productStore.setShowError(false);
  lightError.value = false;
  showError.value = false;
};

const setColor = (value) => {
  dataModel.value.color = value;
  productStore.setShowError(false);
  colorError.value = false;
  showError.value = false;
};

const setLength = (value) => {
  dataModel.value.length = value;
  productStore.setShowError(false);
  lengthError.value = false;
  showError.value = false;
};

const setCol = (value) => {
  dataModel.value.col = value;
  productStore.setShowError(false);
  colError.value = false;
  showError.value = false;
};

const setDirect = (value) => {
  dataModel.value.direct = value;
  productStore.setShowError(false);
  directError.value = false;
  showError.value = false;
};

const setControl = (value) => {
  dataModel.value.control = value;
  productStore.setShowError(false);
  controlError.value = false;
  showError.value = false;
};

const saveDataModel = () => {
  if (Object.keys(dataModel.value).length !== 15) {
    showError.value = true;
    if (!dataModel.value.model) {
      modelError.value = true;
    }
    if (!dataModel.value.light) {
      lightError.value = true;
    }
    if (!dataModel.value.color) {
      colorError.value = true;
    }
    if (!dataModel.value.length) {
      lengthError.value = true;
    }
    if (!dataModel.value.col) {
      colError.value = true;
    }
    if (!dataModel.value.direct) {
      directError.value = true;
    }
    if (!dataModel.value.control) {
      controlError.value = true;
    }
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
    case "MIX":
      imageFinal = "-white.png";
      break;
    case "MIX2":
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

const goTo = (refName) => {
  var element = requestList.value;
  element.scrollIntoView({ behavior: "smooth" });
};

const createId = (name, length, direct, light) => {
  var id = "";
  if (name == "TL3") {
    if (length == "L385") {
      id = "18";
    } else {
      if (direct == "DIRECT") {
        id = "22";
      } else {
        id = "44";
      }
    }
  } else {
    if (length === "L960") {
      if (direct == "DIRECT") {
        if (light == "OPAL") {
          id = "31";
        } else {
          id = "33";
        }
      } else {
        if (light == "OPAL") {
          id = "37";
        } else {
          id = "39";
        }
      }
    } else if (length === "L1150") {
      if (direct == "DIRECT") {
        if (light == "OPAL") {
          id = "37";
        } else {
          id = "39";
        }
      } else {
        if (light == "OPAL") {
          id = "43";
        } else {
          id = "46";
        }
      }
    } else if (length === "L1342") {
      if (direct == "DIRECT") {
        if (light == "OPAL") {
          id = "49";
        } else {
          id = "46";
        }
      } else {
        if (light == "OPAL") {
          id = "49";
        } else {
          id = "52";
        }
      }
    } else if (length === "L1533") {
      if (direct == "DIRECT") {
        if (light == "OPAL") {
          id = "49";
        } else {
          id = "52";
        }
      } else {
        if (light == "OPAL") {
          id = "55";
        } else {
          id = "58";
        }
      }
    }
  }
  return id;
};

const createDataPass = () => {
  var nameArr = dataModel.value.model.split(" ");
  var name = nameArr[0];
  var light = dataModel.value.light.split(" ")[0];
  var colorClone = dataModel.value.color.split(" ")[0];
  var color = "";
  switch (colorClone) {
    case "GOLDEN":
      color = "GO";
      break;
    case "GRIGIO":
      color = "GA";
      break;
    case "WHITE":
      color = "WH";
      break;
    case "MIX":
      color = "MIX";
      break;
    case "MIX2":
      color = "MIX2";
      break;
    default:
      break;
  }
  var length = "L" + dataModel.value.length.split(" ")[0];
  var col = dataModel.value.col.split(" ")[0];
  var direct = dataModel.value.direct == "DIRECT" ? "1" : "2";
  var control = dataModel.value.control == "ON/OFF" ? "1" : "2";

  var productId = createId(name, length, dataModel.value.direct, light);

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
    productId +
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
