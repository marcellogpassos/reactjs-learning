import './ExpenseItem.css';
import CustomCalendar from "./CustomCalendar";
import Card from "../UI/Card";

function ExpenseItem(props) {
    console.log('>>> props', props);

    return (
        <Card className='expense-item'>
            <CustomCalendar date={props.date}/>
            <div className='info'>
                <p>
                    <span className='title'>{props.title}</span>
                    <span className='price'>$ {props.price}</span>
                </p>
            </div>
        </Card>
    );
}

export default ExpenseItem;
