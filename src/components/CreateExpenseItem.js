import ExpenseItemForm from "./ExpenseItemForm";
import {v4 as uuidv4} from 'uuid';
import './CreateExpenseItem.css';

const CreateExpenseItem = props => {

    const onExpenseItemCreatedHandler = expenseItem => {
        console.log('>>> expenseItem', expenseItem);

        const created = {
            ...expenseItem,
            date: new Date(expenseItem.date),
            id: uuidv4()
        };

        props.onExpenseItemAdded(created);
    }

    return (
        <div className='create-expense-item'>
            <ExpenseItemForm onExpenseItemCreated={onExpenseItemCreatedHandler}/>
        </div>
    );
};

export default CreateExpenseItem;
