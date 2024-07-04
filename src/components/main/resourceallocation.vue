<script setup lang="ts">
import { provide } from "vue";
import { GanttComponent, Selection, Edit, DayMarkers, Toolbar } from "@syncfusion/ej2-vue-gantt";
import { resourceData, resourceResources } from "@/data/tabledata";

provide("gantt", [Selection, DayMarkers, Toolbar, Edit]);

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
    work: "work",
    resourceInfo: "resources",
    type: "taskType",
  },
  allowSelection = true,
  taskType = "FixedWork",
  resourceFields = {
    id: "resourceId",
    name: "resourceName",
    unit: "unit",
  },
  toolbar = ["Add", "Edit", "Update", "Delete", "Cancel", "ExpandAll", "CollapseAll"],
  treeColumnIndex = 1,
  highlightWeekends = true,
  columns = [
    { field: "TaskID", visible: false },
    { field: "TaskName", headerText: "Task Name", width: "180" },
    { field: "resources", headerText: "Resources", width: "160" },
    { field: "work", width: "110" },
    { field: "Duration", width: "100" },
    { field: "taskType", headerText: "Task Type", width: "110" },
  ],
  editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true,
  },
  labelSettings = { rightLabel: "resources" },
  projectStartDate = new Date("03/28/2024"),
  projectEndDate = new Date("07/28/2024"),
  splitterSettings = { columnIndex: 5.1 },
  showOverAllocation = true;
</script>

<template>
  <GanttComponent
    :height
    :dataSource="resourceData"
    :taskFields
    :allowSelection
    :resourceFields
    :taskType
    :editSettings
    :toolbar
    :treeColumnIndex
    :resources="resourceResources"
    :highlightWeekends
    :columns
    :labelSettings
    :projectStartDate
    :projectEndDate
    :splitterSettings
    :showOverAllocation
  >
  </GanttComponent>
</template>
