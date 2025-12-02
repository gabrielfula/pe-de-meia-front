import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "../ui/use-toast";
import useDeleteTask from "@/hooks/useDeleteTask";
import useDeleteIncome from "@/hooks/useDeleteIncome";

interface IDeleteTask {
    name: string;
    id: number;
    type: number;
}

export default function DeleteTask({ name, id, type }: IDeleteTask) {

    const { mutateAsync: deleteTask } = useDeleteTask();
    const { mutateAsync: deleteIncomes } = useDeleteIncome();

    const handleDelete = async (id: number) => {

        try {
            type === 1 ? await deleteTask(id) : await deleteIncomes(id);

            toast({
                title: "Excluído",
                variant: "default",
                description: "Excluído com sucesso",
            });
        } catch (ex: any) {
            toast({
                title: "Não foi possível criar a Tarefa",
                variant: "destructive",
                description: `${ex.response.data.message || "Erro desconhecido"}!`,
            });
        }
    }

    return (
        <>
            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent w-full focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                            Deletar
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Confirmar exclusão</DialogTitle>
                            <DialogDescription>
                                Você tem certeza que deseja excluir <span className="font-semibold">{name}</span> ?
                            </DialogDescription>
                        </DialogHeader>
                        <div>
                            <Button type="submit" size="sm" className="px-3" onClick={() => handleDelete(id)}>Excluir</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}
