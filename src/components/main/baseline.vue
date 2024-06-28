<script setup lang="ts">
import { provide } from "vue";
import { GanttComponent, Selection } from "@syncfusion/ej2-vue-gantt";
import {baselineData} from '@/data/tabledata'
import moment from "moment";

provide('gantt', [Selection])

const format = (value:any) => {
    return moment(value).format('hh:mm a')
}

const
    height = "600px",
    taskFields = {
      id: 'TaskId',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      baselineStartDate: 'BaselineStartDate',
      baselineEndDate: 'BaselineEndDate'
    },
    dateFormat = "hh:mm a",
    tooltipSettings = {
      taskbar: "taskbarTooltipTemplate"
    },
    dayWorkingTime = [{ from: 0, to: 24 }],
    durationUnit = 'Minute',
    columns : any = [
      { field: 'TaskName', headerText: 'Service Name', width: '250', clipMode: 'EllipsisWithTooltip' },
      { field: 'BaselineStartDate', headerText: 'Planned start time' },
      { field: 'BaselineEndDate', headerText: 'Planned end time' },
      { field: 'StartDate', headerText: 'Start time' },
      { field: 'EndDate', headerText: 'End time' },
    ],
    timelineSettings : any = {
      timelineUnitSize: 65,
      topTier: {
          unit: 'None',
      },
      bottomTier: {
          unit: 'Minutes',
          count: 15,
          format: 'hh:mm a'
      },
    },
    projectStartDate = new Date('03/05/2024 09:30:00 AM'),
    projectEndDate = new Date('03/05/2024 07:00:00 PM');

</script>

<template>
    <GanttComponent ref='gantt' id="GanttContainer" :dataSource="baselineData" :renderBaseline="true" :taskFields :columns :allowSelection="true" :includeWeekend="true" :timelineSettings
        :tooltipSettings :durationUnit :dateFormat :height :dayWorkingTime :projectStartDate :projectEndDate>
  <template v-slot:taskbarTooltipTemplate="{data}">
    <div>
      <table>
        <tbody>
          <tr>
            <td colspan="3">{{data.TaskName}}</td>
          </tr>
          <tr>
            <td> Start Time </td>
            <td>:</td>
            <td>{{format(data.StartDate)}}</td>
          </tr>
          <tr>
            <td> End Time</td>
            <td>:</td>
            <td>{{format(data.EndDate)}}</td>
          </tr>
          <tr>
            <td> Planned start time</td>
            <td>:</td>
            <td>{{format(data.BaselineStartDate)}}</td>
          </tr>
          <tr>
            <td> Planned end time</td>
            <td>:</td>
            <td>{{format(data.BaselineEndDate)}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
</GanttComponent>
</template>