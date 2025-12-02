import { ExpenseService } from "@/services/expense.service";
import { queryClient } from "@/services/react-query";
import { useMutation } from "@tanstack/react-query";
import { updateincomeFormData } from "@/schemas/incomes/update-task.schema";

export default function useUpdateTask() {
    return useMutation({
        mutationFn: async ({ id, data }: { id: number, data: updateincomeFormData }) => await ExpenseService.update(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["tasks"]
            });
        }
    })
}
