export default function ExpenseItem({expenses}){
    return(
        <li className="item">
            <div>
                <div className="itemTitle">
                    {expenses.title}
                </div>
                <div className="itemMeta">
                    {expenses.category}
                </div>
            </div>
            <div className="amount">
                ${expenses.amount}
            </div>
        </li>
    )
}