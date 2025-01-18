import { useState, useEffect } from "react";
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
import { Equipment } from "@/types/equipment";

const SortablePaginatedTable = ({
  data,
  updateEquipment,
  showPopUp,
  changeDeleteId,
}: SortablePaginatedTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedValues, setEditedValues] = useState<Partial<Equipment>>({});
  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: SortDirection;
  }>({ key: "id", direction: "asc" });
  const [isValid, setIsValid] = useState(false);
  const itemsPerPage = 5;

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

  const handleEdit = (id: string) => {
    setEditingId(id);
    setEditedValues(data.find((item) => item.id === id) || {});
  };

  const handleSave = (id: string) => {
    if (editedValues.acquisitionDate) {
      const updatedDate = new Date(editedValues.acquisitionDate);
      updatedDate.setDate(updatedDate.getDate());

      const formattedDate = updatedDate.toISOString();

      setEditedValues((prev) => ({
        ...prev,
        acquisitionDate: formattedDate,
      }));
      updateEquipment(id, { ...editedValues, acquisitionDate: formattedDate });
    }

    setEditingId(null);
    setEditedValues({});
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedValues({});
  };

  const validateFields = () => {
    const { name, type, brand, acquisitionDate } = editedValues;

    const formatStringToDate = new Date(
      typeof acquisitionDate === "string" ? acquisitionDate : ""
    );

    const isValidDate =
      formatStringToDate instanceof Date &&
      !isNaN(formatStringToDate.getTime());
    setIsValid(
      name?.trim() !== "" &&
        type?.trim() !== "" &&
        brand?.trim() !== "" &&
        isValidDate
    );
  };

  useEffect(() => {
    if (editingId) {
      validateFields();
    }
  }, [editedValues, editingId]);

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
                    value={editedValues.name || ""}
                    required
                    onChange={(e) => {
                      setEditedValues((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }));
                      validateFields();
                    }}
                  />
                ) : (
                  item.name
                )}
              </TableCell>

              <TableCell>
                {editingId === item.id ? (
                  <InputEquipment
                    value={editedValues.type || ""}
                    required
                    onChange={(e) => {
                      setEditedValues((prev) => ({
                        ...prev,
                        type: e.target.value,
                      }));
                      validateFields();
                    }}
                  />
                ) : (
                  item.type
                )}
              </TableCell>

              <TableCell>
                {editingId === item.id ? (
                  <InputEquipment
                    value={editedValues.brand || ""}
                    required
                    onChange={(e) => {
                      setEditedValues((prev) => ({
                        ...prev,
                        brand: e.target.value,
                      }));
                      validateFields();
                    }}
                  />
                ) : (
                  item.brand
                )}
              </TableCell>

              <TableCell>
                {editingId === item.id ? (
                  <InputEquipment
                    value={
                      editedValues.acquisitionDate
                        ? new Date(editedValues.acquisitionDate)
                            .toISOString()
                            .split("T")[0]
                        : ""
                    }
                    id="acquisitionDate"
                    type="date"
                    required
                    onChange={(e) =>
                      setEditedValues((prev) => ({
                        ...prev,
                        acquisitionDate: e.target.value,
                      }))
                    }
                  />
                ) : (
                  item.acquisitionDate
                    .split("T")[0]
                    .split("-")
                    .reverse()
                    .join("/")
                )}
              </TableCell>

              <TableCell>
                {editingId === item.id ? (
                  <ButtonActionsCard>
                    <Button
                      onClick={() => handleSave(item.id)}
                      label="Salvar"
                      disabled={!isValid}
                    />
                    <Button onClick={() => handleCancel()} label="Cancelar" />
                  </ButtonActionsCard>
                ) : (
                  <ButtonActionsCard>
                    <Button
                      onClick={() => handleEdit(item.id)}
                      icon={<Pencil className="h-4 w-4" />}
                    />
                    <Button
                      onClick={() => {
                        showPopUp();
                        changeDeleteId(item.id);
                      }}
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
        >
          Próxima
        </PaginationButton>
      </PaginationCard>
    </CardTable>
  );
};

export default SortablePaginatedTable;
