<script setup lang="ts">
import { provide } from "vue";
import { GanttComponent, Toolbar, Edit, Selection, CriticalPath } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from "@/data/tabledata";

provide("gantt", [Edit, Toolbar, Selection, CriticalPath]);

const height = "700px",
  taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "subtasks",
  },
  editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true,
  },
  enableCriticalPath = true,
  toolbar = ["Add", "Edit", "Delete", "CriticalPath"],
  labelSettings = { leftLabel: "TaskName" },
  columns = [
    { field: "TaskID", width: 80 },
    { field: "TaskName", headerText: "Name", width: 250 },
    { field: "StartDate" },
    { field: "EndDate" },
    { field: "Duration" },
    { field: "Predecessor" },
    { field: "Progress" },
  ],
  splitterSettings = { columnIndex: 4 },
  projectStartDate = new Date("03/24/2024"),
  projectEndDate = new Date("07/06/2024");
</script>
<template>
  <GanttComponent
    :height
    :dataSource="projectNewData"
    :taskFields
    :editSettings
    :enableCriticalPath
    :toolbar
    :labelSettings
    :columns
    :splitterSettings
    :projectStartDate
    :projectEndDate
  ></GanttComponent>
</template>
