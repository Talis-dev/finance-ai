

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";


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

  return (
    <div>
      <Navbar />

      <div className="p-6">

      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold ">Dashboard</h1>
        <div className="flex items-center gap-3">
          <p>Relatório IA</p>
          <TimeSelect/>
        </div>
        
      </div>
       
       <SummaryCards month={month}/>
      </div>

     
    </div>
  );
};

export default Home;
