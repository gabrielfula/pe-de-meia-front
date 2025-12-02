import { authInstance } from "./axios";
import { updateincomeFormData } from "@/schemas/incomes/update-task.schema";
import { expenseFormData } from "@/schemas/incomes/expense.schema";

export class ExpenseService {
    static async list() {
        try {
            const response = await authInstance({
                method: "GET",
                url: `/expenses`,
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
                url: `/expenses/details/${id}`,
            })

            return response.data;
        } catch (error) {
            throw error
        }
    }

    static async create(data: expenseFormData) {
        try {
            const response = await authInstance({
                method: "POST",
                url: "/expenses/create",
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
                url: `/expenses/${id}`,
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
                url: `/expenses/edit/${id}`,
                data,
            })

            return response.data;
        } catch (error) {
            throw error
        }
    }
}