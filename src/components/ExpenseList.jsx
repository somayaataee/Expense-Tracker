import Expenses from "./ExpenseItem";

export default function ExpenseList({ expenses,onDeleteExpense }) {
  if(expenses.lenght == 0){
    <p className="empty">No expenses yet. Add your first expenses ✅</p>
  }

  return (
    <ul className="list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense}  onDelete={onDeleteExpense}></ExpenseItem>
      ))}
    </ul>
  );
}
