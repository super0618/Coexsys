<script setup lang="ts">
import { DropDownListComponent, MultiSelectComponent, ListBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

const dropList = ["Tasks", "Scope/Requirements", "Assumptions", "Change Requests", "TimeSheets", "Risks", "Documents"];
const list1 = ["Task1", "List Item1", "List Item2", "List Item3", "List Item4", "List Item5", "List Item6", "List Item7", "List Item8"];
const list2 = ["John Smith", "John Smith, Bob Smith", "John Smith, Paul", "Paul", "Paul John"];
const contacts = ["Badminton", "Basketball", "Cricket", "Football", "Golf", "Gymnastics", "Hockey", "Rugby", "Snooker", "Tennis"];
</script>

<template>
  <div class="content-wrapper">
    <div class="task-selector">
      <DropDownListComponent :dataSource="dropList" popupHeight="300px" width="300px" placeholder=""></DropDownListComponent>
      <div class="listbox-container">
        <ListBoxComponent :dataSource="list1"></ListBoxComponent>
        <ListBoxComponent :dataSource="list2"></ListBoxComponent>
      </div>
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
</template>

<style scoped>
.content-wrapper {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.task-selector {
  display: flex;
  flex-direction: column;
}
.listbox-container {
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

p {
  margin: 0;
}
.chat-form {
  background-color: #eee;
  height: 600px;
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
