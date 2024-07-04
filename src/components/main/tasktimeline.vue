<script setup lang="ts">
import { provide } from "vue";
import { DayMarkers, GanttComponent, Selection } from "@syncfusion/ej2-vue-gantt";
import { timelineTemplateData } from "@/data/tabledata";
import { IconSun } from "@tabler/icons-vue";

provide("gantt", [Selection, DayMarkers]);

const weekDate = (dateString: any) => {
  const date = new Date(dateString);
  const options: any = { weekday: "short" };
  return date.toLocaleDateString("en-US", options);
};

const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  const options: any = { day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const height = "700px",
  taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "subtasks",
  },
  highlightWeekends = true,
  allowSelection = true,
  labelSettings = { leftLabel: "TaskName" },
  columns = [
    { field: "TaskID", headerText: "Task ID", visible: false },
    { field: "TaskName", headerText: "Task Name", width: 300 },
    { field: "StartDate", headerText: "Start Date" },
    { field: "Duration", headerText: "Duration" },
    { field: "Progress", headerText: "Progress" },
  ],
  splitterSettings = { columnIndex: 1 },
  projectStartDate = new Date("03/31/2024"),
  projectEndDate = new Date("04/23/2024"),
  timelineSettings: any = {
    topTier: { unit: "Day" },
    timelineUnitSize: 200,
  },
  treeColumnIndex = 1;
</script>

<template>
  <GanttComponent
    ref="gantt"
    id="labelData"
    :dataSource="timelineTemplateData"
    :rowHeight="46"
    :height
    :highlightWeekends
    :allowSelection
    :taskFields
    :labelSettings
    :columns="columns"
    :splitterSettings
    :projectStartDate
    :timelineSettings
    :projectEndDate
    :timelineTemplate="'timelineTemplates'"
  >
    <template v-slot:timelineTemplates="{ data }">
      <div
        v-if="data.tier === 'topTier'"
        class="e-gantt-top-cell-text e-header-cell-label"
        style="
          width: 100%;
          font-weight: bold;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        "
        title="${data.date}"
      >
        <div
          style="
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          "
        >
          <div style="line-height: initial; font-weight: normal">{{ weekDate(data.date) }}</div>
          <div style="line-height: normal; padding-top: 5px; padding-bottom: 2px; font-weight: normal">
            {{ formatDate(data.date) }}
          </div>
          <div style="width: 20px; height: 20px; line-height: normal">
            <IconSun size="100%" />
          </div>
        </div>
      </div>
    </template>
  </GanttComponent>
</template>

<style>
.e-header-cell-label.e-gantt-top-cell-text {
  background-color: #fff;
}
.fluent2-highcontrast .e-header-cell-label.e-gantt-top-cell-text,
.fluent-dark .e-header-cell-label.e-gantt-top-cell-text,
.fluent2-dark .e-header-cell-label.e-gantt-top-cell-text {
  background-color: #000;
}

.e-gantt .e-gantt-tree-grid-pane .e-timeline-single-header-outer-div {
  height: 70px !important;
}

.e-gantt .e-gantt-chart .e-timeline-single-header-outer-div {
  height: 70px !important;
}

.e-gantt .e-gantt-chart .e-timeline-single-header-cell {
  height: 70px !important;
}
</style>
