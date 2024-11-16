

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import TransactionsPieChart from "./_components/transactions-pie-chart";
import { getDashboard } from "../_actions/add-transactions/_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";


interface NomeProps {
  searchParams:{
    month: string
  }
}

const Home = async ({searchParams: {month}}: NomeProps) => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

const monthIsInvalid = !month || !isMatch(month,'MM')

if(monthIsInvalid) {
  redirect("?month=01")
}

const dashboard = await getDashboard(month)

  return (
<>
      <Navbar />

      <div className="p-4 ">

      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold ">Dashboard</h1>
        <div className="flex items-center gap-3">
          <p>Relatório IA</p>
          <TimeSelect/>
        </div>
        
      </div>

       <div className="grid grid-cols-[2fr,1fr]">

        <div className=" flex flex-col gap-6 ">
         <SummaryCards month={month} {...dashboard}/>   


<div className="grid grid-cols-[0.97fr,2fr] gap-6">
  
      <div className="">
                <TransactionsPieChart {...dashboard}/>
                
            </div>
 <div className=" max-h-[410px] ">
<ExpensesPerCategory expensesPerCategory={dashboard.totalExpensePerCategory}/>
</div>            
 </div>
      
        </div>
      

       </div>

      </div>
</>
  );
};

export default Home;
