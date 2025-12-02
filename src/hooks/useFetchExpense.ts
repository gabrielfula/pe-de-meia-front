import { ExpenseService } from "@/services/expense.service";
import { useQuery } from "@tanstack/react-query";

export default function useFetchExpense() {
    return useQuery({
        queryKey: ["expenses"],
        queryFn: () => ExpenseService.list(),
    });
}