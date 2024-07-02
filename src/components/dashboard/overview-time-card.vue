<script setup lang="ts">
import { defineProps } from "vue";
import { IconClock, IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-vue";

const props = defineProps<{
  curVal: number;
  totalVal: number;
  rate: number;
}>();
</script>

<template>
  <div class="coexsys-card">
    <div class="card-body">
      <p class="header">Time Spent</p>
      <p class="body">
        <span class="body-value">{{ curVal }}</span> / {{ totalVal }} Hours
      </p>
      <div class="footer">
        <span class="rate-text success" v-if="rate > 0"> <IconArrowUpRight size="16" />{{ Math.abs(rate) }}% </span>
        <span class="error rate-text" v-else> <IconArrowDownRight size="16" />{{ Math.abs(rate) }}% </span>
        <span v-if="rate > 0">Increase</span>
        <span v-else>Decrease</span>
        &nbsp;from Last Month
      </div>
    </div>
    <div class="card-icon">
      <IconClock size="26" />
    </div>
  </div>
</template>

<style scoped>
.coexsys-card {
  background-color: #fff;
  border-radius: 6px;
  padding: 24px;
  box-shadow: 3px 3px 5px #eee;
  display: grid;
  grid-template-columns: auto 64px;
}
.card-body {
  overflow: hidden;
}
.header {
  margin: 0 0 16px;
}
.body {
  text-wrap: nowrap;
}
.footer {
  display: flex;
  align-items: center;
  font-size: 14px;
  text-wrap: nowrap;
}
.rate-text {
  display: flex;
  align-items: center;
  margin-right: 6px;
  font-weight: 500;
}
.success {
  color: #57a57b;
}
.error {
  color: #c15958;
}
.card-icon {
  background-color: #fef4df;
  color: #e59c39;
  border-radius: 50%;
  aspect-ratio: 1;
  display: grid;
  margin-top: 10px;
  place-items: center;
}
.body-value {
  font-size: 24px;
  font-weight: 700;
}
</style>
