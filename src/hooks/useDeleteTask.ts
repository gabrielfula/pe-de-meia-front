import { queryClient } from "@/services/react-query";
import { ExpenseService } from "@/services/expense.service";
import { useMutation } from "@tanstack/react-query";

export default function useDeleteTask() {
    return useMutation({
        mutationFn: async (id: number) => await ExpenseService.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["expenses"]
            });
        }
    })
}
