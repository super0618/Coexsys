<script setup lang="ts">
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import OverviewProjectsCard from "@/components/dashboard/overview-projects-card.vue";
import OverviewTasksCard from "@/components/dashboard/overview-tasks-card.vue";
import OverviewResourcesCard from "@/components/dashboard/overview-resources-card.vue";
import OverviewTimespentCard from "@/components/dashboard/overview-time-card.vue";
import ProfileSummaryCard from "@/components/dashboard/profile-summary-card.vue";
import OverallProgressCard from "@/components/dashboard/overall-progress-card.vue";
import MilestoneProgressCard from "@/components/dashboard/milestone-progress-card.vue";

const dateRange = [
  { value: 1, text: "Last 30 days" },
  { value: 2, text: "Last 7 days" },
  { value: 3, text: "Last 24 Hours" },
];
</script>

<template>
  <div class="coexsys-dashboard">
    <div class="header">
      <p class="header-title">Dashboard</p>
      <div class="range-picker">
        <DropDownListComponent :dataSource="dateRange" :fields="{ value: 'value', text: 'text' }" :value="1"></DropDownListComponent>
      </div>
    </div>

    <div class="overview-container">
      <OverviewProjectsCard :curVal="850" :totalVal="1100" :rate="-10" />
      <OverviewTasksCard :curVal="100" :totalVal="110" :rate="-5" />
      <OverviewResourcesCard :curVal="85" :totalVal="90" :rate="5" />
      <OverviewTimespentCard :curVal="752" :totalVal="885" :rate="-3" />
    </div>

    <div class="summary-container">
      <ProfileSummaryCard />
      <OverallProgressCard />
    </div>

    <div class="summary-container">
      <MilestoneProgressCard />
      <OverallProgressCard />
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
  margin-bottom: 24px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
.summary-container {
  display: grid;
  grid-template-columns: auto 360px;
  gap: 24px;
  margin-bottom: 24px;
}
</style>
