import { z } from "zod";

export const expenseFormSchema = z.object({
    description: z.string().min(1, "Descrição obrigatória"),
    value: z.coerce.number().positive("Valor deve ser maior que zero"),
    categoryId: z.coerce.number({ required_error: "Categoria obrigatória" }),
});

export type expenseFormData = z.infer<typeof expenseFormSchema>;
