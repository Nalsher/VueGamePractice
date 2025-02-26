<script setup>
import { onMounted, ref } from "vue";
import HumanComponent from "@/components/Human/HumanComponent.vue";

const imageRef = ref(null);

const imageInfo = ref({
  x: 0,
  y: 0,
  width: 0,
  height: 0,
});

const emit = defineEmits();

onMounted(() => {
  if (imageInfo.value) {
    const rect = imageRef.value.getBoundingClientRect();
    imageInfo.value = {
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
    };
    emit("imageInfo", imageInfo.value);
  }
});
</script>

<template>
  <HumanComponent />

  <div class="container" ref="imageRef"></div>
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
  background-image: url("src/assets/images.jpeg");
}
</style>
