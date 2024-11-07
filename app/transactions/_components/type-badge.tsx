import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgrProps {
    transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgrProps) => {
    if (transaction.type === TransactionType.DEPOSIT) {
        return (
            <Badge className="bg-muted font-bold text-primary hover:bg-muted">
                <CircleIcon className="mr-2 fill-primary" size={10} />
                Depósito
            </Badge>
        );
    }
    if (transaction.type === TransactionType.EXPENSE) {
        return (
            <Badge className="font-bold text-red-600 bg-red-500 bg-opacity-10 hover:bg-muted">
                <CircleIcon className=" mr-2 fill-red-600" size={10} />
                Despesa
            </Badge>
        );
    }
    return (
        <Badge className="font-bold text-white bg-white bg-opacity-10 hover:bg-muted">
            <CircleIcon className="mr-2 fill-white" size={10} />
            Investimento
        </Badge>
    );
};

export default TransactionTypeBadge;
