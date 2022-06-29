import {useState} from "react";

const ExpenseItemForm = props => {

    const initialState = {
        title: '',
        price: 0.01,
        date: new Date()
    };

    const [expenseItem, setExpenseItem] = useState(initialState);

    const onFormSubmitHandler = ev => {
        ev.preventDefault();
        props.onExpenseItemCreated(expenseItem);
        setExpenseItem(initialState);
    }

    const onTitleChangedHandler = ev => setExpenseItem(prevState => ({...prevState, title: ev.target.value}));
    const onPriceChangedHandler = ev => setExpenseItem(prevState => ({...prevState, price: ev.target.value}));
    const onDateChangedHandler = ev => setExpenseItem(prevState => ({...prevState, date: ev.target.value}));

    return (
        <form id='expense-item-form' onSubmit={onFormSubmitHandler}>
            <div className='form-group w4 centralized'>
                <div className='input-group'>
                    <label className='required'>Título</label>
                    <input id='title-input' name='title' type='text' required
                           value={expenseItem.title} onChange={onTitleChangedHandler}/>
                </div>
                <div className='input-group w6'>
                    <label className='required'>Preço</label>
                    <input id='price-input' name='price' type='number' required min='0.01' max='999999999.99'
                           step='0.01' value={expenseItem.price} onChange={onPriceChangedHandler}/>
                </div>
                <div className='input-group w6'>
                    <label className='required'>Data</label>
                    <input id='date-input' name='date' type='date' required min='2000-01-01' max={new Date()}
                           value={expenseItem.date} onChange={onDateChangedHandler}/>
                </div>
                <div className='w12'>
                    <button className='block' type='submit'>Salvar</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseItemForm;
