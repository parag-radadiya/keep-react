export const playButtonApiData = [
  {
    id: 1,
    propsName: "title",
    propsType: "string",
    propsDescription: "A descriptive title or label for the play button.",
    default: "title",
  },
  {
    id: 2,
    propsName: "type",
    propsType: ["primary", "text", "outlineGray", "blur"],
    propsDescription: "The type of play button style.",
    default: "primary",
  },
  {
    id: 3,
    propsName: "icon",
    propsType: "ReactNode",
    propsDescription:
      "The icon element to be displayed within the play button.",
    default: "<Play/>",
  },
  {
    id: 4,
    propsName: "circle",
    propsType: "boolean",
    propsDescription:
      "If true, the play button will be displayed in a circular shape.",
    default: "false",
  },
  {
    id: 5,
    propsName: "size",
    propsType: ["xs", "sm", "md", "lg", "xl", "2xl"],
    propsDescription: "The size of the play button.",
    default: "md",
  },
  {
    id: 6,
    propsName: "className",
    propsType: "string",
    propsDescription:
      "Additional CSS classes to apply to the play button for custom styling.",
    default: "None",
  },
  {
    id: 7,
    propsName: "onClick",
    propsType: "Function",
    propsDescription: "On click event Handler",
    default: "None",
  },
];
