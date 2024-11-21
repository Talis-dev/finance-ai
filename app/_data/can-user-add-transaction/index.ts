import { auth, clerkClient } from "@clerk/nextjs/server";
import { getCurrentMonthTransactions } from "../get-current-month-transaction";


export const canUserAddTransactions = async () => {
    const {userId} = await auth()
    if(!userId){
       throw new Error("Unauthorized") 
    }

const client = await clerkClient()
const user = await client.users.getUser(userId)
if (user?.publicMetadata.subscriptionPlan == "Pro"){
    return false
}

const { currentMonthTransactions, transactionsLimitPerMonth } = await getCurrentMonthTransactions();
if(currentMonthTransactions >= transactionsLimitPerMonth){
return true
}
return false
}