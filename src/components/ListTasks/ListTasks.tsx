import { TableBody, TableCell, TableRow } from "../ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoveHorizontalIcon } from "lucide-react";
import DeleteTask from "../DeleteTask/DeleteTask";
import { IExpenses } from "@/interfaces/expenses";

export default function ListTasks({ id, date, description, category, value }: IExpenses) {

  return (
    <TableBody>
        <TableRow className="text-center">
            <TableCell className="font-medium">{description}</TableCell>
            <TableCell className="font-medium">{category}</TableCell>
            <TableCell>
                {Number(value).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                })}
            </TableCell>
            <TableCell className="font-medium">{date}</TableCell>
            <TableCell>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost">
                        <MoveHorizontalIcon className="h-4 w-4" />
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DeleteTask name={description} id={id} type={1} />
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    </TableBody>
  );
}
