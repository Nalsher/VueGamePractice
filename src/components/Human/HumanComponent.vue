<script setup>
import { Human, moveBottom, moveLeft, moveRight, moveTop } from "@/components/Human/Human.js";
import {onMounted, ref} from "vue";
import {HumanDictMoveTypes} from "./HumanMoveTypes";

const keysPressed = ref({})

document.addEventListener("keydown", (e) => {
  keysPressed.value[e.key] = true;
})

document.addEventListener("keyup", (e) => {
  delete keysPressed.value[e.key];
})

function moveSprite() {
  if (keysPressed.value[HumanDictMoveTypes.moveUpKey]) moveTop();
  if (keysPressed.value[HumanDictMoveTypes.moveDownKey]) moveBottom();
  if (keysPressed.value[HumanDictMoveTypes.moveLeftKey]) moveLeft();
  if (keysPressed.value[HumanDictMoveTypes.moveRightKey]) moveRight();
  console.log(Human.value.lastRotate);
  requestAnimationFrame(moveSprite);
}

onMounted(() => {
  requestAnimationFrame(moveSprite);
})

</script>

<template>
  <img
    src="/src/assets/human.png"
    alt="human"
    class="human"
    :style="{
      left: Human.positionY + 'px',
      top: Human.positionX + 'px',
      transform: `rotate(${Human.rotate}deg)`,
    }"
  />
</template>

<style>
.human {
  position: absolute;
  width: 50px;
  height: 50px;
  max-height: 50px;
  max-width: 50px;
  background-image: url("src/assets/human.png");
  transition: all 0.2s ease;
}
</style>
