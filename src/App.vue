<script setup>
import HumanComponent from "@/components/Human/HumanComponent.vue";
import { Human } from "@/components/Human/Human.js";
import Background from "@/components/Background/Background.vue";
import { ref } from "vue";



</script>

<template>
  <body>
    <HumanComponent />
    <Background/>
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
