import type { Transaction } from "../types/Transaction";
import TransactionItem from "./TransactionItem";

interface TransactionListProps {
  transactions: Transaction[];
  onDelete: (id: number) => void;
}

function TransactionList({ transactions, onDelete }: TransactionListProps) {
  if (transactions.length === 0) {
    return <p>Aucune transaction pour le moment.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Titre</th>
          <th>Montant</th>
          <th>Type</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t) => (
          <TransactionItem key={t.id} transaction={t} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionList;