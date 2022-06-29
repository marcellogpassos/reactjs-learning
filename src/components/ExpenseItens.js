import './ExpenseItens.css';
import ExpenseItem from "./ExpenseItem";

const ExpenseItens = props => {
    return (
        <div className='expense-itens'>
            {props.data.map(item => <ExpenseItem key={item.id} title={item.title} price={item.price} date={item.date}/>)}
        </div>
    )
}

export default ExpenseItens;
