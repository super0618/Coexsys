<script setup lang="ts">
import { provide } from "vue";
import { GanttComponent, Toolbar, Edit, Selection, CriticalPath } from "@syncfusion/ej2-vue-gantt";
provide('gantt', [Edit,Toolbar, Selection, CriticalPath])
import {projectNewData} from '@/data/tabledata'

const 
    height = "600px",
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    toolbar = ['Add', 'Edit','Delete','CriticalPath'],
    splitterSettings = { columnIndex: 4 },
    columns = [
        { field: 'TaskID', width: 80 },
        { field: 'TaskName',headerText: 'Name', width: 250 },
        { field: 'StartDate' },
        { field: 'EndDate' },
        { field: 'Duration' },
        { field: 'Predecessor' },
        { field: 'Progress' },
    ],
    editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    labelSettings = { leftLabel: 'TaskName' },
    projectStartDate = new Date('03/24/2024'),
    projectEndDate = new Date('07/06/2024')

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