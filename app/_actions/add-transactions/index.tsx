"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";
import { upsertTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const upsertTransaction = async (
  params: Omit<Prisma.TransactionCreateInput, "userId">
) => {
  try {
    upsertTransactionSchema.parse(params);

    const { userId } = await auth();

    if (!userId) {
      throw new Error("Unauthorized");
    }

    if (params.id) {
      // Edita a transação se o ID existir
      await db.transaction.update({
        where: { id: params.id },
        data: { ...params, userId },
      });
    } else {
      // Cria uma nova transação se o ID não existir
      await db.transaction.create({
        data: { ...params, userId },
      });
    }

    revalidatePath("/transactions");

    return { success: true, message: params.id ? "Transação Editada com sucesso!" : "Transação adicionada com sucesso!" };
  } catch (error) {
    return {
      success: false,
      message: "Falha ao adicionar transação - " + error,
    };
  }
};
