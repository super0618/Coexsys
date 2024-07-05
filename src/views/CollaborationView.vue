<script setup lang="ts">
import { provide } from "vue";
import { DropDownListComponent, MultiSelectComponent, ListBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import {
  RichTextEditorComponent,
  Toolbar,
  Link,
  Image,
  QuickToolbar,
  HtmlEditor,
  Table,
  Video,
  Audio,
  PasteCleanup,
} from "@syncfusion/ej2-vue-richtexteditor";

provide("richtexteditor", [Toolbar, Link, Image, QuickToolbar, HtmlEditor, Table, Video, Audio, PasteCleanup]);

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
const list3 = ["Document", "Document1", "Document2", "Document3", "Document4"];
</script>

<template>
  <div class="collaboration-container">
    <div class="collaboration-header">
      <p><span style="font-weight: 600">Project: </span>Digital Marketing Project</p>
    </div>
    <div style="padding: 0 24px 16px">
      <DropDownListComponent width="300px" :dataSource="dropList" popupHeight="300px" placeholder="" />
    </div>
    <div class="content-wrapper">
      <div class="left-content">
        <div class="listbox-container">
          <div class="dropdown1">
            <ListBoxComponent :dataSource="list1" height="100%" />
          </div>
          <div class="dropdown2">
            <ListBoxComponent :dataSource="list2" height="100%" />
          </div>
        </div>
      </div>
      <div class="main-content">
        <div class="input-group">
          <p class="form-label">Send To:</p>
          <MultiSelectComponent :dataSource="contacts" mode="Box" placeholder=""></MultiSelectComponent>
        </div>
        <div class="flex-auto input-group">
          <div class="chat-message"></div>
        </div>
        <div class="chat-input-form">
          <RichTextEditorComponent height="200px" width="100%" style="overflow: hidden" />
          <div class="send-btn">
            <ButtonComponent :isPrimary="true">Send</ButtonComponent>
          </div>
        </div>
      </div>
      <div class="right-content">
        <ListBoxComponent :dataSource="list3" height="100%" />
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
.collaboration-header {
  padding: 16px 24px;
}
.content-wrapper {
  flex: 1 1 auto;
  display: flex;
  width: 100%;
}
.left-content {
  display: flex;
  flex-direction: column;
  flex: 0 0 400px;
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
  flex: 0 0 200px;
}
.dropdown2 {
  flex: 0 0 200px;
}
p {
  margin: 0;
}
.main-content {
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
.right-content {
  flex: 0 0 200px;
}
.chat-input-form {
  position: relative;
}
.send-btn {
  z-index: 5;
  position: absolute;
  right: 20px;
  bottom: 12px;
}
</style>
