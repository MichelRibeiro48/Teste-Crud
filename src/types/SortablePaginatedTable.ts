import { Equipment } from "./equipment";

export interface SortablePaginatedTableProps {
  data: Equipment[];
  updateEquipment: (
    id: string,
    updatedEquipment: Omit<Equipment, "id"> | {}
  ) => void;
  deleteEquipment: (id: string) => void;
  showPopUp: () => void;
  changeDeleteId: (e: string) => void;
}

export type SortKey = "id" | "name" | "type" | "brand" | "acquisitionDate";
export type SortDirection = "asc" | "desc";