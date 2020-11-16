import ReactDatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);

function toString(date) {
    if (!date) {
        return '';
    }

    const year = ('' + date.getFullYear()).padStart(4, '0');
    const month = ('' + (date.getMonth() + 1)).padStart(2, '0');
    const day = ('' + date.getDate()).padStart(2, '0');
    return `${day}.${month}.${year}`;
}

function fromString(str) {
    const match = /^(\d{1,2})\.(\d{1,2})\.(\d{1,4})$/.exec(str);
    if (!match) {
        return null;
    }

    const [, day, month, year] = match;

    return new Date(year, month - 1, day);
}

export default function DatePicker(props) {
    return (
        <ReactDatePicker
            dateFormat="dd.MM.yyyy"
            locale="ru"
            selected={fromString(props.value)}
            onChange={(value) => props.onInput(toString(value))}
        />
    );

    // return (
    //     <input
    //         type="date"
    //         value={props.value}
    //         onInput={(e) => props.onInput(e.target.value)}
    //     />
    // );
}
