import { incomeFormData } from "@/schemas/incomes/income.schema";
import { queryClient } from "@/services/react-query";
import { useMutation } from "@tanstack/react-query";
import { IncomeService } from "@/services/income.service";


export default function useCreateIncome() {
    return useMutation({
        mutationFn: async (data: incomeFormData) => await IncomeService.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["incomes"]
            });
        }
    })
}
