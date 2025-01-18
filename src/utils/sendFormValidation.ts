import { z } from "zod";

export const equipmentSchema = z.object({
    name: z.string().nonempty("O nome é obrigatório"),
    type: z.string().nonempty("O tipo é obrigatório"),
    brand: z.string().nonempty("A marca é obrigatória"),
    acquisitionDate: z
      .string()
      .optional(),
  });