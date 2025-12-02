import { IncomeService } from "@/services/income.service";
import { useQuery } from "@tanstack/react-query";

export default function useFetchSalary() {
    return useQuery({
        queryKey: ["incomes"],
        queryFn: () => IncomeService.list(),
    });
}