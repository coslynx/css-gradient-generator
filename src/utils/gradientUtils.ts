import { LinearGradientPreset, RadialGradientPreset } from "@/types/GradientPreset";
import { getRandomInt, getRandomArrayElement, sanitizeColorInput } from "./helperFunctions";

export const generateLinearGradient = (
  numStops: number,
  angle: number,
  colors: string[]
): string => {
  if (numStops < 2 || numStops > 8) {
    throw new Error("Number of stops must be between 2 and 8.");
  }
  if (colors.length < 2) {
    throw new Error("At least two colors are required.");
  }

  const stops = colors.map((color, index) => {
    const percentage = Math.round((index / (numStops - 1))  100);
    return `${color} ${percentage}%`;
  });

  return `linear-gradient(${angle}deg, ${stops.join(", ")})`;
};

export const generateRadialGradient = (
  shape: "circle" | "ellipse",
  size: number,
  x: number,
  y: number,
  colors: string[]
): string => {
  if (colors.length < 2) {
    throw new Error("At least two colors are required.");
  }
  if (size < 10 || size > 200) {
    throw new Error("Size must be between 10 and 200.");
  }
  if (x < 0 || x > 100 || y < 0 || y > 100) {
    throw new Error("X and Y coordinates must be between 0 and 100.");
  }

  const stops = colors.map((color, index) => {
    const percentage = Math.round((index / (colors.length - 1))  100);
    return `${color} ${percentage}%`;
  });

  return `radial-gradient(${shape} at ${x}% ${y}%, ${stops.join(", ")})`;
};


export const generateRandomLinearGradient = (numStops: number = 2): LinearGradientPreset => {
  const colors: string[] = [];
  for (let i = 0; i < numStops; i++) {
    colors.push(generateRandomHexColor());
  }
  const angle = Math.floor(Math.random()  360);
  return {
    type: "linear",
    angle: angle,
    colors: colors,
  };
};

export const generateRandomRadialGradient = (): RadialGradientPreset => {
  const colors: string[] = [];
  const numStops = Math.floor(Math.random()  7) + 2;
  for (let i = 0; i < numStops; i++) {
    colors.push(generateRandomHexColor());
  }
  const shape = Math.random() < 0.5 ? "circle" : "ellipse";
  const size = Math.floor(Math.random()  191) + 10;
  const x = Math.floor(Math.random()  101);
  const y = Math.floor(Math.random()  101);
  return {
    type: "radial",
    shape: shape,
    size: size,
    x: x,
    y: y,
    colors: colors,
  };
};

const generateRandomHexColor = (): string => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += Math.floor(Math.random()  16).toString(16);
  }
  return hexColor;
};

export const generateGradientCSS = (
  preset: LinearGradientPreset | RadialGradientPreset
): string => {
  if (preset.type === "linear") {
    return generateLinearGradient(preset.colors.length, preset.angle, preset.colors);
  } else {
    return generateRadialGradient(preset.shape, preset.size, preset.x, preset.y, preset.colors);
  }
};

export const sanitizeAndValidateColors = (colors: string[]): string[] => {
    const sanitizedColors = colors.map(color => sanitizeColorInput(color)).filter(color => color !== null) as string[];
    if(sanitizedColors.length < 2){
        throw new Error("At least two valid colors are required.");
    }
    return sanitizedColors;
}
```