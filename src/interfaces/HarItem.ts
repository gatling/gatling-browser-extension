import { type SimpleEntry } from "@src/interfaces/Entry";

export interface HarItem {
  id: string;
  date: string;
  domain: string;
  requests: SimpleEntry[];
}
