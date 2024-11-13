"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";
import { addTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const addTransaction = async (params: Omit<Prisma.TransactionCreateInput, "userId">) => {
  try {
    addTransactionSchema.parse(params);

    const { userId } = await auth();

    if (!userId) {
      throw new Error("Unauthorized");
    }

    await db.transaction.create({
      data: { ...params, userId },
    });
    
revalidatePath("/transactions")

    return { success: true, message: "Transação adicionada com sucesso!" };
  } catch (error) {
    return { success: false, message: "Falha ao adicionar transação - " + error };
  }
  
};
