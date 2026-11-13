/** localStorage double-buffer and the cloud document key. Keep these stable for v1 saves. */
export const SLOT_KEY = "rh.slot";
export const CLOUD_KEY = "rh";

export function saveKey(slot: string) {
  return `rh.save.${slot}`;
}
