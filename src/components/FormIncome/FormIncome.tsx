import { useForm } from "react-hook-form";
import { toast } from "../ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../InputText/InputText";
import { Button } from "../ui/button";
import useCreateIncome from "@/hooks/useCreateIncome";
import { incomeFormData, incomeFormSchema } from "@/schemas/incomes/income.schema";

type FormIncomeProps = {
    mode: "edit" | "create";
    income?: any;
    onSuccess?: () => void;
};

export default function FormIncome({ mode, income, onSuccess }: FormIncomeProps) {
    const { mutateAsync: createIncome } = useCreateIncome();

    const { control, handleSubmit, reset } = useForm<incomeFormData>({
        resolver: zodResolver(incomeFormSchema),
        defaultValues: {
            description: income?.description || "",
            value: income?.value ?? undefined,
        },
    });

    const handleAction = async (data: incomeFormData) => {
        try {
            const response = await createIncome(data)

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
            <Button type="submit" size="sm" className="px-3">
                {mode === "create" ? "Criar" : "Salvar"}
            </Button>
        </form>
    );
}
