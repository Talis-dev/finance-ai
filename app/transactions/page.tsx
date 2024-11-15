import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "../_components/button-add-transaction";
import { Toaster } from "../../app/_components/ui/sonner";
import Navbar from "../_components/navbar";

const Transactions = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <>
    <Navbar/>
    <div className="p-6 space-y-6">
      <div className="flex w-full items-center justify-between ">
        <h1 className="text-2xl font-bold w-full">Transações</h1>
        <AddTransactionButton />
      </div>
      <Toaster />
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
    </>
  );
};

export default Transactions;
