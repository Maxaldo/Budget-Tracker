interface FilterProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

function Filter({ currentFilter, onFilterChange }: FilterProps) {
  return (
    <div>
      <button onClick={() => onFilterChange("all")} disabled={currentFilter === "all"}>
        Tous
      </button>
      <button onClick={() => onFilterChange("income")} disabled={currentFilter === "income"}>
        Revenus
      </button>
      <button onClick={() => onFilterChange("expense")} disabled={currentFilter === "expense"}>
        Dépenses
      </button>
    </div>
  );
}

export default Filter;