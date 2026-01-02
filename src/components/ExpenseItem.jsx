export default function ExpenseItem({expenses,onDelete}){
    return(
        <li className="item">
            <div>
                <div className="itemTitle">  {expenses.title} </div>
                <div className="itemMeta"> {expenses.category} </div>
            </div>
            <div className="amount"> ${expenses.amount}</div>
            <button className="btn sm danger" onClick={()=> onDelete(expenses.id)}>Delete</button>
        </li>
    )
}