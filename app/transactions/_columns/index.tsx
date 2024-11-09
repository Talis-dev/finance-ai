"use client"

import { Transaction } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import TransactionTypeBadge from "../_components/type-badge"
import { Button } from "@/app/_components/ui/button"
import { SquarePen, Trash2 } from "lucide-react"


const TRANSACTION_CATEGORY_LABELS = {
  HOUSING:"Moradia",
  TRANSPORTATION: "Transporte",
  FOOD: "Alimentação",
  ENTERTAINMENT: "Entreterimento",
  HEALTH: "Saúde",
  UTILITY: "Utilidades",
  SALARY: "Salário",
  EDUCATION: "Educação",
  OTHER: "Outros",
}

const TRANSACTION_PAYMENT_METHOD_LAVELS = {
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  PIX: "Pix",
  OTHER: "Outros",
}


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
        cell: () => {
          return(     
          <div className="col-row">
          <Button variant="ghost" className="text-muted-foreground">
            <SquarePen/>
          </Button>

          <Button variant="ghost" className="text-muted-foreground">
            <Trash2/>
          </Button>          
        </div>
        )
        }
        
      },     
]
