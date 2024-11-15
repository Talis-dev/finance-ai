"use client"

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";



const Navbar = () => {
    const pathName = usePathname()
    return (  
        <nav className=" flex justify-between p-3 border-b border-solid">
            {/* Esquerda*/}
            <div className="flex gap-10 items-center">

     <Image src="/logo_finance.svg" alt="finance Ai" width={173} height={39} />
    <Link href="/" className={pathName === "/" ? "p-1 text-primary" : "p-1 hover:text-primary hover:transform hover:-translate-y-1 transition-transform duration-400"}>
    Dashboard</Link>
    <Link href="/transactions" className={pathName === "/transactions" ? "p-1 text-primary" : "p-1 hover:text-primary hover:transform hover:-translate-y-1 transition-transform duration-400"}>
    Transações</Link>
    <Link href="/subscription" className={pathName === "/subscription" ? "p-1 text-primary" : "p-1 hover:text-primary hover:transform hover:-translate-y-1 transition-transform duration-400"}>
    Assinatura
    </Link>

            </div>
              {/* Direita*/}
              <UserButton showName />
        </nav>
    );
}
 
export default Navbar;