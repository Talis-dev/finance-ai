"use client"

import { Button } from "@/app/_components/ui/button";
import { createStripeCheckout } from "../_actions/create-checkout";
import {loadStripe} from "@stripe/stripe-js"
import { useUser } from "@clerk/nextjs";
import Link from "next/link";



const AquirePlanButton = () => {
    const {user} = useUser()
const handleAcquirePlanClick = async () =>{
const {sessionId} = await createStripeCheckout()
if(!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY){
    throw new Error("Stripe publishable key not found")
}
const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,{

})

if(!stripe){
    throw new Error("Stripe not found")
}
await stripe.redirectToCheckout({sessionId})
}

const hasProPlan = user?.publicMetadata.subscriptionPlan == "Pro"

if(hasProPlan) {
    return (
        <Button className="w-full bg-green-500 bg-opacity-15 "
        variant="link"
        > 
         <Link href={`${process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL as string}?prefilled_email=${user.emailAddresses[0].emailAddress}`}>
         Gerenciar meu plano</Link>   
         </Button>        
    )
}

    return ( 
        <Button className= "w-full"
        onClick={handleAcquirePlanClick}
        > Adquirir plano   
         </Button>
     );
}
 
export default AquirePlanButton;