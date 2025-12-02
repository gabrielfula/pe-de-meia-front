import { authInstance } from "./axios";

export class DashboardService {
    static async list() {
        try {
            const response = await authInstance({
                method: "GET",
                url: "/dashboard",
            })

            return response.data.data;
        } catch (error) {
            throw error
        }
    }
}