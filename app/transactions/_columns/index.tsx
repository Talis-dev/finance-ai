"use client"

import { TRANSACTION_CATEGORY_LABELS, TRANSACTION_PAYMENT_METHOD_LAVELS } from "@/app/_consants/transactions"
import { Transaction } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import TransactionTypeBadge from "../_components/type-badge"
import { Button } from "@/app/_components/ui/button"
import { Trash2 } from "lucide-react"
import EditTransactionButton from "../_components/edit-transaction-button"



export const transactionColumns: ColumnDef<Transaction>[] = [
    {
      accessorKey: "name",
      header: "Nome",
    },
    {
        accessorKey: "type",
        header: "Tipo",
        cell: ({row:{original: transaction}}) => (
          <TransactionTypeBadge transaction={transaction} />
        )
      },
      {
        accessorKey: "category",
        header: "Categoria",
        cell: ({row:{original: transaction}}) => TRANSACTION_CATEGORY_LABELS[transaction.category]
      },
      {
        accessorKey: "paymentMethod",
        header: "Métado de Pagamento",
        cell: ({row:{original: transaction}}) => TRANSACTION_PAYMENT_METHOD_LAVELS[transaction.paymentMethod]
      },
      {
        accessorKey: "date",
        header: "Data",
        cell: ({row:{original: transaction}}) => {
         return new Date(transaction.date).toLocaleDateString("pt-BR", {
            day:"2-digit",
            month:"long",
            year:"numeric"
          })
        } 
      },
      {
        accessorKey: "amount",
        header: "Valor",
        cell: ({row:{original: transaction}}) => {
          return new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
          }).format(Number(transaction.amount))
        }

      },
       {
        accessorKey: "action",
        header: "",
        cell: ({row:{original: transaction}}) => {
          return(     
          <div className="col-row">

          <EditTransactionButton transaction={transaction}/>

          <Button variant="ghost" className="text-muted-foreground">
            <Trash2/>
          </Button>          
        </div>
        )
        }
        
      },     
]
