<script setup lang="ts">
import { RouterView } from "vue-router";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY)
</script>

<template>
  <RouterView />
</template>
