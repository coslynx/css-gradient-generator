import { Color } from "./colorUtils";

export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()  (max - min + 1)) + min;
};

export const getRandomArrayElement = <T>(arr: T[]): T => {
  if (arr.length === 0) {
    throw new Error("Cannot get random element from an empty array.");
  }
  return arr[getRandomInt(0, arr.length - 1)];
};


export const validateColor = (color: string): boolean => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
};

export const validateNumberInput = (value: string, min: number, max: number): number | null => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue) || parsedValue < min || parsedValue > max) {
      return null;
    }
    return parsedValue;
  };

export const sanitizeColorInput = (color: string): string | null => {
    if(validateColor(color)){
        return color;
    } else {
        return null;
    }
}


export const generateRandomColors = (numColors: number): Color[] => {
    const colors: Color[] = [];
    for (let i = 0; i < numColors; i++) {
      colors.push(generateRandomColor());
    }
    return colors;
  };
  
  const generateRandomColor = (): Color => {
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);
    return { r, g, b };
  };
  
  export const convertColorToHex = (color: Color): string => {
    const hexR = color.r.toString(16).padStart(2, '0');
    const hexG = color.g.toString(16).padStart(2, '0');
    const hexB = color.b.toString(16).padStart(2, '0');
    return `#${hexR}${hexG}${hexB}`;
  };

export const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      throw new Error('Failed to copy: ' + err);
    }
  };
```