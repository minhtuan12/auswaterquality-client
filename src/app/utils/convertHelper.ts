export const ConvertHelper = {
  textTransform: (
    type: "uppercase" | "lowercase" | "capitalize",
    value: string
  ) => {
    switch (type) {
      case "uppercase":
        return value.toUpperCase();
      case "lowercase":
        return value.toLowerCase();
      default: {
        const values = value.split("");
        return values[0].toUpperCase() + value.substring(1).toLowerCase();
      }
    }
  },
  abbreviationNumber: (value: number) => {
    if (value >= 1_000_000_000) {
      return (value / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (value >= 1_000_000) {
      return (value / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (value >= 1_000) {
      return (value / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return value.toString();
  },
};
