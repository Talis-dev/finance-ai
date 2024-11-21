"use client";

import { ChartNoAxesCombined } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";


interface AddTransactionsButtonProps{
  userCanAddTransaction: boolean,
  transactionsLimitPerMonth: number,
  currentMonthTransactions: number,
}

const AddTransactionButton = ({userCanAddTransaction,
   transactionsLimitPerMonth,
    currentMonthTransactions}: AddTransactionsButtonProps) => {

  const [dialogIsOpen, setDialogIsOpen] = useState(false);


  return (
    <>
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild >
      <Button className={userCanAddTransaction ? "rounded-3xl bg-primary ":"rounded-3xl"}
       onClick={() => !userCanAddTransaction && setDialogIsOpen(true)}
        variant={userCanAddTransaction ? "destructive":"default"}
        >
          {userCanAddTransaction ? <Link href="/subscription">Adicionar Transação</Link>
          :"Adicionar Transação"}
        
        <ChartNoAxesCombined className="m-1" />
      </Button>
      </TooltipTrigger>
      <TooltipContent >
        {userCanAddTransaction ?  <p className="text-sm text-red-500">
        Plano Básico ({currentMonthTransactions}/{transactionsLimitPerMonth}) Limite atingido!
        </p> : <p>Adiciona uma nova transação</p>
        }

      </TooltipContent>
    </Tooltip>
</TooltipProvider>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};

export default AddTransactionButton;
