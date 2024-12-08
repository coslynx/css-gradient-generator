import React, { useState } from 'react';

interface SettingsPanelProps {
  className?: string;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ className }) => {
  const [linearGradient, setLinearGradient] = useState(true);
  const [numStops, setNumStops] = useState(2);
  const [angle, setAngle] = useState(0);
  const [shape, setShape] = useState('circle');
  const [size, setSize] = useState(50);
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);


  const handleNumStopsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 2 && value <= 8) {
      setNumStops(value);
    }
  };

  const handleAngleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 360) {
      setAngle(value);
    }
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 10 && value <= 200) {
      setSize(value);
    }
  };

  const handleXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setX(value);
    }
  };

  const handleYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setY(value);
    }
  };

  return (
    <div className={`${className} p-4 border border-gray-300 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800`}>
      <h2 className="text-lg font-medium mb-2">Settings</h2>
      <div className="mb-2">
        <label className="block text-gray-700 dark:text-gray-300 font-bold mb-1">Gradient Type:</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="linear"
            name="gradientType"
            value="linear"
            checked={linearGradient}
            onChange={() => setLinearGradient(true)}
            className="mr-2"
          />
          <label htmlFor="linear" className="text-gray-700 dark:text-gray-300">Linear</label>
          <input
            type="radio"
            id="radial"
            name="gradientType"
            value="radial"
            checked={!linearGradient}
            onChange={() => setLinearGradient(false)}
            className="ml-4 mr-2"
          />
          <label htmlFor="radial" className="text-gray-700 dark:text-gray-300">Radial</label>
        </div>
      </div>
      {linearGradient && (
        <>
          <div className="mb-2">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-1">Number of Stops:</label>
            <input
              type="number"
              min={2}
              max={8}
              value={numStops}
              onChange={handleNumStopsChange}
              className="w-16 border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-1">Angle:</label>
            <input
              type="number"
              min={0}
              max={360}
              value={angle}
              onChange={handleAngleChange}
              className="w-16 border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
            />
          </div>
        </>
      )}
      {!linearGradient && (
        <>
          <div className="mb-2">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-1">Shape:</label>
            <select
              value={shape}
              onChange={(e) => setShape(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
            >
              <option value="circle">Circle</option>
              <option value="ellipse">Ellipse</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-1">Size:</label>
            <input
              type="number"
              min={10}
              max={200}
              value={size}
              onChange={handleSizeChange}
              className="w-16 border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-1">X:</label>
            <input
              type="number"
              min={0}
              max={100}
              value={x}
              onChange={handleXChange}
              className="w-16 border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-1">Y:</label>
            <input
              type="number"
              min={0}
              max={100}
              value={y}
              onChange={handleYChange}
              className="w-16 border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SettingsPanel;
```