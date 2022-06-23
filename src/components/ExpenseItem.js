import CustomCalendar from "./CustomCalendar";

function ExpenseItem() {
    const date = new Date();
    return (
        <div>
            <CustomCalendar date={date}/>
            <h2>Meu Item</h2>
        </div>
    );
}

export default ExpenseItem;
