import { HarLegacy } from "@src/interfaces/HarLegacy";

export interface HarItem {
  id: string;
  date: string;
  domain: string;
  har: HarLegacy;
}
