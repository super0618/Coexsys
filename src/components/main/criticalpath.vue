<script setup lang="ts">
import { provide } from "vue";
import { GanttComponent, Toolbar, Edit, Selection, CriticalPath } from "@syncfusion/ej2-vue-gantt";
provide('gantt', [Edit,Toolbar, Selection, CriticalPath])
import {projectNewData} from '@/data/tabledata'

const height = "600px";
const projectStartDate = new Date('03/24/2024');
const projectEndDate = new Date('07/06/2024');
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
};
const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
};
const toolbar = ['Add', 'Edit','Delete','CriticalPath'];
const labelSettings = {
    leftLabel: 'TaskName'
};
const columns = [
    { field: 'TaskID', width: 80 },
    { field: 'TaskName',headerText: 'Name', width: 250 },
    { field: 'StartDate' },
    { field: 'EndDate' },
    { field: 'Duration' },
    { field: 'Predecessor' },
    { field: 'Progress' },
]
const splitterSettings = {
    columnIndex: 4
};
</script>
<template>
    <GanttComponent
            ref="criticalPath"
            id="criticalPath"
            :enableCriticalPath = "true"
            :editSettings
            :dataSource= "projectNewData"
            :taskFields
            :toolbar
            :height
            :labelSettings
            :projectStartDate
            :projectEndDate
            :columns
            :splitterSettings
            ></GanttComponent>
</template>