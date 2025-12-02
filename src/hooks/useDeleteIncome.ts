import { queryClient } from "@/services/react-query";
import { useMutation } from "@tanstack/react-query";
import { IncomeService } from "@/services/income.service";

export default function useDeleteIncome() {
    return useMutation({
        mutationFn: async (id: number) => await IncomeService.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["incomes"]
            });
        }
    })
}
