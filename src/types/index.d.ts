/// <reference types="react" />
/// <reference types="react-dom" />

interface Preset {
  id: string;
  name: string;
  gradient: string;
}

interface LinearGradientPreset {
  type: 'linear';
  angle: number;
  colors: string[];
}

interface RadialGradientPreset {
  type: 'radial';
  shape: 'circle' | 'ellipse';
  size: number;
  x: number;
  y: number;
  colors: string[];
}

type GradientPreset = LinearGradientPreset | RadialGradientPreset;
```