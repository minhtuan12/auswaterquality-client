const PALETTES = [
  "#dc6900",
  "#eb8c00",
  "#d7321e",
  "#a32020",
  "#602320",
  "#f23219",
  "#ffb347",
  "#ff8a65",
  "#ffe6be",
  "#f44336",
  "#e57373",
  "#d32f2f",
  "#b71c1c",
  "#e0301e",
  "#ffcc80",
  "#ffab91",
  "#ef9a9a",
  "#c62828",
  "#8d6e63",
  "#a1887f",
  "#ffd54f",
  "#ffa000",
  "#fb8c00",
];

export const BaseHelper = {
  getRandom(min = 0, max = 1): number {
    return Math.random() * (max - min) + min;
  },
  getRandomDarkColor() {
    return PALETTES[Math.floor(Math.random() * PALETTES.length)];
  },
  getDarkColor(index: number, opacity?: number) {
    if (opacity) {
      return this.hexWithOpacity(PALETTES[index], opacity);
    }
    return PALETTES[index];
  },
  generateCoolColor(times: number) {
    const colors: string[] = [];
    while (colors.length < times) {
      const hue = Math.floor(Math.random() * 100) + 200;

      const saturation = Math.floor(Math.random() * 31) + 70;

      const lightness = Math.floor(Math.random() * 31) + 40;

      const hexColor = this.hslToHex(hue, saturation, lightness);
      if (!colors.includes(hexColor)) {
        colors.push(hexColor);
      }
    }
    return colors;
  },
  hexWithOpacity(hex: string, opacity: number) {
    hex = hex.replace("#", "");

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const rBlended = Math.round(r * opacity + 255 * (1 - opacity));
    const gBlended = Math.round(g * opacity + 255 * (1 - opacity));
    const bBlended = Math.round(b * opacity + 255 * (1 - opacity));

    const blendedHex = `#${rBlended.toString(16).padStart(2, "0")}${gBlended
      .toString(16)
      .padStart(2, "0")}${bBlended.toString(16).padStart(2, "0")}`;

    return blendedHex;
  },
  hslToHex(h: number, s: number, l: number): string {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  },
};

export function extractFromDisclaimer(html: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  let disclaimerEl = null;
  const allEls = doc.body.querySelectorAll("*");
  for (const el of allEls) {
    if (el?.textContent?.trim() === "Disclaimer") {
      disclaimerEl = el;
      break;
    }
  }

  if (!disclaimerEl) return "";

  let collected: any = [];
  let node: any = disclaimerEl.nextElementSibling;
  while (node) {
    collected.push(node.outerHTML || node.textContent);
    node = node.nextElementSibling;
  }

  return collected.join("\n");
}

export function lightenHexColor(hex: string, percent: number) {
  hex = hex.replace(/^#/, "");

  const num = parseInt(hex, 16);
  const amt = Math.round(2.55 * percent);

  let R = (num >> 16) + amt;
  let G = ((num >> 8) & 0x00ff) + amt;
  let B = (num & 0x0000ff) + amt;

  R = R < 255 ? (R < 0 ? 0 : R) : 255;
  G = G < 255 ? (G < 0 ? 0 : G) : 255;
  B = B < 255 ? (B < 0 ? 0 : B) : 255;

  return (
    "#" +
    (0x1000000 + (R << 16) + (G << 8) + B).toString(16).slice(1).toUpperCase()
  );
}

export function extractYoutubeId(url: string) {
  if (url) {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|watch\?.+&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }
  return ""
}
