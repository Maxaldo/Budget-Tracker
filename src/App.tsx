import { useState } from "react";
import type { Transaction } from "./types/Transaction";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";
import Filter from "./components/Filter";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filter, setFilter] = useState<string>("all");

  const deleteTransaction = (id: number) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const filteredTransactions = transactions.filter((t) => {
    if (filter === "all") return true;
    return t.type === filter;
  });

  return (
    <div>
      <h1>Budget Tracker</h1>
      <Balance transactions={transactions} />
      <Filter currentFilter={filter} onFilterChange={setFilter} />
      <TransactionList transactions={filteredTransactions} onDelete={deleteTransaction} />
    </div>
  );
}

export default App;