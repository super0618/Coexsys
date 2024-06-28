<script setup lang="ts">
import { provide } from "vue";
import { GanttComponent, Selection, VirtualScroll, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from "@/data/tabledata";

provide("gantt", [Selection, VirtualScroll, DayMarkers]);

const height = "600px";
const dateFormat = "MMM dd, y";
const highlightWeekends = true;
const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "subtasks",
};
const labelSettings = { leftLabel: "TaskName" };
const treeColumnIndex = 1;
const projectStartDate = new Date("03/24/2024");
const projectEndDate = new Date("07/06/2024");
</script>

<template>
    <GanttComponent :dataSource="projectNewData" :height :dateFormat :highlightWeekends :taskFields :labelSettings
        :treeColumnIndex :projectStartDate :projectEndDate></GanttComponent>
</template>
