import type { Transaction } from "../types/Transaction";

interface TransactionItemProps {
  transaction: Transaction;
  onDelete: (id: number) => void;
}

function TransactionItem({ transaction, onDelete }: TransactionItemProps) {
  return (
    <tr>
      <td>{transaction.title}</td>
      <td>{transaction.amount} €</td>
      <td>{transaction.type === "income" ? "Revenu" : "Dépense"}</td>
      <td>{transaction.date}</td>
      <td>
        <button onClick={() => onDelete(transaction.id)}>Supprimer</button>
      </td>
    </tr>
  );
}

export default TransactionItem;