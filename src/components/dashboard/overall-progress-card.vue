<script setup lang="ts">
import { provide } from "vue";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection, Selection, ChartAnnotation } from "@syncfusion/ej2-vue-charts";
import type { LegendSettingsModel, AccumulationTheme } from "@syncfusion/ej2-vue-charts";

provide("accumulationchart", [AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection, Selection, ChartAnnotation]);

const options = [{ value: 1, text: "See all" }];

const height = "360px",
  theme: AccumulationTheme = "Material",
  data = [
    { x: "Internet Explorer", y: 6.12, text: "6.12%" },
    { x: "Chrome", y: 57.28, text: "57.28%" },
    { x: "Safari", y: 19.69, text: "12.21%" },
    { x: "UC Browser", y: 24.39, text: "24.39%" },
  ],
  legendSettings: LegendSettingsModel = {
    visible: true,
    toggleVisibility: false,
    position: "Bottom",
    height: "20%",
    width: "100%",
    maximumLabelWidth: 100,
  },
  dataLabel = {
    name: "text",
    visible: true,
    font: {
      fontWeight: "600",
      color: "#ffffff",
    },
  },
  startAngle = 30,
  tooltip = {
    enable: true,
    format: "<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>",
    header: "",
  };
</script>

<template>
  <div class="coexsys-card">
    <div class="card-header">
      <p class="card-title">Overall Progress</p>
      <div class="d-flex gap-2">
        <div><DropDownListComponent :dataSource="options" :fields="{ value: 'value', text: 'text' }" width="100" :value="1" /></div>
      </div>
    </div>
    <div class="card-body">
      <AccumulationChartComponent :height :theme :legendSettings :tooltip selectionMode="Point" :enableBorderOnMouseMove="false">
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective :dataSource="data" xName="x" yName="y" :startAngle="startAngle" innerRadius="43%" :dataLabel="dataLabel"></AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  </div>
</template>

<style scoped>
.coexsys-card {
  background-color: #fff;
  border-radius: 6px;
  padding: 24px 32px 0;
  box-shadow: 3px 3px 5px #eee;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.card-title {
  font-weight: 600;
  font-size: 18px;
  text-wrap: nowrap;
  margin: 0;
  padding: 0;
}
</style>
