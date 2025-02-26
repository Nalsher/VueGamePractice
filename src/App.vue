<script setup>
import HumanComponent from "@/components/Human/HumanComponent.vue";
import { Human } from "@/components/Human/Human.js";
import Background from "@/components/Background/Background.vue";
import { ref } from "vue";

const resolution = ref({
  leftBorder: 0,
  bottomBorder: 0,
  rightBorder: 0,
  topBorder: 0,
});

const setSpriteCoords = (Info) => {
  resolution.rightBorder = Info.width + Info.x - 50;
  resolution.leftBorder = Info.x;
  resolution.topBorder = Info.y;
  resolution.bottomBorder = Info.height + 50;
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
  console.log(resolution);
  console.log(Human.value);
};
</script>

<template>
  <body>
    <HumanComponent />
    <Background @imageInfo="setSpriteCoords" />
  </body>
</template>

<style>
body {
  width: 100%;
  height: 100vh;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
