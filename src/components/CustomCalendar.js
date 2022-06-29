import './CustomCalendar.css';

function CustomCalendar(props) {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleDateString('pt-BR', {month: 'long'});
    const day = props.date.toLocaleDateString('pt-BR', {day: '2-digit'});

    return (
        <div className='custom-calendar'>
            <p className='year'>{year}</p>
            <p className='day-and-month'>
                <span>{day}</span>
                <span> de </span>
                <span>{month}</span>
            </p>
        </div>
    );
}

export default CustomCalendar;
