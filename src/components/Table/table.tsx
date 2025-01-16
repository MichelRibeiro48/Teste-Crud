import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Pencil, Trash2 } from "lucide-react";
import {
  ButtonActionsCard,
  ButtonFilterTable,
  CardTable,
  CurrentPagination,
  PaginationButton,
  PaginationCard,
} from "./styles";

import {
  SortablePaginatedTableProps,
  SortDirection,
  SortKey,
} from "@/types/SortablePaginatedTable";
import InputEquipment from "../Input";
import Button from "../Button";

const SortablePaginatedTable = ({
  data,
  updateEquipment,
  deleteEquipment,
}: SortablePaginatedTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: SortDirection;
  }>({ key: "id", direction: "asc" });
  const itemsPerPage = 10;

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = sortedData.slice(startIndex, endIndex);

  const requestSort = (key: SortKey) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  return (
    <CardTable>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <ButtonFilterTable onClick={() => requestSort("id")}>
                ID{" "}
                {sortConfig.key === "id" &&
                  (sortConfig.direction === "asc" ? "↑" : "↓")}
              </ButtonFilterTable>
            </TableHead>
            <TableHead>
              <ButtonFilterTable onClick={() => requestSort("name")}>
                Nome{" "}
                {sortConfig.key === "name" &&
                  (sortConfig.direction === "asc" ? "↑" : "↓")}
              </ButtonFilterTable>
            </TableHead>
            <TableHead>
              <ButtonFilterTable onClick={() => requestSort("type")}>
                Tipo{" "}
                {sortConfig.key === "type" &&
                  (sortConfig.direction === "asc" ? "↑" : "↓")}
              </ButtonFilterTable>
            </TableHead>
            <TableHead>
              <ButtonFilterTable
                onClick={() => requestSort("brand")}
                className="font-bold"
              >
                Marca{" "}
                {sortConfig.key === "brand" &&
                  (sortConfig.direction === "asc" ? "↑" : "↓")}
              </ButtonFilterTable>
            </TableHead>
            <TableHead>
              <ButtonFilterTable onClick={() => requestSort("acquisitionDate")}>
                Data de Aquisição{" "}
                {sortConfig.key === "acquisitionDate" &&
                  (sortConfig.direction === "asc" ? "↑" : "↓")}
              </ButtonFilterTable>
            </TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>

              <TableCell>
                {editingId === item.id ? (
                  <InputEquipment
                    value={item.name}
                    onChange={(e) =>
                      updateEquipment(item.id, {
                        ...item,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.name
                )}
              </TableCell>

              <TableCell>
                {editingId === item.id ? (
                  <InputEquipment
                    value={item.type}
                    onChange={(e) =>
                      updateEquipment(item.id, {
                        ...item,
                        type: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.type
                )}
              </TableCell>

              <TableCell>
                {editingId === item.id ? (
                  <InputEquipment
                    value={item.brand}
                    onChange={(e) =>
                      updateEquipment(item.id, {
                        ...item,
                        brand: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.brand
                )}
              </TableCell>

              <TableCell>
                {editingId === item.id ? (
                  <InputEquipment
                    value={
                      item.acquisitionDate
                        ? new Date(item.acquisitionDate)
                            .toISOString()
                            .split("T")[0]
                        : ""
                    }
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      const [year, month, day] = selectedDate
                        .split("-")
                        .map(Number);
                      const fixedDate = new Date(year, month - 1, day);
                      updateEquipment(item.id, {
                        ...item,
                        acquisitionDate: fixedDate,
                      });
                    }}
                  />
                ) : (
                  new Date(item.acquisitionDate).toLocaleDateString("pt-BR")
                )}
              </TableCell>

              <TableCell>
                {editingId === item.id ? (
                  <ButtonActionsCard>
                    <Button onClick={() => setEditingId(null)} label="Salvar" />
                    <Button
                      onClick={() => setEditingId(null)}
                      label="Cancelar"
                    />
                  </ButtonActionsCard>
                ) : (
                  <ButtonActionsCard>
                    <Button
                      onClick={() => setEditingId(item.id)}
                      icon={<Pencil className="h-4 w-4" />}
                    />
                    <Button
                      onClick={() => deleteEquipment(item.id)}
                      icon={<Trash2 className="h-4 w-4" />}
                    />
                  </ButtonActionsCard>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <PaginationCard>
        <PaginationButton
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 disabled:bg-gray-100 rounded"
        >
          Anterior
        </PaginationButton>
        <CurrentPagination>
          Página {currentPage} de {Math.ceil(data.length / itemsPerPage)}
        </CurrentPagination>
        <PaginationButton
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(data.length / itemsPerPage))
            )
          }
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          className="px-4 py-2 bg-gray-200 disabled:bg-gray-100 rounded"
        >
          Próxima
        </PaginationButton>
      </PaginationCard>
    </CardTable>
  );
};

export default SortablePaginatedTable;
