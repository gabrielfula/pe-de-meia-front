import { z } from "zod";

export const incomeFormSchema = z.object({
    description: z.string().min(1, "Descrição obrigatória"),
    value: z.coerce.number().positive("Valor deve ser maior que zero"),
});

export type incomeFormData = z.infer<typeof incomeFormSchema>;
