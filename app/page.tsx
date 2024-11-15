
import { UserButton } from "@clerk/nextjs";
import { Button } from "./_components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "./_components/navbar";



const Home = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <div>
 <Navbar/>
    <div className="flex w-screen justify-center items-center ">
     
      <Button> loguin </Button>
    </div>

    </div>
  );
};

export default Home;
