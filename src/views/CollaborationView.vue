<script setup lang="ts">
import { DropDownListComponent, MultiSelectComponent, ListBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

const dropList = ["Tasks", "Scope/Requirements", "Assumptions", "Change Requests", "TimeSheets", "Risks", "Documents"];
const list1 = [
  "Task1",
  "List Item1",
  "List Item2",
  "List Item3",
  "List Item4",
  "List Item5",
  "List Item6",
  "List Item7",
  "List Item8",
];
const list2 = ["John Smith", "John Smith, Bob Smith", "John Smith, Paul", "Paul", "Paul John"];
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
</script>

<template>
  <div class="collaboration-container">
    <h2 class="text-center">Team Collaboration</h2>
    <div class="content-wrapper">
      <div class="left-content">
        <DropDownListComponent :dataSource="dropList" popupHeight="300px" width="100%" placeholder="" />
        <div class="listbox-container">
          <div class="dropdown1">
            <ListBoxComponent :dataSource="list1" height="100%" />
          </div>
          <div class="dropdown2">
            <ListBoxComponent :dataSource="list2" height="100%" />
          </div>
        </div>
      </div>
      <div class="right-content">
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
.collaboration-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content-wrapper {
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 900px) {
    flex-direction: column;
  }
}
.left-content {
  display: flex;
  flex-direction: column;
  flex: 0 0 430px;
}
.listbox-container {
  display: flex;
  flex: 1 1 auto;
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.dropdown1 {
  flex: 0 0 230px;
}
.dropdown2 {
  flex: 0 0 200px;
}
p {
  margin: 0;
}
.right-content {
  flex: 1 1 auto;
  background-color: #eee;
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
