import type { Transaction } from "../types/Transaction";

interface BalanceProps {
  transactions: Transaction[];
}

function Balance({ transactions }: BalanceProps) {
  const totalRevenus = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalDepenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const solde = totalRevenus - totalDepenses;

  return (
    <div>
      <h2>Résumé</h2>
      <p>Revenus : {totalRevenus} €</p>
      <p>Dépenses : {totalDepenses} €</p>
      <p>Solde : {solde} €</p>
    </div>
  );
}

export default Balance;