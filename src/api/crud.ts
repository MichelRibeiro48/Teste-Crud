import { Equipment } from "@/types/equipment";
import { api } from "./api";
import { AxiosResponse } from "axios";


export const getData = async (): Promise<Equipment[] | undefined> => {
    try {
        const response = await api.get<Equipment[]>('/data');
        return response.data;
    } catch (e) {
        console.log('Erro ao pegar o registro', e);
    }
};

export const createData = async (newEquipment: Omit<Equipment, 'id'>): Promise<Equipment | undefined> => {
    try {
      const response: AxiosResponse<Equipment> = await api.post('/data', newEquipment);
      return response.data;
    } catch (e) {
      console.error('Erro ao criar o registro:', e);
    }
  };
  
  export const updateData = async (id: string, updatedEquipment: Partial<Equipment>): Promise<Equipment | undefined> => {
    try {
      const response: AxiosResponse<Equipment> = await api.patch(`/data/${id}`, updatedEquipment);
      return response.data;
    } catch (e) {
      console.error(`Erro ao atualizar o registro com ID ${id}:`, e);
    }
  };
  
  export const deleteData = async (id: string): Promise<boolean> => {
    try {
      await api.delete(`/data/${id}`);
      return true;
    } catch (e) {
      console.error(`Erro ao deletar o registro com ID ${id}:`, e);
      return false;
    }
  };