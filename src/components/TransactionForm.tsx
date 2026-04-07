import { useState } from "react";
import type { Transaction, TransactionType } from "../types/Transaction";

interface TransactionFormProps {
    onAdd: (transaction: Transaction) => void;
}

function TransactionForm({ onAdd }: TransactionFormProps) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState<TransactionType>("income");
    const [date, setDate] = useState("");

    const handleSubmit = () => {
        if (!title || !amount || !date) {
            alert("Remplis tous les champs");
            return;
        }

        if (isNaN(Number(amount)) || Number(amount) <= 0) {
            alert("Le montant doit être un nombre positif");
            return;
        }

        const newTransaction: Transaction = {
            id: Date.now(),
            title,
            amount: Number(amount),
            type,
            date,
        };

        onAdd(newTransaction);
        setTitle("");
        setAmount("");
        setType("income");
        setDate("");
    };

    return (
        <div>
            <h2>Ajouter une transaction</h2>
            <input
                type="text"
                placeholder="Titre"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Montant"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <select value={type} onChange={(e) => setType(e.target.value as TransactionType)}>
                <option value="income">Revenu</option>
                <option value="expense">Dépense</option>
            </select>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <button onClick={handleSubmit}>Ajouter</button>
        </div>
    );
}

export default TransactionForm;