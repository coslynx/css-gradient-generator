import { Preset } from "@/types/Preset";

interface PresetService {
  savePreset(preset: Preset): void;
  getPresets(): Preset[];
  deletePreset(id: string): void;
  getPresetById(id: string): Preset | undefined;
}

export class LocalStoragePresetService implements PresetService {
  private storageKey = "gradients";

  savePreset(preset: Preset): void {
    try {
      const presets = this.getPresets();
      const existingPresetIndex = presets.findIndex((p) => p.id === preset.id);
      if (existingPresetIndex !== -1) {
        presets[existingPresetIndex] = preset;
      } else {
        presets.push(preset);
      }
      localStorage.setItem(this.storageKey, JSON.stringify(presets));
    } catch (error) {
      console.error("Error saving preset:", error);
      //Consider adding more robust error handling, potentially alerting the user.
    }
  }

  getPresets(): Preset[] {
    try {
      const presetsJson = localStorage.getItem(this.storageKey);
      return presetsJson ? JSON.parse(presetsJson) : [];
    } catch (error) {
      console.error("Error retrieving presets:", error);
      return [];
    }
  }

  deletePreset(id: string): void {
    try {
      const presets = this.getPresets();
      const updatedPresets = presets.filter((p) => p.id !== id);
      localStorage.setItem(this.storageKey, JSON.stringify(updatedPresets));
    } catch (error) {
      console.error("Error deleting preset:", error);
      //Consider adding more robust error handling, potentially alerting the user.
    }
  }


  getPresetById(id: string): Preset | undefined {
    const presets = this.getPresets();
    return presets.find((p) => p.id === id);
  }
}

export default LocalStoragePresetService;

```