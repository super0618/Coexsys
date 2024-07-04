<script setup lang="ts">
import { provide } from "vue";
import { GanttComponent, Selection } from "@syncfusion/ej2-vue-gantt";
import { baselineData } from "@/data/tabledata";
import moment from "moment";

provide("gantt", [Selection]);

const height = "700px",
  taskFields = {
    id: "TaskId",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    baselineStartDate: "BaselineStartDate",
    baselineEndDate: "BaselineEndDate",
  },
  columns: any = [
    { field: "TaskName", headerText: "Service Name", width: "250", clipMode: "EllipsisWithTooltip" },
    { field: "BaselineStartDate", headerText: "Planned start time" },
    { field: "BaselineEndDate", headerText: "Planned end time" },
    { field: "StartDate", headerText: "Start time" },
    { field: "EndDate", headerText: "End time" },
  ],
  renderBaseline = true,
  allowSelection = true,
  includeWeekend = true,
  timelineSettings: any = {
    timelineUnitSize: 65,
    topTier: { unit: "None" },
    bottomTier: { unit: "Minutes", count: 15, format: "hh:mm a" },
  },
  tooltipSettings = { taskbar: "taskbarTooltipTemplate" },
  durationUnit = "Minute",
  dateFormat = "hh:mm a",
  dayWorkingTime = [{ from: 0, to: 24 }],
  projectStartDate = new Date("03/05/2024 09:30:00 AM"),
  projectEndDate = new Date("03/05/2024 07:00:00 PM"),
  format = (value: any) => moment(value).format("hh:mm a");
</script>

<template>
  <GanttComponent
    :height
    :dataSource="baselineData"
    :taskFields
    :columns
    :renderBaseline
    :allowSelection
    :includeWeekend
    :timelineSettings
    :tooltipSettings
    :durationUnit
    :dateFormat
    :dayWorkingTime
    :projectStartDate
    :projectEndDate
  >
    <template v-slot:taskbarTooltipTemplate="{ data }">
      <div>
        <table>
          <tbody>
            <tr>
              <td colspan="3">{{ data.TaskName }}</td>
            </tr>
            <tr>
              <td>Start Time</td>
              <td>:</td>
              <td>{{ format(data.StartDate) }}</td>
            </tr>
            <tr>
              <td>End Time</td>
              <td>:</td>
              <td>{{ format(data.EndDate) }}</td>
            </tr>
            <tr>
              <td>Planned start time</td>
              <td>:</td>
              <td>{{ format(data.BaselineStartDate) }}</td>
            </tr>
            <tr>
              <td>Planned end time</td>
              <td>:</td>
              <td>{{ format(data.BaselineEndDate) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </GanttComponent>
</template>
