import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleArrowUp, CircleMinus, CirclePlus } from "lucide-react";

interface transactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: transactionTypeBadgeProps) => {
  if (transaction.type == TransactionType.DEPOSIT) {
    return (
      <Badge
        className="bg-muted bg-green-950 text-primary hover:bg-green-950 
            bg-opacity-50 font-semibold"
      >
        <CirclePlus className="p-1" />
        Deposito
      </Badge>
    );
  }
  if (transaction.type == TransactionType.EXPENSE) {
    return (
      <Badge className="bg-muted bg-red-950 bg-opacity-50 text-destructive hover:bg-red-950 font-semibold">
        <CircleMinus className="p-1" />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="bg-muted  text-secondary hover:bg-muted font-semibold">
      <CircleArrowUp className="p-1" />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
