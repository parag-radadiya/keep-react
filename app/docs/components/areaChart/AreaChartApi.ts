export const areaChartAPIData = [
  {
    id: 1,
    propsName: "showTooltip",
    propsType: "boolean",
    propsDescription:
      "Determines whether tooltips are displayed on data points.",
    default: "false",
  },
  {
    id: 2,
    propsName: "showGridLine",
    propsType: "boolean",
    propsDescription:
      "Specifies whether grid lines are displayed in the chart.",
    default: "false",
  },
  {
    id: 3,
    propsName: "chartType",
    propsType: ["natural", "linear"],
    propsDescription: "Specifies the type of curve used for the area chart.",
    default: "linear",
  },
  {
    id: 4,
    propsName: "showXaxis",
    propsType: "boolean",
    propsDescription: "Determines whether the X-axis is displayed.",
    default: "false",
  },
  {
    id: 5,
    propsName: "showYaxis",
    propsType: "boolean",
    propsDescription: "Determines whether the Y-axis is displayed.",
    default: "false",
  },
  {
    id: 6,
    propsName: "dataKey",
    propsType: "string",
    propsDescription: "Key for the main data series in the chart.",
    default: "price",
  },
  {
    id: 7,
    propsName: "secondaryDataKey",
    propsType: "string",
    propsDescription: "Key for a secondary data series in the chart.",
    default: "sell",
  },
  {
    id: 8,
    propsName: "XAxisDataKey",
    propsType: "string",
    propsDescription: "Key for X-axis data in the chart data array.",
    default: "None",
  },
  {
    id: 9,
    propsName: "YAxisDataKey",
    propsType: "string",
    propsDescription: "Key for Y-axis data in the chart data array.",
    default: "None",
  },
  {
    id: 10,
    propsName: "chartData",
    propsType: "Array",
    propsDescription: "Array of data points used to populate the chart.",
    default: "Array",
  },
];
