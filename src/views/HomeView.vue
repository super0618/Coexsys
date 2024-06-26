<script setup lang="ts">
import { ref, provide } from "vue";
import { IconFilePlus, IconUsersGroup, IconBorderLeft, IconTrendingUp, IconAsterisk, IconFolder, IconCheckbox, IconAlarm, IconHeartbeat, IconSettings } from "@tabler/icons-vue";
import { TabComponent, TabItemDirective, TabItemsDirective } from "@syncfusion/ej2-vue-navigations";
import { GanttComponent, Selection, VirtualScroll } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from '@/data/project'
import moment from "moment";

provide('gant', [Selection, VirtualScroll])

const projectName = ref("proj1")
const projectOwner = ref("owner1")

const startTime = moment().format("DD/MM/YYYY")
const endTime = moment().format("DD/MM/YYYY")

const data = projectNewData
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'parentID'
}
const columns = [
    { field: 'TaskID' },
    { field: 'TaskName' },
    { field: 'StartDate' },
    { field: 'Duration' },
    { field: 'Progress' }
]
const height = '450px';
const labelSettings = {
    taskLabel: 'Progress'
}
const splitterSettings = {
    columnIndex: 2
}
const projectStartDate = new Date('04/01/2024')
const projectEndDate = new Date('12/31/2030')
</script>

<template>
    <div class="coexsys-toolbar">
        <div class="d-flex justify-between mb-2">
            <div class="d-flex items-center gap-2">
                <label for="project-name" style="text-wrap: nowrap;">Project Name:</label>
                <select id="project-name" v-model="projectName">
                    <option value="proj1">Project 1</option>
                    <option value="proj2">Project 2</option>
                    <option value="proj3">Project 3</option>
                </select>
                <IconFilePlus size="20" />
            </div>
            <div class="d-flex gap-2">
                <IconUsersGroup size="20" />
                <IconBorderLeft size="20" />
                <IconTrendingUp size="20" />
                <IconAsterisk size="20" />
                <IconFolder size="20" />
                <IconCheckbox size="20" />
                <IconAlarm size="20" />
                <IconHeartbeat size="20" />
                <IconSettings size="20" />
            </div>
        </div>

        <div class="mb-2" style="padding-left: 100px;">
            <p>{{ `Schedule Start: ${startTime} Schedule End: ${endTime} TimeZone: PST` }}</p>
            <p>Timesheet Perioud Type: Monthly</p>
        </div>

        <div class="d-flex items-center gap-2">
            <label for="project-owner" style="text-wrap: nowrap;">Project Owner:</label>
            <select id="project-owner" v-model="projectOwner">
                <option value="owner1">Owner 1</option>
                <option value="owner2">Owner 2</option>
                <option value="owner3">Owner 3</option>
            </select>
        </div>
    </div>

    <div style="padding: 0 24px;">
        <TabComponent>
            <TabItemsDirective>
                <TabItemDirective :header="{ text: 'Main' }" :content="'MainTemplate'"></TabItemDirective>
                <template v-slot:MainTemplate>
                    <GanttComponent ref='gantt' id="virtualscroll" :dataSource="data" :taskFields="taskFields"
                        :allowSelection="true" :enableVirtualization="true" :labelSettings="labelSettings"
                        :height="height" :treeColumnIndex="1" :highlightWeekends="true" :columns="columns"
                        :enableTimelineVirtualization="true" :projectStartDate="projectStartDate"
                        :projectEndDate="projectEndDate" :splitterSettings="splitterSettings">
                    </GanttComponent>
                </template>
                <TabItemDirective :header="{ text: 'Performance' }" :content="'Performance'"></TabItemDirective>
            </TabItemsDirective>
        </TabComponent>
    </div>
</template>

<style scoped>
.coexsys-toolbar {
    padding: 24px;
}

input,
select {
    padding: 4px 8px;
    min-width: 200px;
}

p {
    margin: 0;
}

.e-content .e-item {
    font-size: 12px;
    padding: 10px;
    text-align: justify;
}
</style>

<style>
@import "@syncfusion/ej2-base/styles/material.css";
@import "@syncfusion/ej2-vue-navigations/styles/material.css";
@import "@syncfusion/ej2-vue-gantt/styles/material.css";

.e-content .e-item {
    padding: 16px;
}
</style>
