import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "../_components/button-add-transaction";
import { Toaster } from "../../app/_components/ui/sonner";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getCurrentMonthTransactions } from "../_data/get-current-month-transaction";
import { canUserAddTransactions } from "../_data/can-user-add-transaction";


const TransactionsPage = async () => {
  
const {userId} = await auth()
  if (!userId){
    redirect("/login")
  }

const transactions = await db.transaction.findMany({
  where: {
    userId
  }
});

const userCanUserAddTransactions  = await canUserAddTransactions()
const { currentMonthTransactions, transactionsLimitPerMonth } = await getCurrentMonthTransactions();
  return (
    <>
    <Navbar/>
    <div className="p-6 space-y-6">
      <div className="flex w-full items-center justify-between ">
        <h1 className="text-2xl font-bold w-full">Transações</h1>
    <AddTransactionButton userCanAddTransaction={userCanUserAddTransactions} 
    transactionsLimitPerMonth={transactionsLimitPerMonth} 
    currentMonthTransactions = {currentMonthTransactions}/>
      </div>
      <Toaster />
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
    </>
  );
};

export default TransactionsPage;
