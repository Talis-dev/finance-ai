

import { auth, clerkClient } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader } from "../_components/ui/card";
import { CheckCheck, X } from "lucide-react";
import AquirePlanButton from "./_components/aquire-plan-button";
import { Badge } from "../_components/ui/badge";

const Subscription = async () => {

    const {userId} = await auth()

    if (!userId){
      redirect("/login")
    }
const client = await clerkClient()
const user = await client.users.getUser(userId)
const hasProPlan = user?.publicMetadata.subscriptionPlan == "Pro"

    return ( <>
                <Navbar/>
              <div className="space-y-6 p-6 ">
                <h1 className="text-2xl font-semibold ">Assinaturas</h1>

                <div className="flex gap-6">
                  <Card className="w-[350px]">
                    <CardHeader className="border-b border-solid py-6 relative">
                    {!hasProPlan && (
                        <Badge className="absolute top-2 right-2 ">Ativo</Badge>
                      )}                      
                      <h2 className="text-center text-2xl font-semibold ">Plano Básico</h2>
                      <div className="flex items-center gap-3 justify-center">
                       <span className="text-4xl">R$</span>
                       <span className="text-6xl font-semibold">0</span>
                       <div className="text-2xl text-muted-foreground">/mês</div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6 py-8"> 
                      <div className="flex items-center gap-2 ">
                        <CheckCheck className="text-primary"/>
                        <p>Apenas 10 transaçoes por mês (7/10)</p>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <X/>
                        <p>Relatórios de IA</p>
                      </div>
                    </CardContent>
                  </Card>


                  <Card className="w-[350px]">
                    <CardHeader className="border-b border-solid py-6 relative">
                      {hasProPlan && (
                        <Badge className="absolute top-2 right-2 ">Ativo</Badge>
                      )}

                      <h2 className="text-center text-2xl font-semibold ">
                        Plano Pro</h2>
                      <div className="flex items-center gap-3 justify-center">
                       <span className="text-4xl">R$</span>
                       <span className="text-6xl font-semibold">19</span>
                       <div className="text-2xl text-muted-foreground">/mês</div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6 py-8"> 
                      <div className="flex items-center gap-2 ">
                        <CheckCheck className="text-primary"/>
                        <p>Transaçoes ilimitadas</p>
                      </div>
                      <div className="flex items-center gap-2 ">
                      <CheckCheck className="text-primary"/>
                        <p>Relatórios de IA</p>
                      </div>
                    <AquirePlanButton/>
                    </CardContent>
                  </Card>


                </div>
              </div>
         
    </>
       
     );
}
 
export default Subscription;