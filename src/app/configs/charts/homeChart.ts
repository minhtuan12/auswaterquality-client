export const interactiveScatterChart = {
  chart: {
    type: "scatter",
  },
  xAxis: {
    title: {
      text: "Total Dissolved Solids (mg/L)",
    },
    plotLines: [
      {
        value: 0,
        color: "#ccc",
        dashStyle: "ShortDash",
        width: 2,
      },
      {
        value: 600,
        color: "#000",
        dashStyle: "ShortDash",
        width: 2,
        label: { text: "ADWG Guideline", rotation: 90 },
      },
      {
        value: 900,
        color: "#ccc",
        dashStyle: "ShortDash",
        width: 2,
      },
      {
        value: 1200,
        color: "#ccc",
        dashStyle: "ShortDash",
        width: 2,
      },
      {
        value: 2000,
        color: "#ccc",
        dashStyle: "ShortDash",
        width: 2,
      },
    ],
    plotBands: [
      {
        from: 0,
        to: 600,
        color: "transparent",
        label: { text: "Good quality", style: { color: "#008000" } },
      },
      {
        from: 600,
        to: 900,
        color: "transparent",
        label: { text: "Fair quality", style: { color: "#999900" } },
      },
      {
        from: 900,
        to: 1200,
        color: "transparent",
        label: { text: "Poor quality", style: { color: "#cc6600" } },
      },
      {
        from: 1200,
        to: 1800,
        color: "transparent",
        label: {
          text: "Unacceptable quality",
          style: { color: "#cc0000" },
        },
      },
    ],
  },
  yAxis: {
    title: {
      text: "Sample ID or Index",
    },
    visible: false, // optional
  },
  legend: {
    enabled: false,
  },
};
