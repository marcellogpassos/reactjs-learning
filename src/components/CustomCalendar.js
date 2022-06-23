function CustomCalendar(props) {
    return (
        <div>{props.date.toISOString()}</div>
    );
}

export default CustomCalendar;
