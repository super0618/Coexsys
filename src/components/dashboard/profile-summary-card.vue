<script setup lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { orderDetails } from "@/data/tabledata";

const data = orderDetails.slice(0, 6),
  editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true },
  orderidrules = { required: true, number: true },
  customeridrules = { required: true, minLength: 5 },
  freightrules = { required: true, min: 0 };

const data1 = [{ value: 1, text: "Project" }];
const data2 = [{ value: 1, text: "Project Manager" }];
const data3 = [{ value: 1, text: "Status" }];
</script>

<template>
  <div class="coexsys-card">
    <div class="card-header">
      <p class="card-title">Profile Summary</p>
      <div class="d-flex gap-2">
        <div><DropDownListComponent :dataSource="data1" :fields="{ value: 'value', text: 'text' }" width="100" :value="1" /></div>
        <div><DropDownListComponent :dataSource="data2" :fields="{ value: 'value', text: 'text' }" width="150" :value="1" /></div>
        <div><DropDownListComponent :dataSource="data3" :fields="{ value: 'value', text: 'text' }" width="100" :value="1" /></div>
      </div>
    </div>
    <div class="card-body">
      <GridComponent :dataSource="data" :editSettings>
        <ColumnsDirective>
          <ColumnDirective field="OrderID" headerText="Order ID" width="70" textAlign="Right" :isPrimaryKey="true" :validationRules="orderidrules"></ColumnDirective>
          <ColumnDirective field="CustomerName" headerText="Customer Name" width="150" :validationRules="customeridrules"></ColumnDirective>
          <ColumnDirective field="OrderDate" headerText="Order Date" width="130" format="yMd" textAlign="Right" editType="datepickeredit"></ColumnDirective>
          <ColumnDirective field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right" editType="numericedit" :validationRules="freightrules"></ColumnDirective>
          <ColumnDirective field="ShippedDate" headerText="Shipped Date" width="130" format="yMd" textAlign="Right" editType="datepickeredit"></ColumnDirective>
          <ColumnDirective field="ShipCountry" headerText="Ship Country" width="150" editType="dropdownedit"></ColumnDirective>
        </ColumnsDirective>
      </GridComponent>
    </div>
  </div>
</template>

<style scoped>
.coexsys-card {
  background-color: #fff;
  border-radius: 6px;
  padding: 24px 32px;
  box-shadow: 3px 3px 5px #eee;
  overflow: auto;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.card-title {
  font-weight: 600;
  font-size: 18px;
  text-wrap: nowrap;
  margin: 0;
  padding: 0;
}
</style>
<style>
.e-control.e-grid.e-lib.e-droppable {
  border: none;
}
.e-content .e-table tr.e-row {
  height: 48px;
}
.e-headercontent .e-columnheader {
  height: 48px;
}
.e-headercontent .e-columnheader .e-headertext {
  font-weight: 500;
}
</style>
