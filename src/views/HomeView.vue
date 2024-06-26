<script setup lang="ts">
import { ref, provide } from "vue";
import {
    IconFilePlus,
    IconUsersGroup,
    IconBorderLeft,
    IconTrendingUp,
    IconAsterisk,
    IconFolder,
    IconCheckbox,
    IconAlarm,
    IconHeartbeat,
    IconSettings,
    IconList,
    IconDashboard,
    IconId,
    IconShare,
    IconKey
} from "@tabler/icons-vue";
import { TabComponent, TabItemDirective, TabItemsDirective } from "@syncfusion/ej2-vue-navigations";
import { GanttComponent, Selection, VirtualScroll } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from '@/data/project.ts'
import moment from "moment";

const gantt = provide('gantt', [Selection, VirtualScroll])

const projectName = ref("proj1")
const projectOwner = ref("owner1")

const startTime = moment().format("DD/MM/YYYY")
const endTime = moment().format("DD/MM/YYYY")

const data = projectNewData;
const height = '600px';
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
const labelSettings = {
    leftLabel: 'TaskName'
};
const projectStartDate = new Date('03/24/2024');
const projectEndDate = new Date('07/06/2024');
</script>

<template>
    <div class="coexsys-toolbar">
        <div class="d-flex justify-between mb-2">
            <div class="d-flex items-center gap-2">
                <label style="text-wrap: nowrap;">Project Name:</label>
                <select v-model="projectName">
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
            <label style="text-wrap: nowrap;">Project Owner:</label>
            <select v-model="projectOwner">
                <option value="owner1">Owner 1</option>
                <option value="owner2">Owner 2</option>
                <option value="owner3">Owner 3</option>
            </select>
        </div>
    </div>

    <div class="d-flex items-center gap-4" style="padding: 16px 24px 8px;">
        <IconList size="24" />
        <IconDashboard size="24" />
        <IconId size="24" />
        <IconShare size="24" />
        <IconUsersGroup size="24" />
        <IconKey size="24" />
    </div>

    <div style="padding: 0 24px;">
        <TabComponent>
            <TabItemsDirective>
                <TabItemDirective :header="{ text: 'Main' }" :content="'MainTemplate'"></TabItemDirective>
                <template v-slot:MainTemplate>
                    <GanttComponent ref='gantt' id="GanttContainer" :dataSource="data" :height="height"
                        :highlightWeekends='true' :taskFields="taskFields" :labelSettings="labelSettings"
                        :treeColumnIndex="1" :projectStartDate="projectStartDate" :projectEndDate="projectEndDate">
                    </GanttComponent>
                </template>
                <TabItemDirective :header="{ text: 'Performance' }" :content="'Performance'"></TabItemDirective>
            </TabItemsDirective>
        </TabComponent>
    </div>
</template>

<style scoped>
.coexsys-toolbar {
    margin-top: 50px;
    padding: 12px 24px;
}

input,
select {
    padding: 4px 8px;
    min-width: 200px;
}

p {
    margin: 0;
}
</style>
