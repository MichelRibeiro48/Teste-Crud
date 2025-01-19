import { Equipment } from "./equipment";

export interface SortablePaginatedTableProps {
  data: Equipment[];
}

export type SortKey = "id" | "name" | "type" | "brand" | "acquisitionDate";
export type SortDirection = "asc" | "desc";