"use client"

import { SquarePen } from "lucide-react";
import { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import { Transaction } from "@prisma/client";



interface EditTransactionButtonProps {
    transaction: Transaction
}

const EditTransactionButton = ({transaction}: EditTransactionButtonProps) => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false) 

    return ( 
<> 
           <Button variant="ghost" className="text-muted-foreground" onClick={() => setDialogIsOpen(true)} >
           <SquarePen/>
           </Button>      
      <UpsertTransactionDialog 
      isOpen={dialogIsOpen} 
      setIsOpen={setDialogIsOpen}
      defaultValue={{
        ...transaction,
        amount: Number(transaction.amount) }}
        transactionId={transaction.id}
        />
</>

     );
}
 
export default EditTransactionButton;