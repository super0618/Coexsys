<script setup lang="ts">
import { ref } from "vue";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import OverviewCard from "@/components/dashboard/overview-card.vue";
import iconProject from "@/components/dashboard/icon-project.vue";
import iconTask from "@/components/dashboard/icon-task.vue";
import iconResource from "@/components/dashboard/icon-resource.vue";
import iconTimespent from "@/components/dashboard/icon-timespent.vue";

const dateRange = ref(1);
const data = [
  { id: "1", text: "Last 30 days" },
  { id: "2", text: "Last 7 days" },
  { id: "3", text: "Last 24 Hours" },
];
</script>

<template>
  <div class="coexsys-dashboard">
    <div class="header">
      <p class="header-title">Dashboard</p>
      <div class="range-picker">
        <DropDownListComponent :dataSource="data" v-model="dateRange" :fields="{ value: 'id', text: 'text' }"></DropDownListComponent>
      </div>
    </div>
    <div class="overview-container">
      <OverviewCard title="Projects" :icon="iconProject"> </OverviewCard>
      <OverviewCard title="Tasks" :icon="iconTask"></OverviewCard>
      <OverviewCard title="Resources" :icon="iconResource"></OverviewCard>
      <OverviewCard title="Time Spent" :icon="iconTimespent"></OverviewCard>
    </div>
  </div>
</template>

<style scoped>
.coexsys-dashboard {
  min-height: 100vh;
  padding: 20px;
  background-color: #f7f6f9;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-title {
  font-weight: 700;
  font-size: 20px;
}
.range-picker {
  width: 150px;
}
.overview-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
