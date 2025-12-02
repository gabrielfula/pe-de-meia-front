import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import FormExpense from "../FormExpense/FormExpense";


export default function CreateExpense() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger>
                        <Button className="space-x-2" onClick={() => setIsOpen(true)}>
                            <Plus color="#fff" strokeWidth={2} size={22} />
                            Adicionar Gasto
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Dados do gasto</DialogTitle>
                            <DialogDescription>
                                Adicione nos campos abaixo detalhes do gasto em questão.
                            </DialogDescription>
                        </DialogHeader>
                        <FormExpense mode="create" />
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
}
