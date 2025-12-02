import Error from "@/components/Error/Error";
import Loading from "@/components/Loading/Loading";
import TableHeadRow from "@/components/TableHeadRow/TableHeadRow";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableRow } from "@/components/ui/table";
import useFetchSalary from "@/hooks/useFetchSalary";
import { IExpenses } from "@/interfaces/expenses";
import CreateIncome from "@/components/CreateIncome/CreateIncome";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoveHorizontalIcon } from "lucide-react";
import DeleteTask from "@/components/DeleteTask/DeleteTask";


export default function SalaryPage() {

    const { data, isLoading, error } = useFetchSalary();

    if (error) {
        return <Error />;
    }
    if (isLoading) {
        return <Loading />;
    }

    return (
        <Card>
            <div className="flex justify-between items-center pr-16">
                <CardHeader>
                    <CardTitle>Renda Mensal</CardTitle>
                    <CardDescription>Painel de gerenciamento de todas as rendas do mês.</CardDescription>
                </CardHeader>
                <div>
                    <CreateIncome />
                </div>
            </div>
            <CardContent>
                <Table>
                    <TableCaption>Uma lista de todos as rendas mensais.</TableCaption>
                    <TableHeadRow head={["Gasto", "Valor", "Data", ""]} />
                    {data.map((item: IExpenses) => (
                        <TableBody>
                            <TableRow className="text-center">
                                <TableCell className="font-medium">{item.description}</TableCell>
                                <TableCell>
                                    {Number(item.value).toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </TableCell>
                                <TableCell className="font-medium">{item.date}</TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                        <Button size="icon" variant="ghost">
                                            <MoveHorizontalIcon className="h-4 w-4" />
                                        </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DeleteTask name={item.description} id={item.id} type={2} />
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    ))}
                </Table>
            </CardContent>
        </Card>
    );
}
