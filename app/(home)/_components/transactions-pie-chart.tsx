"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionPercentageType } from "@/app/_data/get-dashboard/types";
import { HandCoins, TrendingDown, TrendingUp } from "lucide-react";
import PercentageItem from "./percentage-item";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#ffff",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#55b02e",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#E93030",
  },
} satisfies ChartConfig;

interface TransactionsPieChartProps {
  typesPercentage: TransactionPercentageType;
  depositTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const TransactionsPieChart = ({
  depositTotal,
  investmentsTotal,
  expensesTotal,
  typesPercentage,
}: TransactionsPieChartProps) => {
  const chartData = [
    { type: TransactionType.DEPOSIT, amount: depositTotal, fill: "#55bb2e" },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#fff",
    },
    { type: TransactionType.EXPENSE, amount: expensesTotal, fill: "#E93030" },
  ];

  return (
    <Card className=" p-5">
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={70}
            />
          </PieChart>
        </ChartContainer>

        <div className=" space-y-3">
          <PercentageItem
            icon={
              <HandCoins
                size={16}
                className="text-secondary bg-muted rounded-sm size-8 p-2"
              />
            }
            title="Investimentos"
            value={typesPercentage[TransactionType.INVESTMENT]}
          />

          <PercentageItem
            icon={
              <TrendingUp
                size={16}
                className="text-primary bg-green-500 rounded-sm size-8 p-2 bg-opacity-10"
              />
            }
            title="Ganhos"
            value={typesPercentage[TransactionType.DEPOSIT]}
          />

          <PercentageItem
            icon={
              <TrendingDown
                size={16}
                className="text-destructive bg-red-500 rounded-sm size-8 p-2 bg-opacity-10"
              />
            }
            title="Gastos"
            value={typesPercentage[TransactionType.EXPENSE]}
          />
        </div>
      </CardContent>
    </Card>
  );
};
export default TransactionsPieChart;
