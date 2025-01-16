"use client";

import { useState } from "react";
import PaginatedTable from "@/components/Table/table";
import {
  ButtonAdd,
  CardEquipment,
  ContainerEquipment,
  ContainerHeaderEquipment,
  ContainerHeaderTitleEquipment,
  ContainerInputEquipment,
  EquipmentForm,
} from "./styles";
import InputEquipment from "@/components/Input";
import Button from "@/components/Button";
import { Equipment } from "@/types/equipment";

export default function ElectronicEquipmentCRUD() {
  const [equipment, setEquipment] = useState<Equipment[]>([
    {
      id: "1",
      name: "Laptop",
      type: "Computer",
      brand: "Samsung",
      acquisitionDate: new Date(),
    },
    {
      id: "2",
      name: "Iphone 12",
      type: "Celular",
      brand: "Apple",
      acquisitionDate: new Date(),
    },
    {
      id: "3",
      name: "RedMi 8",
      type: "Celular",
      brand: "Xiaomi",
      acquisitionDate: new Date(),
    },
    {
      id: "4",
      name: "Laptop",
      type: "Computer",
      brand: "Samsung",
      acquisitionDate: new Date(),
    },
    {
      id: "5",
      name: "Iphone 12",
      type: "Celular",
      brand: "Apple",
      acquisitionDate: new Date(),
    },
    {
      id: "6",
      name: "RedMi 8",
      type: "Celular",
      brand: "Xiaomi",
      acquisitionDate: new Date(),
    },
    {
      id: "7",
      name: "Laptop",
      type: "Computer",
      brand: "Samsung",
      acquisitionDate: new Date(),
    },
    {
      id: "8",
      name: "Iphone 12",
      type: "Celular",
      brand: "Apple",
      acquisitionDate: new Date(),
    },
    {
      id: "9",
      name: "RedMi 8",
      type: "Celular",
      brand: "Xiaomi",
      acquisitionDate: new Date(),
    },
    {
      id: "10",
      name: "Laptop",
      type: "Computer",
      brand: "Samsung",
      acquisitionDate: new Date(),
    },
    {
      id: "11",
      name: "Iphone 12",
      type: "Celular",
      brand: "Apple",
      acquisitionDate: new Date(),
    },
    {
      id: "12",
      name: "RedMi 8",
      type: "Celular",
      brand: "Xiaomi",
      acquisitionDate: new Date(),
    },
  ]);
  const [newEquipment, setNewEquipment] = useState<Omit<Equipment, "id">>({
    name: "",
    type: "",
    brand: "",
    acquisitionDate: new Date(),
  });

  const addEquipment = () => {
    setEquipment([...equipment, { ...newEquipment, id: crypto.randomUUID() }]);
    setNewEquipment({
      name: "",
      type: "",
      brand: "",
      acquisitionDate: new Date(),
    });
  };

  const updateEquipment = (
    id: string,
    updatedEquipment: Omit<Equipment, "id">
  ) => {
    setEquipment(
      equipment.map((item) =>
        item.id === id ? { ...item, ...updatedEquipment } : item
      )
    );
  };

  const deleteEquipment = (id: string) => {
    setEquipment(equipment.filter((item) => item.id !== id));
  };

  return (
    <ContainerEquipment>
      <CardEquipment>
        <ContainerHeaderEquipment>
          <ContainerHeaderTitleEquipment>
            Adicione um novo equipamento
          </ContainerHeaderTitleEquipment>
        </ContainerHeaderEquipment>
        <ContainerInputEquipment>
          <EquipmentForm
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              addEquipment();
            }}
          >
            <InputEquipment
              label="Nome"
              id="name"
              onChange={(e) =>
                setNewEquipment({ ...newEquipment, name: e.target.value })
              }
              value={newEquipment.name}
            />

            <InputEquipment
              label="Tipo"
              id="type"
              onChange={(e) =>
                setNewEquipment({ ...newEquipment, type: e.target.value })
              }
              value={newEquipment.type}
            />

            <InputEquipment
              label="Marca"
              id="brand"
              onChange={(e) =>
                setNewEquipment({ ...newEquipment, brand: e.target.value })
              }
              value={newEquipment.brand}
            />

            <InputEquipment
              label="Data de aquisição"
              id="acquisitionDate"
              onChange={(e) =>
                setNewEquipment({
                  ...newEquipment,
                  acquisitionDate: new Date(e.target.value),
                })
              }
              value={
                newEquipment.acquisitionDate
                  ? newEquipment.acquisitionDate.toISOString().split("T")[0]
                  : ""
              }
            />

            <Button label="Adicionar" />
          </EquipmentForm>
        </ContainerInputEquipment>
      </CardEquipment>

      <CardEquipment>
        <ContainerHeaderEquipment>
          <ContainerHeaderTitleEquipment>
            Lista de equipamentos eletronicos
          </ContainerHeaderTitleEquipment>
        </ContainerHeaderEquipment>
        <ContainerInputEquipment>
          <PaginatedTable
            data={equipment}
            updateEquipment={updateEquipment}
            deleteEquipment={deleteEquipment}
          />
        </ContainerInputEquipment>
      </CardEquipment>
    </ContainerEquipment>
  );
}
