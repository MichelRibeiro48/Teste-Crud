import { createData, deleteData, updateData } from "@/api/crud";
import { Equipment } from "@/types/equipment";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useHookData = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: updateNewData } = useMutation({
    mutationFn: async ({
      id,
      newEquipment,
    }: {
      id: string;
      newEquipment: Equipment;
    }) => await updateData(id, newEquipment),

    onSuccess: (updatedEquipment, variables) => {
      queryClient.setQueriesData(
        { queryKey: ["EquipmentList"] },
        (data: Equipment[]) => {
          const updatedData = data.map((equipment: Equipment) =>
            equipment.id === variables.id ? updatedEquipment : equipment
          );

          return updatedData;
        }
      );
    },
  });

  const { mutateAsync: deleteNewData } = useMutation({
      mutationFn: async ({ id }: { id: string }) => {
        return await deleteData(id);
      },
  
      onSuccess: (_, variables) => {
        queryClient.setQueriesData(
          { queryKey: ["EquipmentList"] },
          (data?: Equipment[]) => {
            if (!data) return [];
  
            const updatedData = data.filter(
              (equipment: Equipment) => equipment.id !== variables.id
            );
  
            return updatedData;
          }
        );
      },
    });

    const { mutateAsync: sendData } = useMutation({
        mutationFn: async ({ newEquipment }: { newEquipment: Equipment }) =>
          await createData(newEquipment),
    
        onSuccess: (_, variables) => {
          queryClient.setQueriesData(
            { queryKey: ["EquipmentList"] },
            (data: Equipment[]) => {
              return [variables.newEquipment, ...data];
            }
          );
        },
      });

  return { updateNewData, deleteNewData, sendData };
};