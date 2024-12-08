import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import CodeOutput from './CodeOutput';
import PresetManager from './PresetManager';
import SettingsPanel from './SettingsPanel';
import { generateLinearGradient, generateRadialGradient } from '@/utils/gradientUtils';

interface GradientGeneratorProps {
  className?: string;
}

const GradientGenerator: React.FC<GradientGeneratorProps> = ({ className }) => {
  const [gradientType, setGradientType] = useState<'linear' | 'radial'>('linear');
  const [numStops, setNumStops] = useState(2);
  const [angle, setAngle] = useState(0);
  const [colors, setColors] = useState<string[]>(['#0072ff', '#00c6ff']);
  const [shape, setShape] = useState('circle');
  const [size, setSize] = useState(50);
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [generatedCode, setGeneratedCode] = useState('');
  const [presets, setPresets] = useState<Preset[]>([]);

  const handleGenerateGradient = () => {
    try {
      let code = '';
      if (gradientType === 'linear') {
        code = generateLinearGradient(numStops, angle, colors);
      } else {
        code = generateRadialGradient(shape, size, x, y, colors);
      }
      setGeneratedCode(code);
    } catch (error) {
      console.error('Error generating gradient:', error);
      alert('Error generating gradient. Please check your settings.');
    }
  };

  const handleColorChange = (index: number, color: string) => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };

  const handlePresetSave = (preset: Preset) => {
    setPresets([...presets, preset]);
  };

  const handlePresetDelete = (id: string) => {
    setPresets(presets.filter((p) => p.id !== id));
  };

  const handlePresetSelect = (gradient: string) => {
    setGeneratedCode(gradient);
  };


  const handleSettingsChange = (settings: {
    gradientType?: 'linear' | 'radial';
    numStops?: number;
    angle?: number;
    shape?: 'circle' | 'ellipse';
    size?: number;
    x?: number;
    y?: number;
  }) => {
    setGradientType(settings.gradientType || gradientType);
    setNumStops(settings.numStops || numStops);
    setAngle(settings.angle || angle);
    setShape(settings.shape || shape);
    setSize(settings.size || size);
    setX(settings.x || x);
    setY(settings.y || y);
  };

  return (
    <div className={className}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="flex flex-col gap-2">
            {colors.map((color, index) => (
              <ColorPicker key={index} onChange={(newColor) => handleColorChange(index, newColor)} color={color} />
            ))}
          </div>
          <button onClick={handleGenerateGradient} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Generate Gradient
          </button>
        </div>
        <div className="flex-1">
          <SettingsPanel onChange={handleSettingsChange} />
        </div>
      </div>

      <CodeOutput code={generatedCode} />
      <PresetManager presets={presets} onSave={handlePresetSave} onDelete={handlePresetDelete} onSelect={handlePresetSelect} />
    </div>
  );
};

interface Preset {
  id: string;
  name: string;
  gradient: string;
}

export default GradientGenerator;
```