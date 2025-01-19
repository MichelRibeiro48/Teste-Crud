import PaginatedTable from "@/components/Table/table";
import { ContainerEquipment } from "./styles";
import { getData } from "@/api/crud";
import Toast from "@/components/Toast/toast";
import FormNewEquipment from "@/components/Form";

export default async function ElectronicEquipmentCRUD() {
  const data = await getData();
  return (
    <ContainerEquipment>
      <FormNewEquipment />
      <PaginatedTable data={data ?? []} />
      <Toast />
    </ContainerEquipment>
  );
}
