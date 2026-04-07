import { useState } from "react";
import type { Transaction } from "./types/Transaction";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const deleteTransaction = (id: number) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>Budget Tracker</h1>
      <Balance transactions={transactions} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
    </div>
  );
}

export default App;