<script setup lang="ts">
import { TabComponent, TabItemDirective, TabItemsDirective } from "@syncfusion/ej2-vue-navigations";
import moment from "moment";

const notifications = [
  { content: "@JohnSmith Approved your Timesheet", date: moment().format("M/d/yyyy hh:mm PT") },
  { content: "@Bob has updated the task you are assigned to", date: moment().format("M/d/yyyy hh:mm PT") },
];

const mentions = [
  { content: "@John Smith Mentioned you", date: moment().format("M/d/yyyy hh:mm PT") },
  { content: "@John Smith Mentioned you", date: moment().format("M/d/yyyy hh:mm PT") },
];
</script>

<template>
  <div class="notification-container">
    <h1 class="text-center">Notifications</h1>
    <TabComponent>
      <TabItemsDirective>
        <TabItemDirective :header="{ text: 'Notifications' }" :content="'NotificationsTemplate'"></TabItemDirective>
        <template v-slot:NotificationsTemplate>
          <div class="content-wrapper">
            <table>
              <tbody>
                <tr>
                  <td class="text-center" width="3000px">Events</td>
                  <td class="text-center" width="100px">Timestamp</td>
                </tr>
                <tr v-for="notification in notifications">
                  <td>{{ notification.content }}</td>
                  <td class="text-center text-xs">{{ notification.date }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
        <TabItemDirective :header="{ text: 'Mentions' }" :content="'MentionsTemplate'"> </TabItemDirective>
        <template v-slot:MentionsTemplate>
          <div class="content-wrapper">
            <table>
              <tbody>
                <tr>
                  <td class="text-center" width="3000px">Mentions</td>
                  <td class="text-center" width="100px">Timestamp</td>
                </tr>
                <tr v-for="mention in mentions">
                  <td>{{ mention.content }}</td>
                  <td class="text-center text-xs">{{ mention.date }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </TabItemsDirective>
    </TabComponent>
  </div>
</template>

<style scoped>
.notification-container {
  margin: 0 auto;
}
.content-wrapper {
  padding: 6px 12px;
}
table,
th,
td {
  border: 1px solid #999;
  border-collapse: collapse;
  padding: 4px 8px;
}
tr:hover {
  background-color: #eee;
  cursor: pointer;
}
</style>
