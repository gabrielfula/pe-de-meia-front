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
import FormIncome from "../FormIncome/FormIncome";


export default function CreateIncome() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger>
                        <Button className="space-x-2" onClick={() => setIsOpen(true)}>
                            <Plus color="#fff" strokeWidth={2} size={22} />
                            Adicionar Renda
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Dados da renda</DialogTitle>
                            <DialogDescription>
                                Adicione nos campos abaixo detalhes da renda em questão.
                            </DialogDescription>
                        </DialogHeader>
                        <FormIncome mode="create" />
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
}
