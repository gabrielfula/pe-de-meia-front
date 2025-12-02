import { queryClient } from "@/services/react-query";
import { ExpenseService } from "@/services/expense.service";
import { useMutation } from "@tanstack/react-query";
import { expenseFormData } from "@/schemas/incomes/expense.schema";


export default function useCreateExpense() {
    return useMutation({
        mutationFn: async (data: expenseFormData) => await ExpenseService.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["expenses"]
            });
        }
    })
}
