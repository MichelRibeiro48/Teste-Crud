"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import PaginatedTable from "@/components/Table/table";
import {
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
import Popup from "@/components/Popup";
import { useForm, SubmitHandler } from "react-hook-form";
import { createData, deleteData, getData, updateData } from "@/api/crud";
import showToastSuccess from "@/utils/toast-success";
import { equipmentSchema } from "@/utils/sendFormValidation";
import Toast from "@/components/Toast/toast";
import showToastError from "@/utils/toast-error";

export default function ElectronicEquipmentCRUD() {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Omit<Equipment, "id">>({
    resolver: zodResolver(equipmentSchema),
  });

  const getDataFromAPI = async () => {
    try {
      const data = await getData();
      if (data) {
        setEquipment(data);
      }
    } catch (error) {
      console.log("Erro ao atualizar a lista de equipamentos", error);
      showToastError({ label: "Erro ao atualizar a lista de equipamentos!" });
    }
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const onSubmit: SubmitHandler<Omit<Equipment, "id">> = async (data) => {
    try {
      const acquisitionDate =
        data.acquisitionDate.toString().length > 0
          ? new Date(data.acquisitionDate)
          : new Date();
      const newEquipment: Equipment = {
        ...data,
        id: crypto.randomUUID(),
        acquisitionDate: new Date(acquisitionDate).toISOString(),
      };
      await createData(newEquipment);
      await getDataFromAPI();
      showToastSuccess({ label: "Equipamento adicionado com sucesso!" });
    } catch (error) {
      showToastError({ label: "Erro ao adicionar o equipamento!" });
      console.log("Erro ao enviar novo equipamento", error);
    }
    reset();
  };

  const updateEquipment = async (
    id: string,
    updatedEquipment: Omit<Equipment, "id"> | {}
  ) => {
    try {
      await updateData(id, updatedEquipment);
      showToastSuccess({ label: "Equipamento atualizado com sucesso!" });
      await getDataFromAPI();
    } catch (error) {
      showToastError({ label: "Erro ao atualizar o equipamento!" });
      console.log("Erro ao atualizar o equipamento", error);
    }
  };

  const deleteEquipment = async (id: string) => {
    try {
      await deleteData(id);
      showToastSuccess({ label: "Equipamento deletado com sucesso!" });
      await getDataFromAPI();
    } catch (error) {
      showToastError({ label: "Erro ao deletar o equipamento!" });
      console.log("Erro ao deletar o equipamento", error);
    }
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
          <EquipmentForm onSubmit={handleSubmit(onSubmit)}>
            <InputEquipment
              label="Nome"
              id="name"
              {...register("name")}
              error={errors.name?.message}
            />

            <InputEquipment
              label="Tipo"
              id="type"
              {...register("type")}
              error={errors.type?.message}
            />

            <InputEquipment
              label="Marca"
              id="brand"
              {...register("brand")}
              error={errors.brand?.message}
            />

            <InputEquipment
              label="Data de aquisição"
              id="acquisitionDate"
              type="date"
              {...register("acquisitionDate")}
            />

            <Button label="Adicionar" />
          </EquipmentForm>
        </ContainerInputEquipment>
      </CardEquipment>

      <CardEquipment>
        <ContainerHeaderEquipment>
          <ContainerHeaderTitleEquipment>
            Lista de equipamentos
          </ContainerHeaderTitleEquipment>
        </ContainerHeaderEquipment>
        <ContainerInputEquipment>
          <PaginatedTable
            data={equipment}
            updateEquipment={updateEquipment}
            deleteEquipment={deleteEquipment}
            showPopUp={() => setIsOpen(true)}
            changeDeleteId={(e: string) => setDeleteId(e)}
          />
        </ContainerInputEquipment>
      </CardEquipment>
      <Popup
        close={() => setIsOpen(false)}
        isOpen={isOpen}
        onPressButton={() => {
          deleteEquipment(deleteId);
          setIsOpen(false);
        }}
        title="Atenção"
        content={`Deseja realmente excluir o produto com ID ${deleteId}`}
        titleButton="Excluir"
      />
      <Toast />
    </ContainerEquipment>
  );
}
