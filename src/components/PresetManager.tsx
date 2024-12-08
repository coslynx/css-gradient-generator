import React, { useState, useEffect } from 'react';

interface Preset {
  id: string;
  name: string;
  gradient: string;
}

interface PresetManagerProps {
  className?: string;
  onSave: (preset: Preset) => void;
  presets: Preset[];
  onDelete: (id: string) => void;
  onSelect: (gradient: string) => void;

}

const PresetManager: React.FC<PresetManagerProps> = ({ className, onSave, presets, onDelete, onSelect }) => {
  const [newPresetName, setNewPresetName] = useState('');
  const [newPresetGradient, setNewPresetGradient] = useState('');

  const handleSavePreset = () => {
    if (newPresetName.trim() === '' || newPresetGradient.trim() === '') {
      alert('Please enter a name and gradient.');
      return;
    }
    onSave({ id: crypto.randomUUID(), name: newPresetName, gradient: newPresetGradient });
    setNewPresetName('');
    setNewPresetGradient('');
  };


  const handleDeletePreset = (id: string) => {
    onDelete(id);
  };

  return (
    <div className={`${className} p-4 border border-gray-300 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800`}>
      <h2 className="text-lg font-medium mb-4">Presets</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Preset Name"
          value={newPresetName}
          onChange={(e) => setNewPresetName(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
        />
        <input
          type="text"
          placeholder="Gradient CSS"
          value={newPresetGradient}
          onChange={(e) => setNewPresetGradient(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
        />
        <button onClick={handleSavePreset} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Save Preset
        </button>
      </div>
      {presets.length > 0 && (
        <ul>
          {presets.map((preset) => (
            <li key={preset.id} className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <button onClick={() => onSelect(preset.gradient)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2">
                  Select
                </button>
                <span>{preset.name}</span>
              </div>
              <button
                onClick={() => handleDeletePreset(preset.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PresetManager;

```