import { incomeFormData } from "@/schemas/incomes/income.schema";
import { authInstance } from "./axios";
import { updateincomeFormData } from "@/schemas/incomes/update-task.schema";

export class IncomeService {
    static async list() {
        try {
            const response = await authInstance({
                method: "GET",
                url: `/incomes`,
            })

            return response.data.data;
        } catch (error) {
            throw error
        }
    }

    static async getByUuid(id: number) {
        try {
            const response = await authInstance({
                method: "GET",
                url: `/incomes/details/${id}`,
            })

            return response.data;
        } catch (error) {
            throw error
        }
    }

    static async create(data: incomeFormData) {
        try {
            const response = await authInstance({
                method: "POST",
                url: "/incomes/create",
                data
            })

            return response.data;
        } catch (error) {
            throw error
        }
    }

    static async delete(id: number) {
        try {
            const response = await authInstance({
                method: "DELETE",
                url: `/incomes/${id}`,
            })

            return response.data;
        } catch (error) {
            throw error
        }
    }

    static async update(id: number, data: updateincomeFormData) {
        try {
            const response = await authInstance({
                method: "PUT",
                url: `/incomes/edit/${id}`,
                data,
            })

            return response.data;
        } catch (error) {
            throw error
        }
    }
}