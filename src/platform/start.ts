import { setView, boot } from "../sim/engine";
import { HarborView } from "../render/view";

export function startHarbor() {
  setView(HarborView);
  return boot();
}
