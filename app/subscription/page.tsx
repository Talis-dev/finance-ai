import { auth } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import { redirect } from "next/navigation";

const Subscription = async () => {

    const {userId} = await auth()

    if (!userId){
      redirect("/login")
    }


    return ( <div>
 <Navbar/>
         <h1>subiscription page</h1>
    </div>
       
     );
}
 
export default Subscription;