import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

import {
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
    XAxis,
    YAxis,
} from "recharts";

import Loading from "@/components/Loading/Loading";
import Error from "@/components/Error/Error";
import useFetchDashboard from "@/hooks/useFetchDashboard";


const expensesByCategoryConfig = {
    food: { label: "Alimentação", color: "hsl(var(--chart-1))" },
    transport: { label: "Transporte", color: "hsl(var(--chart-2))" },
    entertainment: { label: "Lazer", color: "hsl(var(--chart-3))" },
    health: { label: "Saúde", color: "hsl(var(--chart-4))" },
};

export default function DashboardPage() {
    const { data, isLoading, error } = useFetchDashboard();

    if (error) return <Error />;
    if (isLoading) return <Loading />;

    const {
        totalIncome,
        totalExpenses,
        remainingBalance,
        expensesByCategory,
        expensesLast5Months,
    } = data;

    const expensesByCategoryArray = Object.entries(expensesByCategory).map(
        ([name, value]) => ({
            name,
            value,
        })
    );

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Dashboard Financeiro</CardTitle>
                    <CardDescription>Resumo dos seus gastos e rendas</CardDescription>
                </CardHeader>
            </Card>

            <div className="grid grid-cols-12 gap-4">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Saldo Restante</CardTitle>
                        <CardDescription>Quanto ainda resta do mês</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl text-green-600 font-bold">
                            {remainingBalance.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </p>

                        <p className="text-sm mt-2 text-muted-foreground">
                            Renda:{" "}
                            {totalIncome.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Gastos:{" "}
                            {totalExpenses.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </p>
                    </CardContent>
                </Card>

                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Renda Total</CardTitle>
                        <CardDescription>Soma de todas as fontes de renda</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">
                            {totalIncome.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </p>

                        <p className="text-sm mt-2 text-muted-foreground">
                            Última atualização: hoje
                        </p>
                    </CardContent>
                </Card>

                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Gastos Totais</CardTitle>
                        <CardDescription>Total de despesas do mês atual</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold text-red-500">
                            {totalExpenses.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </p>
                        <p className="text-sm mt-2 text-muted-foreground">
                            Controle seus gastos antes que aumentem!
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-12 gap-4">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Gastos por Categoria</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={expensesByCategoryConfig}>
                            <PieChart>
                                <Pie
                                    data={expensesByCategoryArray}
                                    innerRadius={40}
                                    outerRadius={90}
                                    dataKey="value"
                                    nameKey="name"
                                >
                                    {expensesByCategoryArray.map((_, i) => (
                                        <Cell
                                            key={i}
                                            fill={`hsl(${i * 60}, 70%, 50%)`}
                                        />
                                    ))}
                                </Pie>

                                <ChartTooltip content={<ChartTooltipContent />} />
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card className="col-span-8">
                    <CardHeader>
                        <CardTitle>Gastos dos Últimos 5 Meses</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer
                            config={expensesByCategoryConfig}
                            className="h-[280px]"
                        >
                            <LineChart data={expensesLast5Months}>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="hsl(var(--primary))"
                                    strokeWidth={2}
                                />
                                <ChartTooltip content={<ChartTooltipContent />} />
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
