"use client";

import {
  CardEquipment,
  ContainerHeaderEquipment,
  ContainerHeaderTitleEquipment,
  ContainerInputEquipment,
} from "./styles";
import InputEquipment from "../Input";
import Button from "../Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { equipmentSchema } from "@/utils/sendFormValidation";
import showToastError from "@/utils/toast-error";
import { Equipment } from "@/types/equipment";
import showToastSuccess from "@/utils/toast-success";
import { EquipmentForm } from "../Table/styles";
import { useHookData } from "@/hooks/useHookData";

export default function FormNewEquipment() {
  const { sendData } = useHookData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Omit<Equipment, "id">>({
    resolver: zodResolver(equipmentSchema),
  });

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
      await sendData({ newEquipment });
      showToastSuccess({ label: "Equipamento adicionado com sucesso!" });
    } catch (error) {
      showToastError({ label: "Erro ao adicionar o equipamento!" });
      console.log("Erro ao enviar novo equipamento", error);
    }
    reset();
  };

  return (
    <CardEquipment>
      <ContainerHeaderEquipment>
        <ContainerHeaderTitleEquipment>
          Adicione um novo equipamento
        </ContainerHeaderTitleEquipment>
      </ContainerHeaderEquipment>
      <ContainerInputEquipment>
        <EquipmentForm
          onSubmit={handleSubmit(onSubmit)}
          data-testid="NewEquipmentForm"
        >
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
  );
}
