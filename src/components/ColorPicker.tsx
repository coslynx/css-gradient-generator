import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

interface ColorPickerProps {
  onChange: (color: string) => void;
  color: string;
  className?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onChange, color, className }) => {
  const [displayedColor, setDisplayedColor] = useState(color);

  const handleChangeComplete = (color: any) => {
    onChange(color.hex);
    setDisplayedColor(color.hex);
  };

  return (
    <div className={className}>
      <ChromePicker
        color={displayedColor}
        onChangeComplete={handleChangeComplete}
      />
    </div>
  );
};

export default ColorPicker;

```