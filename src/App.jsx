import { useState } from "react";
import Card from "./components/card";

function CreateId(){
  if(typeof crypto !== 'undefined' && crypto.randomUUID){
    return crypto.randomUUID();

  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function App() {
  const [expenses,setExpenses]=useState([
    {id:CreateId, amount:20, category:'shopping'},
    {id:CreateId, amount:15, category:'Food'},
  ])

  return (
    <div className="page">
      <header className="header">
        <div>
        <h1 className="title">Expense Tracker</h1>
        <p className="subtitle">week1 + week2 pracrice project</p>
        </div>
      </header>
       <Card title={'Add Expense'}>
        <p>Form will be here...</p>
       </Card>
        <Card title={'Expense'}>
        <p>count:{expenses.length}</p>
       </Card>
      
      
    </div>
  );
}

export default App;
