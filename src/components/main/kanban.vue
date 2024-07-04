<script setup lang="ts">
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-kanban";
import { kanbanData } from "@/data/tabledata";

const height = "700px",
  cardSettings = {
    contentField: "Summary",
    headerField: "Id",
  },
  swimlaneSettings = {
    keyField: "Assignee",
    template: "swimLaneTemplate",
  },
  image = (data: any) => `https://ej2.syncfusion.com/vue/demos/source/kanban/images/${data.keyField}.png`;
</script>

<template>
  <KanbanComponent :height keyField="Status" :dataSource="kanbanData" :cardSettings :swimlaneSettings>
    <ColumnsDirective>
      <ColumnDirective headerText="To Do" keyField="Open"></ColumnDirective>
      <ColumnDirective headerText="In Progress" keyField="InProgress"></ColumnDirective>
      <ColumnDirective headerText="Testing" keyField="Testing"></ColumnDirective>
      <ColumnDirective headerText="Done" keyField="Close"></ColumnDirective>
    </ColumnsDirective>
    <template v-slot:swimLaneTemplate="{ data }">
      <div class="e-swimlane-template-table swimlane-template">
        <div class="e-swimlane-row-text">
          <img :src="image(data)" :alt="data.keyField" />
          <span>{{ data.textField }}</span>
        </div>
      </div>
    </template>
  </KanbanComponent>
</template>

<style>
.e-swimlane-header {
  align-items: center;
}

.e-swimlane-row-text {
  display: flex;
  align-items: center;
  gap: 4px;
}

.e-swimlane-row-text img {
  width: 30px;
  height: 30px;
}
</style>
