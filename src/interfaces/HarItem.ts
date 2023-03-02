import { type Request } from "@src/interfaces/Request";

export interface HarItem {
  id: string;
  date: string;
  domain: string;
  requests: Request[];
}
