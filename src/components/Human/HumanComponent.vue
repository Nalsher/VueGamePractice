<script setup>
import { Human, moveSprite } from "@/components/Human/Human.js";
import { onMounted } from "vue";

onMounted(() => {
  window.addEventListener("keydown", moveSprite);
});

const emit = defineEmits();
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
