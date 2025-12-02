import { DashboardService } from "@/services/dashboard.service";
import { useQuery } from "@tanstack/react-query";

export default function useFetchDashboard() {
    return useQuery({
        queryKey: ["dashboard"],
        queryFn: () => DashboardService.list(),
    });
}
