<script setup lang="ts">
import { provide } from "vue";
import { GanttComponent, Edit, Selection, Toolbar, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { editingData, editingResources } from "@/data/tabledata";

provide("gantt", [Selection, Edit, Selection, Toolbar, DayMarkers]);

const height = "700px",
  dateFormat = "MMM dd, y",
  taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "subtasks",
    notes: "info",
    resourceInfo: "resources",
  },
  editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true,
  },
  toolbar = ["Add", "Edit", "Update", "Delete", "Cancel", "ExpandAll", "CollapseAll", "Indent", "Outdent"],
  allowSelection = true,
  gridLines = "Both",
  treeColumnIndex = 1,
  resourceFields = {
    id: "resourceId",
    name: "resourceName",
  },
  highlightWeekends = true,
  timelineSettings: any = {
    topTier: { unit: "Week", format: "MMM dd, y" },
    bottomTier: { unit: "Day" },
  },
  columns: any = [
    { field: "TaskID", width: 90 },
    { field: "TaskName", headerText: "Job Name", width: "250", clipMode: "EllipsisWithTooltip" },
    { field: "StartDate" },
    { field: "Duration" },
    { field: "Progress" },
    { field: "Predecessor" },
  ],
  eventMarkers = [
    { day: "4/17/2024", label: "Project approval and kick-off" },
    { day: "5/3/2024", label: "Foundation inspection" },
    { day: "6/7/2024", label: "Site manager inspection" },
    { day: "7/16/2024", label: "Property handover and sign-off" },
  ],
  labelSettings = {
    leftLabel: "TaskName",
    rightLabel: "resources",
  },
  editDialogFields: any = [
    { type: "General", headerText: "General" },
    { type: "Dependency" },
    { type: "Resources" },
    { type: "Notes" },
  ],
  projectStartDate = new Date("03/25/2024"),
  projectEndDate = new Date("07/28/2024"),
  splitterSettings = { position: "35%" };
</script>

<template>
  <GanttComponent
    :height
    :dataSource="editingData"
    :dateFormat
    :taskFields
    :editSettings
    :toolbar
    :allowSelection
    :gridLines
    :treeColumnIndex
    :resourceFields
    :resources="editingResources"
    :highlightWeekends
    :timelineSettings
    :columns
    :eventMarkers
    :labelSettings
    :editDialogFields
    :projectStartDate
    :projectEndDate
    :splitterSettings
  >
  </GanttComponent>
</template>
