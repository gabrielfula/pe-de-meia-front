import Error from "@/components/Error/Error";
import ListTasks from "@/components/ListTasks/ListTasks";
import Loading from "@/components/Loading/Loading";
import TableHeadRow from "@/components/TableHeadRow/TableHeadRow";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableCaption } from "@/components/ui/table";
import useFetchExpense from "@/hooks/useFetchTasks";

import { IExpenses } from "@/interfaces/expenses";
import CreateExpense from "@/components/CreateExpense/CreateExpense";

export default function ExpensePage() {

    const { data, isLoading, error } = useFetchExpense();

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
                    <CardTitle>Gastos Mensais</CardTitle>
                    <CardDescription>Painel de gerenciamento de todos os gastos do mês.</CardDescription>
                </CardHeader>
                <div>
                    <CreateExpense />
                </div>
            </div>
            <CardContent>
                <Table>
                <TableCaption>Uma lista de todos os gastos mensais.</TableCaption>
                <TableHeadRow head={["Gasto", "Categoria", "Valor", "Data", ""]} />
                {data.map((item: IExpenses) => (
                    <ListTasks
                        key={item.id}
                        id={item.id}
                        description={item.description}
                        date={item.date}
                        value={item.value}
                        category={item.category}
                    />
                ))}
                </Table>
            </CardContent>
        </Card>
    );
}
