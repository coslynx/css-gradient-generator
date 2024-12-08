import { Color } from "./colorUtils";

export interface Color {
  r: number;
  g: number;
  b: number;
}

export const validateColor = (color: string): boolean => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
};

export const sanitizeColorInput = (color: string): string | null => {
  if (validateColor(color)) {
    return color;
  } else {
    return null;
  }
};

export const generateRandomColors = (numColors: number): Color[] => {
  const colors: Color[] = [];
  for (let i = 0; i < numColors; i++) {
    colors.push(generateRandomColor());
  }
  return colors;
};

const generateRandomColor = (): Color => {
  const r = Math.floor(Math.random()  256);
  const g = Math.floor(Math.random()  256);
  const b = Math.floor(Math.random()  256);
  return { r, g, b };
};

export const convertColorToHex = (color: Color): string => {
  const hexR = color.r.toString(16).padStart(2, "0");
  const hexG = color.g.toString(16).padStart(2, "0");
  const hexB = color.b.toString(16).padStart(2, "0");
  return `#${hexR}${hexG}${hexB}`;
};
```