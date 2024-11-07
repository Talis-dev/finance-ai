import { UserButton } from "@clerk/nextjs";
import { Button } from "./_components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <div className="flex w-screen justify-center items-center ">
      <h1 className="text-center text-xl "> hello world</h1>
      <Button> loguin </Button>
      <UserButton showName></UserButton>
    </div>
  );
};

export default Home;
