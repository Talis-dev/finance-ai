import { Button } from "@/app/_components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_PAYMENT_METHOD_ICONS } from "@/app/_consants/transactions";
import { formatCurrency } from "@/app/_utils/currency";
import { Transaction, TransactionType } from "@prisma/client";
import { CreditCard } from "lucide-react";
import Link from "next/link";


interface LastTransactionsProps {
    lastTransactions:Transaction[];
}

const LastTransactions = ({lastTransactions}:LastTransactionsProps) => {

const getPriceColor = (transaction: Transaction) =>{
if (transaction.type == TransactionType.EXPENSE) {
    return "text-red-500"
}
if (transaction.type == TransactionType.DEPOSIT) {
    return "text-primary"
}
    return "text-white"
}

    return ( 
        <ScrollArea className="rounded-md border">
            <CardHeader className="flex-row items-center justify-between">
                <CardTitle>Ultimas Transações </CardTitle>
                <Button variant="outline" className="rounded-full " asChild> 
                    <Link href="/transactions" >Ver mais</Link>
                </Button>
            </CardHeader>
            <CardContent className="space-y-2">
                {lastTransactions.map(transaction => (
                    <div className="flex justify-between items-center ">

                    <div className="flex items-center gap-3 bg">
                        <div className="bg-white bg-opacity-[8%] p-3 rounded-md">
                       
                        {TRANSACTION_PAYMENT_METHOD_ICONS[transaction.paymentMethod]}

                        </div>
                        <div>
                            <p>{transaction.name}</p>
                            <p>{
                        new Date(transaction.date).toLocaleDateString("pt-BR",{
                            day: '2-digit',
                        month:"short",
                        year:"numeric"
                        })} </p>
                        </div>

                    </div>
                    <p className={`text-sm ${getPriceColor(transaction)}`}>
        {transaction.type == TransactionType.DEPOSIT  ? "+" : "-" }
                      { formatCurrency(Number(transaction.amount))} </p>

                    </div>
                ))}

            </CardContent>
        </ScrollArea>
     );
}
 
export default LastTransactions;