import { ExpenseService } from "@/services/expense.service";
import { useQuery } from "@tanstack/react-query";

export default function useFetchTaskByUuid(id: number) {
  return useQuery({
    queryKey: ["taskByUuid", id],
    queryFn: async () => await ExpenseService.getByUuid(id),
  });
}