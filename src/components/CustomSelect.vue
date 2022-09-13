<template>
  <div>
    <div
      class="
        relative
        text-[#ff7800] text-[13px]
        leading-[28px]
        px-[12px]
        py-[8px]
        border-[1px] border-[#ff7800]
        cursor-pointer
        bg-white
      "
      :class="`width-${width}`"
      @focusout="dialogToggler(false)"
      tabindex="0"
    >
      <div
        class="flex items-center justify-between gap-[8px]"
        @click="dialogToggler(true)"
      >
        <div class="flex items-center gap-[7px]">
          <div v-if="checkShowImage()">
            <img
              v-if="checkImageName() !== 'white'"
              class="w-[20px] h-[17px] border-[1px] border-[#4c4c4c]"
              :src="setImageUrl(checkImageName())"
              alt="image"
            />
            <div
              class="w-[20px] h-[17px] border-[1px] border-[#4c4c4c] bg-white"
              v-else
            ></div>
          </div>
          <p v-if="checkShowImage && (labelReal === 'GRIGIO ANTICO' || labelNew === 'GRIGIO ANTICO')">
            {{ labelReal ? truncateString(labelReal, 10) : truncateString(labelNew, 10) }}
          </p>
          <p v-else>
            {{ labelReal ? labelReal : labelNew }}
          </p>
        </div>

        <div
          class="
            w-0
            h-0
            border-[6px] border-b-0 border-transparent border-t-[#ff7800]
            transform
            transition-all
            duration-150
          "
          :class="showDialog ? 'rotate-180' : ''"
        ></div>
      </div>

      <div
        class="bg-white absolute top-[41px] left-[-1px] w-[calc(100%+2px)] z-50"
        v-if="showDialog"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="
            flex
            items-center
            gap-[7px]
            px-[12px]
            py-[8px]
            border-[1px] border-[#ff7800]
            cursor-pointer
            hover:text-white hover:bg-[#ff7800]
          "
          @click="selectOption(item.name)"
        >
          <div v-if="item.image">
            <img
              v-if="item.image !== 'white'"
              class="w-[20px] h-[17px] border-[1px] border-[#4c4c4c]"
              :src="setImageUrl(item.image)"
              alt="image"
            />
            <div
              class="w-[20px] h-[17px] border-[1px] border-[#4c4c4c] bg-white"
              v-else
            ></div>
          </div>

          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, toRefs } from "vue";
const props = defineProps({
  items: Array,
  label: String,
  width: String,
});

const emits = defineEmits(["setProp"]);
var showDialog = ref(false);

const dialogToggler = (bool) => {
  showDialog.value = bool;
};

var labelNew = computed(() => props.label);
var labelReal = ref("");

const selectOption = (option) => {
  labelReal.value = option;
  emits("setProp", option);
  dialogToggler(false);
};

const setImageUrl = (image) => {
  return new URL("/src/assets/images/" + image + ".png", import.meta.url);
};

const checkShowImage = () => {
  var bool = false;
  if (
    labelReal.value === "GOLDEN OAK" ||
    labelReal.value === "GRIGIO ANTICO" ||
    labelReal.value === "WHITE" ||
    labelNew.value === "GOLDEN OAK" ||
    labelNew.value === "GRIGIO ANTICO" ||
    labelNew.value === "WHITE"
  ) {
    bool = true;
  }
  return bool;
};

const checkImageName = () => {
  var imageName = "white";
  if (labelReal.value === "GOLDEN OAK" || labelNew.value === "GOLDEN OAK") {
    imageName = "go";
  } else if (
    labelReal.value === "GRIGIO ANTICO" ||
    labelNew.value === "GRIGIO ANTICO"
  ) {
    imageName = "grigio";
  }
  return imageName;
};

const truncateString = (str, num) => {
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str
  }
  // Return str truncated with '...' concatenated to the end of str.
  return str.slice(0, num) + '...'
}

</script>

<style lang="scss" scoped>
</style>