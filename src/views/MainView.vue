<script setup lang="ts">
import { ref } from "vue";
import { TooltipComponent } from "@syncfusion/ej2-vue-popups";
import { DropDownListComponent, MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { TabComponent, TabItemDirective, TabItemsDirective } from "@syncfusion/ej2-vue-navigations";
import MainTemplate from "@/components/main/main.vue";
import ResourceAllocationTemplate from "@/components/main/resourceallocation.vue";
import ResourceViewTemplate from "@/components/main/resourceview.vue";
import KanbanTemplate from "@/components/main/kanban.vue";
import TaskTimelineTemplate from "@/components/main/tasktimeline.vue";
import BaselineTemplate from "@/components/main/baseline.vue";
import CriticalPathTemplate from "@/components/main/criticalpath.vue";
import PerformanceTemplate from "@/components/main/performance.vue";
import moment from "moment";

const contacts = [
  "Badminton",
  "Basketball",
  "Cricket",
  "Football",
  "Golf",
  "Gymnastics",
  "Hockey",
  "Rugby",
  "Snooker",
  "Tennis",
];
const projList = [
  { value: "proj1", text: "Project1" },
  { value: "proj2", text: "Project2" },
  { value: "proj3", text: "Project3" },
];
const ownerList = [
  { value: "owner1", text: "Owner1" },
  { value: "owner2", text: "Owner2" },
  { value: "owner3", text: "Owner3" },
];
const projectName = ref("proj1");
const projectOwner = ref("owner1");

const startTime = moment().format("DD/MM/YYYY");
const endTime = moment().format("DD/MM/YYYY");
</script>

<template>
  <div class="coexsys-toolbar">
    <div class="project-tools">
      <div class="d-flex items-center gap-2">
        <label style="text-wrap: nowrap; width: 110px">Project Name:</label>
        <DropDownListComponent
          width="200px"
          :dataSource="projList"
          :fields="{ value: 'value', text: 'text' }"
          :value="projectName"
        />
        <TooltipComponent position="TopCenter" content="Create New Project">
          <img src="@/assets/icons/icon-new_project.svg" alt="New Project" width="20" />
        </TooltipComponent>
      </div>
      <div class="d-flex gap-2">
        <TooltipComponent position="TopCenter" content="Stakeholders">
          <img src="@/assets/icons/icon-stakeholders.svg" alt="Stakeholders" width="20" />
        </TooltipComponent>
        <TooltipComponent position="TopCenter" content="Scope/Requirements">
          <img src="@/assets/icons/icon-scope.svg" alt="Scope" width="20" />
        </TooltipComponent>
        <TooltipComponent position="TopCenter" content="Assumptions">
          <img src="@/assets/icons/icon-assumptions.svg" alt="Assumptions" width="20" />
        </TooltipComponent>
        <TooltipComponent position="TopCenter" content="Risks Management">
          <img src="@/assets/icons/icon-risks.svg" alt="Risks" width="20" />
        </TooltipComponent>
        <TooltipComponent position="TopCenter" content="Project Documents">
          <img src="@/assets/icons/icon-documents.svg" alt="Project Documents" width="20" />
        </TooltipComponent>
        <TooltipComponent position="TopCenter" content="Time Tracking">
          <img src="@/assets/icons/icon-time_tracking.svg" alt="Time Tracking" width="20" />
        </TooltipComponent>
        <TooltipComponent position="TopCenter" content="Change Management">
          <img src="@/assets/icons/icon-change.svg" alt="Change" width="20" />
        </TooltipComponent>
        <TooltipComponent position="TopCenter" content="Issues">
          <img src="@/assets/icons/icon-issue.svg" alt="Issues" width="20" />
        </TooltipComponent>
        <TooltipComponent position="TopCenter" content="Change Control Board">
          <img src="@/assets/icons/icon-ccb.svg" alt="Change Control Board" width="20" />
        </TooltipComponent>
      </div>
    </div>

    <div class="coexsys-date-setting">
      <p class="d-flex gap-6">
        <span>
          <span style="font-weight: 600">Schedule Start: </span>
          {{ startTime }}
        </span>
        <span>
          <span style="font-weight: 600">Schedule End: </span>
          {{ endTime }}
        </span>
        <span>
          <span style="font-weight: 600">TimeZone: </span>
          PST
        </span>
      </p>
      <p><span style="font-weight: 600">Timesheet Period Type</span>: Monthly</p>
    </div>

    <div class="d-flex items-center gap-2">
      <label style="text-wrap: nowrap; width: 110px">Project Owner:</label>
      <DropDownListComponent
        width="200px"
        :dataSource="ownerList"
        :fields="{ value: 'value', text: 'text' }"
        :value="projectOwner"
      />
    </div>

    <div class="d-flex items-center gap-4" style="padding: 16px 0 8px">
      <TooltipComponent position="TopCenter" content="Project Summary">
        <img src="@/assets/icons/icon-project_summary.svg" alt="Project Summary" width="24" />
      </TooltipComponent>
      <TooltipComponent position="TopCenter" content="Project Details">
        <img src="@/assets/icons/icon-launch_details.svg" alt="Project Details" width="24" />
      </TooltipComponent>
      <TooltipComponent position="TopCenter" content="Project Contacts">
        <img src="@/assets/icons/icon-project_contacts.svg" alt="Project Contacts" width="24" />
      </TooltipComponent>
      <TooltipComponent position="TopCenter" content="Share Project">
        <img src="@/assets/icons/icon-share_project.svg" alt="Share Project" width="24" />
      </TooltipComponent>
      <TooltipComponent position="TopCenter" content="Collaboration">
        <img src="@/assets/icons/icon-team_collaboration.svg" alt="Collaboration" width="24" />
      </TooltipComponent>
      <TooltipComponent position="TopCenter" content="Manage Project Access">
        <img src="@/assets/icons/icon-manage_access.svg" alt="Manage Project Access" width="24" />
      </TooltipComponent>
    </div>
  </div>

  <div class="content-wrapper">
    <div class="overflow-auto">
      <TabComponent>
        <TabItemsDirective>
          <TabItemDirective :header="{ text: 'Main' }" :content="'MainTemplate'"></TabItemDirective>
          <template v-slot:MainTemplate>
            <MainTemplate />
          </template>
          <TabItemDirective :header="{ text: 'Resource Allocation' }" :content="'ResourceAllocationTemplate'">
          </TabItemDirective>
          <template v-slot:ResourceAllocationTemplate>
            <ResourceAllocationTemplate />
          </template>
          <TabItemDirective :header="{ text: 'Resource View' }" :content="'ResourceViewTemplate'"> </TabItemDirective>
          <template v-slot:ResourceViewTemplate>
            <ResourceViewTemplate />
          </template>
          <TabItemDirective :header="{ text: 'Kanban' }" :content="'KanbanTemplate'"> </TabItemDirective>
          <template v-slot:KanbanTemplate>
            <KanbanTemplate />
          </template>
          <TabItemDirective :header="{ text: 'TaskTimeline' }" :content="'TaskTimelineTemplate'"> </TabItemDirective>
          <template v-slot:TaskTimelineTemplate>
            <TaskTimelineTemplate />
          </template>
          <TabItemDirective :header="{ text: 'Baseline' }" :content="'BaselineTemplate'"></TabItemDirective>
          <template v-slot:BaselineTemplate>
            <BaselineTemplate />
          </template>
          <TabItemDirective :header="{ text: 'Critical Path' }" :content="'CriticalPathTemplate'"> </TabItemDirective>
          <template v-slot:CriticalPathTemplate>
            <CriticalPathTemplate />
          </template>
          <TabItemDirective :header="{ text: 'Performance' }" :content="'PerformanceTemplate'"></TabItemDirective>
          <template v-slot:PerformanceTemplate>
            <PerformanceTemplate />
          </template>
        </TabItemsDirective>
      </TabComponent>
    </div>
    <div>
      <div class="d-flex justify-end" style="padding: 3px 0">
        <ButtonComponent cssClass="e-small" :isPrimary="true">Close Project</ButtonComponent>
      </div>
      <div class="chat-form">
        <div class="input-group">
          <p class="form-label">Send To:</p>
          <MultiSelectComponent :dataSource="contacts" mode="Box" placeholder=""></MultiSelectComponent>
        </div>
        <div class="flex-auto input-group">
          <div class="chat-message"></div>
        </div>
        <div class="chat-input-form">
          <input class="e-input" type="text" placeholder="" />
          <ButtonComponent cssClass="e-small" :isPrimary="true">Send</ButtonComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.coexsys-toolbar {
  padding: 12px 24px;
}
.project-tools {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  max-width: 700px;
  row-gap: 16px;
  margin-bottom: 12px;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: start;
  }
}
.coexsys-date-setting {
  margin-bottom: 12px;
  font-size: 14px;
  padding-left: 116px;
}
.content-wrapper {
  width: 100%;
  overflow: hidden;
  padding: 0 24px;
  display: grid;
  grid-template-columns: auto 320px;
}
p {
  margin: 0;
}
.chat-form {
  background-color: #eee;
  height: 700px;
  display: flex;
  flex-direction: column;
  padding: 16px;
}
p.form-label {
  font-size: 14px;
  margin: 0 0 4px;
}
.chat-message {
  border: 1px solid #ced4da;
  border-radius: 4px;
  height: 100%;
  background-color: #fff;
}
.chat-input-form {
  display: grid;
  grid-template-columns: auto 60px;
}
.send-btn {
  display: grid;
  place-items: center;
  color: #333;
  cursor: pointer;
}
</style>
<style>
.tooltip-default #property {
  padding-top: 200px;
}
</style>
