import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { endOfMonth, startOfMonth } from "date-fns";


export const getCurrentMonthTransactions = async () => {
    const {userId} = await auth()
    if(!userId){
     throw new Error("Unauthorized")   
    }
    const transactionsLimitPerMonth = 15;
    const currentMonthTransactions = await db.transaction.count({
      where:{
        userId,
        createdAt:{
          gte: startOfMonth(new Date()),
          lt: endOfMonth(new Date())
        }
      }
    })
    return { currentMonthTransactions, transactionsLimitPerMonth };
}