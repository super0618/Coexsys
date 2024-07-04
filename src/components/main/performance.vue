<script setup lang="ts">
import { provide, createApp } from "vue";
import { addClass, isNullOrUndefined } from "@syncfusion/ej2-base";
import {
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  ColumnSeries,
  Category,
  DataLabel,
  Tooltip,
  Legend,
  Highlight,
} from "@syncfusion/ej2-vue-charts";
import {
  TreeGridComponent,
  ColumnDirective,
  ColumnsDirective,
  Filter,
  Sort,
  Reorder,
} from "@syncfusion/ej2-vue-treegrid";
import { Column, getObject } from "@syncfusion/ej2-grids";
import type { QueryCellInfoEventArgs } from "@syncfusion/ej2-grids";
import type { ITreeData } from "@syncfusion/ej2-vue-treegrid";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
import type { AxisModel, MarkerSettingsModel } from "@syncfusion/ej2-vue-charts";
import type { FilterSettingsModel } from "@syncfusion/ej2-vue-grids";
import { countries } from "@/data/tabledata";

provide("chart", [ColumnSeries, Legend, DataLabel, Category, Tooltip, Highlight]);
provide("treegrid", [Filter, Sort, Reorder]);

const height = "700px";
const data = [
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
const seriesData = [
    { Country: "GBR", GoldMedal: 27, SilverMedal: 23, BronzeMedal: 17, MappingName: "Great Britain" },
    { Country: "CHN", GoldMedal: 26, SilverMedal: 18, BronzeMedal: 26, MappingName: "China" },
    { Country: "AUS", GoldMedal: 8, SilverMedal: 11, BronzeMedal: 10, MappingName: "Australia" },
    { Country: "RUS", GoldMedal: 19, SilverMedal: 17, BronzeMedal: 20, MappingName: "Russia" },
    { Country: "GER", GoldMedal: 17, SilverMedal: 10, BronzeMedal: 15, MappingName: "Germany" },
    { Country: "UA", GoldMedal: 2, SilverMedal: 5, BronzeMedal: 24, MappingName: "Ukraine" },
    { Country: "ES", GoldMedal: 7, SilverMedal: 4, BronzeMedal: 6, MappingName: "Spain" },
    { Country: "UZB", GoldMedal: 4, SilverMedal: 2, BronzeMedal: 7, MappingName: "Uzbekistan" },
    { Country: "JPN", GoldMedal: 12, SilverMedal: 8, BronzeMedal: 21, MappingName: "Japan" },
    { Country: "NL", GoldMedal: 46, SilverMedal: 37, BronzeMedal: 38, MappingName: "NetherLand" },
    { Country: "USA", GoldMedal: 8, SilverMedal: 7, BronzeMedal: 4, MappingName: "United States" },
  ],
  primaryXAxis: AxisModel = {
    valueType: "Category",
    interval: 1,
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    labelIntersectAction: "None",
    labelRotation: 0,
  },
  chartArea = { border: { width: 0 } },
  primaryYAxis = {
    title: "Medal Count",
    maximum: 50,
    interval: 10,
    majorTickLines: { width: 0 },
    lineStyle: { width: 0 },
  },
  marker: MarkerSettingsModel = {
    dataLabel: { visible: false, position: "Top", font: { fontWeight: "600", color: "#ffffff" } },
  },
  legendSettings = { enableHighlight: true },
  tooltip = {
    enable: true,
    header: "<b>${point.tooltip}</b>",
    shared: true,
  },
  title = "Olympic Medal Counts - RIO";

const filterSettings: FilterSettingsModel = { type: "Excel" },
  unemploymentTemplate = function () {
    return {
      template: createApp({}).component("unemploymentTemplate", {
        template: `<div id="myProgress" class="pbar">
                                <div id="myBar" class="bar">
                            <div id="treegridlabel" class="barlabel"></div>
                              </div>
                    </div>`,
        data: function () {
          return {
            data: {},
          };
        },
      }),
    };
  },
  flagtemplate = function () {
    return {
      template: createApp({}).component("flagtemplate", {
        template: `<div class="image" style="display: inline"><img class="e-image" :alt="data.name" aria-label="Flag template"> &nbsp {{data.name }}</div>`,
        data: function () {
          return { data: {} };
        },
      }),
    };
  },
  ratingTemplate = function () {
    return {
      template: createApp({}).component("ratingTemplate", {
        template:
          '<div id="status" class="rating" aria-label="Rating template">\
                    <span v-for="i in item" :class="{checked: i <= data.rating, star: true}"></span>\
            </div>',
        data: function () {
          return { data: {}, item: [1, 2, 3, 4, 5] };
        },
      }),
    };
  },
  locationTemplate = function () {
    return {
      template: createApp({}).component("locationTemplate", {
        template:
          '<div id="coordinates"><img src="source/tree-grid/images/Map.png" class="e-image" :alt="data.coordinates" aria-label="Location template"/> &nbsp <a target="_blank" href="https://www.google.com/maps/place/${data.coordinates}">{{data.coordinates}}</a></div>',
        data: function () {
          return { data: {} };
        },
      }),
    };
  },
  gdpTemplate = function () {
    return {
      template: createApp({}).component("gdpTemplate", {
        template: `<div class="statustemp" aria-label="gdp template">
                <span class="statustxt">{{data.gdp}} %</span>
            </div>`,
        data: function () {
          return {
            data: {},
          };
        },
      }),
    };
  },
  timezoneTemplate = function () {
    return {
      template: createApp({}).component("timezoneTemplate", {
        template: `<div><img src="https://ej2.syncfusion.com/vue/demos/source/tree-grid/images/__Normal.png" alt="TimeZone template" class="e-img" aria-label="Timezone template"> &nbsp {{data.timezone}}</div>`,
        data: function () {
          return {
            data: {},
          };
        },
      }),
    };
  },
  areaTemplate = function () {
    return {
      template: createApp({}).component("areaTemplate", {
        template: `<span>{{data.area}} km <sup>2</sup>
                </span>`,
        data: function () {
          return {
            data: {},
          };
        },
      }),
    };
  },
  queryCellInfo = function (args: QueryCellInfoEventArgs) {
    if ((args.column as Column).field === "gdp") {
      let data: number = getObject("gdp", args.data);
      if (data < 2) {
        let status = (args.cell as Element).querySelector(".statustxt");
        (status as Element).classList.add("e-lowgdp");
        let statustemp = (args.cell as Element).querySelector(".statustemp");
        (statustemp as Element).classList.add("e-lowgdp");
      }
    }

    if ((args.column as Column).field === "unemployment") {
      let employmentData: number = getObject("unemployment", args.data);
      let barElement;
      let barlabelElement;
      if (employmentData <= 4) {
        barElement = (args.cell as Element).querySelector(".bar");
        addClass([barElement as Element], ["progressdisable"]);
      }
      barElement = (args.cell as Element).querySelector(".bar");
      (barElement as HTMLElement).style.width = employmentData * 10 + "%";
      barlabelElement = (args.cell as Element).querySelector(".barlabel");
      (barlabelElement as Element).textContent = employmentData + "%";
    }

    if ((args.column as Column).field === "name") {
      let parentItem: ITreeData = getObject("parentItem", args.data);
      let imageElement = (args.cell as Element).querySelector(".e-image") as HTMLImageElement;
      if (isNullOrUndefined(parentItem)) {
        let name: string = getObject("name", args.data);
        imageElement.src = "https://ej2.syncfusion.com/vue/demos/source/tree-grid/images/" + name + ".png";
        imageElement.alt = name;
      } else {
        let name: string = getObject("name", parentItem);
        imageElement.src = "https://ej2.syncfusion.com/vue/demos/source/tree-grid/images/" + name + ".png";
        imageElement.alt = name;
      }
    }

    if ((args.column as Column).field === "rating") {
      let rating: number = getObject("rating", args.data);
      let ratingElement;
      if (isNullOrUndefined(rating)) {
        ratingElement = (args.cell as Element).querySelector(".rating");
        addClass([ratingElement as Element], ["e-hide"]);
      }
    }

    if ((args.column as Column).field === "timezone") {
      let imageElement = (args.cell as Element).querySelector(".e-img") as HTMLImageElement;
      imageElement.style.filter = "brightness(150%)";
      imageElement.alt = "Timezone";
      let timeZone: string = getObject("timezone", args.data);
      if (timeZone.indexOf("-") !== -1) {
        imageElement.className = "negativeTimeZone";
      }
    }
  };
</script>

<template>
  <div class="performance-container" style="height: 700px; overflow: auto">
    <div class="d-flex justify-between items-start mb-4">
      <div style="width: 400px; padding-left: 30px">
        <MultiSelectComponent :dataSource="data" mode="Box" placeholder=""></MultiSelectComponent>
      </div>
      <ButtonComponent :isPrimary="true" style="width: 64px">PDF</ButtonComponent>
    </div>

    <ChartComponent
      width="90%"
      height="400px"
      theme="Material"
      align="center"
      :title
      :primaryXAxis
      :primaryYAxis
      :chartArea
      :tooltip
      :legendSettings
    >
      <SeriesCollectionDirective>
        <SeriesDirective
          :dataSource="seriesData"
          type="Column"
          xName="Country"
          yName="GoldMedal"
          name="Gold"
          :width="2"
          :marker
          tooltipMappingName="MappingName"
          :columnSpacing="0.1"
        ></SeriesDirective>
        <SeriesDirective
          :dataSource="seriesData"
          type="Column"
          xName="Country"
          yName="SilverMedal"
          name="Silver"
          :width="2"
          :marker
          tooltipMappingName="MappingName"
          :columnSpacing="0.1"
        ></SeriesDirective>
        <SeriesDirective
          :dataSource="seriesData"
          type="Column"
          xName="Country"
          yName="BronzeMedal"
          name="Bronze"
          :width="2"
          :marker
          tooltipMappingName="MappingName"
          :columnSpacing="0.1"
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

    <TreeGridComponent
      :dataSource="countries"
      childMapping="states"
      :height="400"
      :allowReordering="true"
      :allowFiltering="true"
      :allowSorting="true"
      :filterSettings="filterSettings"
      :queryCellInfo="queryCellInfo"
    >
      <ColumnsDirective>
        <ColumnDirective field="name" headerText="Province" width="210" :template="flagtemplate"></ColumnDirective>
        <ColumnDirective
          field="population"
          headerText="Population (Million)"
          width="188"
          textAlign="Right"
        ></ColumnDirective>
        <ColumnDirective field="gdp" headerText="GDP Rate %" :template="gdpTemplate" width="150"></ColumnDirective>
        <ColumnDirective
          field="rating"
          headerText="Credit Rating"
          width="150"
          :template="ratingTemplate"
          :allowFiltering="false"
        ></ColumnDirective>
        <ColumnDirective
          field="unemployment"
          headerText="Unemployment Rate"
          :allowFiltering="false"
          width="170"
          :template="unemploymentTemplate"
        ></ColumnDirective>
        <ColumnDirective
          field="coordinates"
          headerText="Coordinates"
          width="220"
          :allowSorting="false"
          :template="locationTemplate"
        ></ColumnDirective>
        <ColumnDirective field="area" headerText="Area" width="140" :template="areaTemplate"></ColumnDirective>
        <ColumnDirective
          field="timezone"
          headerText="Time Zone"
          width="150"
          :template="timezoneTemplate"
        ></ColumnDirective>
      </ColumnsDirective>
    </TreeGridComponent>
  </div>
</template>

<style scoped>
.performance-container {
  padding: 12px 6px;
}
.e-image {
  height: 13px;
  width: 14px;
  vertical-align: middle;
}

.statustemp {
  position: relative;
  border-radius: 15px;
  text-align: center;
  background-color: #c3f1d0;
  color: #00752f;
  width: 47px;
}
.material3-dark .rating .star.checked,
.material3 .rating .star.checked {
  color: #6750a4;
}

.material3-dark #myBar,
.material3 #myBar {
  background-color: #53ca17;
}

.material3-dark #myBar.progressdisable,
.material3 #myBar.progressdisable {
  background-color: rgba(242, 184, 181, 1);
}

.e-bigger.tailwind .e-grid .statustemp,
.e-bigger.tailwind-dark .e-grid .statustemp,
.e-bigger.bootstrap5 .e-grid .statustemp,
.e-bigger.bootstrap5-dark .e-grid .statustemp {
  padding-top: 1px;
}

.statustemp.e-lowgdp {
  background-color: #ffdbdb;
  color: #bd0000;
}

td.e-rowcell .statustxt {
  color: #398120;
  position: relative;
}

td.e-rowcell .statustxt.e-lowgdp {
  color: #e60000;
  position: relative;
}

.rating .star {
  font-size: 132%;
  color: lightgrey;
}

.rating .star.checked {
  color: #ee9e54;
}

.rating .star:before {
  content: "★";
}
.negativeTimeZone {
  transform: rotate(180deg);
}
#myBar {
  position: absolute;
  width: 10%;
  height: 100%;
  background-color: #00b300;
}

#myBar.progressdisable {
  background-color: #df2222;
}

#treegridlabel {
  position: relative;
  left: 10px;
  line-height: 18px;
  font-size: 10px;
  color: white;
}
.highcontrast .e-grid #myProgress {
  background-color: whitesmoke;
}
#myProgress {
  position: relative;
  height: 18px;
  width: 10em;
  text-align: left;
  background-color: whitesmoke;
}
#myBar.progressdisable {
  background-color: #df2222;
}
.tailwind .e-grid #coordinates.e-checkbox-wrapper .e-label,
.e-css.e-checkbox-wrapper .e-label,
.tailwind-dark .e-grid #coordinates.e-checkbox-wrapper .e-label,
.e-css.e-checkbox-wrapper .e-label {
  display: inline;
}
#coordinates .e-image {
  filter: brightness(180%);
}
.e-bigger .e-grid .e-rowcell {
  line-height: 24px;
}
</style>
