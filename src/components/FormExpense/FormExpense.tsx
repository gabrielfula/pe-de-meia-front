import { useForm } from "react-hook-form";
import { toast } from "../ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../InputText/InputText";
import { Button } from "../ui/button";
import { mockCategories } from "@/mocks/categories";
import { expenseFormData, expenseFormSchema } from "@/schemas/incomes/expense.schema";
import useCreateExpense from "@/hooks/useCreateExpense";

type FormExpenseProps = {
    mode: "edit" | "create";
    income?: any;
    onSuccess?: () => void;
};

export default function FormExpense({ mode, income, onSuccess }: FormExpenseProps) {
    const { mutateAsync: createExpense } = useCreateExpense();

    const { control, handleSubmit, reset } = useForm<expenseFormData>({
        resolver: zodResolver(expenseFormSchema),
        defaultValues: {
            description: income?.description ?? "",
            value: income?.value ?? undefined,
            categoryId: income?.categoryId ?? undefined,
        },
    });

    const handleAction = async (data: expenseFormData) => {
        try {
            const response = await createExpense(data);

            if (response?.data) onSuccess?.();
            reset();

            toast({
                title: `Registro ${mode === "create" ? "criado" : "editado"} com sucesso!`,
                variant: "default",
            });
        } catch (ex: any) {
            toast({
                title: `Erro ao ${mode === "create" ? "criar" : "editar"}`,
                variant: "destructive",
                description: ex.response?.data?.message || "Erro desconhecido",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(handleAction)} className="flex flex-col gap-4 my-4">
            <TextInput
                name="description"
                type="text"
                label="Descrição"
                control={control}
                placeholder="Ex: Compra no mercado"
            />
            <TextInput
                name="value"
                type="number"
                label="Valor"
                control={control}
                placeholder="Ex: 150.75"
            />
            <label className="text-sm font-medium">Categoria</label>
            <select
                {...control.register("categoryId")}
                className="border rounded-md p-2"
                defaultValue={income?.categoryId || ""}
            >
                <option value="">Selecione...</option>
                {mockCategories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                        {cat.name}
                    </option>
                ))}
            </select>
            <Button type="submit" size="sm" className="px-3">
                {mode === "create" ? "Criar" : "Salvar"}
            </Button>
        </form>
    );
}
