import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { GemIcon, HandCoins, TrendingDown, TrendingUp } from "lucide-react";
import SummaryCard from "./summary-card";
import AddTransactionButton from "@/app/_components/button-add-transaction";





interface SummaryCards {
    month: string,
    balance: number,
    depositTotal: number,
    investmentsTotal:number,
    expensesTotal:number
}

const SummaryCards = async ({month,
    balance,
    depositTotal,
    investmentsTotal,
    expensesTotal
}: SummaryCards) => {




    return ( 
        <div className="space-y-6 mt-1">
            {/* Primeiro Card*/}
         
            <Card className=" bg-white bg-opacity-5">
  <CardHeader className="flex-row items-center gap-2">
    <GemIcon size={16} className="text-secondary bg-muted rounded-sm size-8 p-2"/>
    <p className="text-2xl">Saldo</p>
  </CardHeader>

  <CardContent className="flex justify-between">
    <p className="text-3xl font-bold w-full"> {Intl.NumberFormat("pt-BR",{
                style: "currency",
                currency:"BRL",
            }).format(balance)}</p>
    <AddTransactionButton />
  </CardContent>

</Card>

        {/* Outros Cards  parou no minuto 00:25*/} 

        <div className="grid grid-cols-3 gap-6">

        <SummaryCard icon={ <HandCoins size={16} className="text-secondary bg-muted rounded-sm size-8 p-2"/> }
        title="Investido"
        amount={investmentsTotal} />

        <SummaryCard icon={ <TrendingUp size={16} className="text-primary bg-green-500 rounded-sm size-8 p-2 bg-opacity-10"/> }
        title="Receita"
        amount={depositTotal} />

        <SummaryCard icon={ <TrendingDown size={16} className="text-destructive bg-red-500 rounded-sm size-8 p-2 bg-opacity-10"/> }
        title="Despesa"
        amount={expensesTotal} />


        </div>

        </div>
     );
}
 
export default SummaryCards;