import { useState } from "react";
import { Transaction } from "./types/Transaction";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const deleteTransaction = (id: number) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>Budget Tracker</h1>
    </div>
  );
}

export default App;