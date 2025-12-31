import Card from "./components/card";

function App() {
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
        <p>Form will be here...</p>
       </Card>
      
      
    </div>
  );
}

export default App;
