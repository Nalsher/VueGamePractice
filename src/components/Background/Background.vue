<script setup>
import { onMounted, ref } from "vue";
import HumanComponent from "@/components/Human/HumanComponent.vue";
import {Human} from "@/components/Human/Human.js";

const imageRef = ref(null);

const imageInfo = ref({
  x: 0,
  y: 0,
  width: 0,
  height: 0,
});

const resolution = ref({
  leftBorder: 0,
  bottomBorder: 0,
  rightBorder: 0,
  topBorder: 0,
});

const setResolution = (Info) => {
  resolution.rightBorder = Info.width + Info.x - 50;
  resolution.leftBorder = Info.x;
  resolution.topBorder = Info.y;
  resolution.bottomBorder = Info.height + 50;
}

const setHumanCoords = () => {
  Human.value.positionX =
      resolution.bottomBorder +
      (resolution.topBorder - resolution.bottomBorder) / 2;

  Human.value.positionY =
      resolution.leftBorder +
      (resolution.rightBorder - resolution.leftBorder) / 2;

  Human.value.rightBorder = resolution.rightBorder;
  Human.value.leftBorder = resolution.leftBorder;
  Human.value.bottomBorder = resolution.bottomBorder;
  Human.value.topBorder = resolution.topBorder;
};

onMounted(() => {
  if (imageInfo.value) {
    const rect = imageRef.value.getBoundingClientRect();
    imageInfo.value = {
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
    };
    setResolution(imageInfo.value);
    setHumanCoords();
  }
});
</script>

<template>
  <HumanComponent />

  <div class="container" ref="imageRef"><img src="/src/assets/images.jpeg" class="container"></div>
</template>

<style>
.container {
  border-color: #181818;
  border-style: solid;
  border-radius: 10px;
  display: flex;
  width: 1280px;
  height: 720px;
  align-items: center;
  justify-content: center;
}
</style>
