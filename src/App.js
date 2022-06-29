import CreateExpenseItem from "./components/CreateExpenseItem";
import ExpenseItens from './components/ExpenseItens';
import './App.css';
import data from './data/data';
import {useState} from "react";

function App() {

    const [myData, setData] = useState(data);

    const onExpenseItemAddedHandler = expenseItem => setData(prev => [...prev, expenseItem]);

    return (
        <div>
            <CreateExpenseItem onExpenseItemAdded={onExpenseItemAddedHandler}/>
            <ExpenseItens data={myData}/>
        </div>
    );
}

export default App;
