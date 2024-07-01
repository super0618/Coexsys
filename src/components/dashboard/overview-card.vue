<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  title: string;
  icon?: object;
}>();
</script>

<template>
  <div class="coexsys-card">
    <div class="card-body">
      <p class="header">{{ props.title }}</p>
    </div>
    <component :is="icon"></component>
  </div>
</template>

<style scoped>
.coexsys-card {
  background-color: #fff;
  border-radius: 6px;
  padding: 12px 24px;
  box-shadow: 3px 3px 5px #eee;
  display: grid;
  grid-template-columns: auto 48px;
}
</style>
