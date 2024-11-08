import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { ChartNoAxesCombined } from 'lucide-react';
import { transactionColumns } from "./_columns";



const Transactions = async () => {

    const transactions = await db.transaction.findMany({})

    return ( 
        <div className="p-6 space-y-6">
          
          <div className="flex w-full items-center justify-between ">
<h1 className="text-2xl font-bold ">Transações</h1>
<Button className="rounded-3xl" >Adicionar Transação 
<ChartNoAxesCombined className="m-1" />
</Button>
          </div>

          <DataTable columns={transactionColumns} data={transactions} />


        </div>
     );
}
 
export default Transactions;