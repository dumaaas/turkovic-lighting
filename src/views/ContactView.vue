<template>
  <div>
    <PageHero name="Contact" />
    <div class="w-full bg-[#F6F6F6]">
      <div
        class="
          flex
          gap-[59px]
          items-stretch
          flex-wrap
          justify-between
          container
          py-[56px]
        "
      >
        <div class="flex-[46%]">
          <div class="bg-[#FF7800] py-[8px] px-[15px] inline-block mb-[50px]">
            <h4
              class="
                font-rajdhani font-[900]
                text-[30px]
                leading-[33px]
                text-white
              "
            >
              CONTACT US
            </h4>
          </div>
          <form ref="form" class="" @submit.prevent="sendEmail">
            <div class="flex flex-wrap gap-[13px] justify-between">
              <div class="md:flex-[30%] flex-[100%]">
                <label
                  class="font-rubik text-[15px] leading-[28px] text-[#4c4c4c]"
                >
                  Name
                </label>
                <input
                  type="text"
                  required
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
                  class="font-rubik text-[15px] leading-[28px] text-[#4c4c4c]"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  required
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
                  class="font-rubik text-[15px] leading-[28px] text-[#4c4c4c]"
                >
                  Phone number
                </label>
                <input
                  type="text"
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
            <div class="w-full mt-[20px] mb-[24px]">
              <label
                class="font-rubik text-[15px] leading-[28px] text-[#4c4c4c]"
              >
                Message
              </label>
              <textarea
                type="text"
                required
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
            <div class="">
              <button
                class="
                  flex
                  gap-[10px]
                  border-[1px] border-[#ccc]
                  font-medium
                  cursor-pointer
                  text-[15px]
                  leading-[23px]
                  font-rajdhani
                  bg-[#ff7800]
                  text-white text-center
                  px-[25px]
                  py-[10px]
                "
              >
                <img
                  class="animate-spin w-[22px] cursor-pointer"
                  src="../assets/images/loading.png"
                  alt="download"
                  v-if="isLoading"
                />
                SEND MESSAGE
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
                Error, please retry. Your message has not been sent.
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
                Congratulations. Your message has been sent successfully
              </p>
            </div>
          </form>
        </div>
        <div class="flex flex-col flex-[46%] bg-white p-[25px] md:p-[40px] drop-shadow">
          <div
            class="
              flex
              w-full
              md:gap-[8px]
              font-rubik
              text-[15px]
              leading-[28px]
              text-[#4c4c4c]
              md:flex-row
              flex-col
             
            "
          >
            <b class="font-bold">Address:</b>
            <div
              class="
                border-t-[1.5px] border-0 border-dotted border-red-[#bbb]
                mt-[20px]
                md:flex-1
                hidden
              "
            ></div>
            <p class="">Kringa, Prenci 38a</p>
          </div>
          <div
            class="
              flex
              w-full
              md:gap-[8px]
              font-rubik
              text-[15px]
              leading-[28px]
              text-[#4c4c4c]
              md:flex-row
              flex-col
              mt-[15px] md:mt-0
            "
          >
            <b class="font-bold">Office:</b>
            <div
              class="
                md:flex-1
                hidden
                border-t-[1.5px] border-0 border-dotted border-red-[#bbb]
                mt-[20px]
              "
            ></div>
            <p class="">52444, Kringa, Istarska zupanija Croatia</p>
          </div>
          <div
            class="
             flex
              w-full
              md:gap-[8px]
              font-rubik
              text-[15px]
              leading-[28px]
              text-[#4c4c4c]
              md:flex-row
              flex-col
              mt-[15px] md:mt-0
            "
          >
            <b class="font-bold">Phone:</b>
            <div
              class="
                md:flex-1
                hidden
                border-t-[1.5px] border-0 border-dotted border-red-[#bbb]
                mt-[20px]
              "
            ></div>
            <p class="">+385 98 195 4 732</p>
          </div>
          <div
            class="
              flex
              w-full
              md:gap-[8px]
              font-rubik
              text-[15px]
              leading-[28px]
              text-[#4c4c4c]
              md:flex-row
              flex-col
              mt-[15px] md:mt-0
            "
          >
            <b class="font-bold">Email:</b>
            <div
              class="
                md:flex-1
                hidden
                border-t-[1.5px] border-0 border-dotted border-red-[#bbb]
                mt-[20px]
              "
            ></div>
            <p class="">info@turkoviclighting.com</p>
          </div>
        </div>
      </div>
    </div>
    <MapLocation />
  </div>
</template>

<script>
import PageHero from "../components/PageHero.vue";
import MapLocation from "../components/MapLocation.vue";
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      emailError: false,
      emailSuccess: false,
      isLoading: false,
    };
  },
  components: {
    PageHero,
    MapLocation,
  },
  methods: {
    sendEmail() {
      this.emailError = false;
      this.emailSuccess = false;
      this.isLoading = true;
      console.log("this.$refs.form", this.$refs.form);
      emailjs
        .sendForm(
          "service_0o3fhge",
          "turkoviccontact",
          this.$refs.form,
          "DKK_F1A5_TAT8fN6U"
        )
        .then(
          (result) => {
            console.log("SUCCESS", result.text);
            this.emailSuccess = true;
            this.clearInputs();
            this.isLoading = false;
          },
          (error) => {
            console.log("FAILED...", error.text);
            this.emailError = true;
            this.isLoading = false;
          }
        );
    },
    clearInputs() {
      this.$refs.form.from_name.value = "";
      this.$refs.form.from_email.value = "";
      this.$refs.form.from_phone.value = "";
      this.$refs.form.from_message.value = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>