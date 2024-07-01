<script setup lang="ts">
import { provide, ref } from "vue";
import { GanttComponent, Selection, Edit, DayMarkers, Toolbar, Resize } from "@syncfusion/ej2-vue-gantt";
import { resourceData, resourceCollection } from "@/data/tabledata";

provide('gantt', [Selection, Edit, DayMarkers, Toolbar, Resize])

const
    height = "600px",
    viewType = 'ResourceView',
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        work: 'work',
        child: 'subtasks'
    },
    allowSelection = true,
    allowResizing = true,
    taskType = "FixedWork",
    resourceFields = {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'resourceUnit',
        group: 'resourceGroup'
    },
    toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', { text: 'Show/Hide Overallocation', tooltipText: 'Show/Hide Overallocation', id: 'showhidebar' }],
    treeColumnIndex = 1,
    highlightWeekends = true,
    columns = [
        { field: 'TaskID', visible: false },
        { field: 'TaskName', headerText: 'Name', width: 250 },
        { field: 'work', headerText: 'Work' },
        { field: 'Progress' },
        { field: 'resourceGroup', headerText: 'Group' },
        { field: 'StartDate' },
        { field: 'Duration' },
    ],
    editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    labelSettings = {
        rightLabel: 'resources',
        taskLabel: 'Progress'
    },
    projectStartDate = new Date('03/28/2024'),
    projectEndDate = new Date('05/18/2024'),
    splitterSettings = { columnIndex: 3 },

    showOverAllocation = ref(true),
    toolbarClick = (args: any) => {
        if (args.item.id === 'showhidebar') {
            showOverAllocation.value = !showOverAllocation.value
        }
    }

</script>

<template>
    <GanttComponent :height :dataSource="resourceData" :viewType :taskFields :allowSelection :allowResizing
        :resourceFields :taskType :editSettings :toolbar :treeColumnIndex :resources="resourceCollection"
        :highlightWeekends :columns :labelSettings :projectStartDate :projectEndDate :splitterSettings
        :showOverAllocation :toolbarClick>
    </GanttComponent>
</template>