import { useState } from 'react';

import DatePicker from './DatePicker';
import EmailInput from './EmailInput';

import './UserForm.css';

export default function UserForm(props) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [distance, setDistance] = useState('');
    const [payment, setPayment] = useState('');

    function clear() {
        setName('');
        setDate('');
        setEmail('');
        setPhone('');
        setDistance('');
        setPayment('');
    }

    function submit(e) {
        e.preventDefault();
        props.onDone({
            clear: () => clear(),
            user: {
                name,
                date,
                email,
                phone,
                distance,
                payment,
            },
        });
    }

    return (
        <form className="user-form" onSubmit={(e) => submit(e)}>
            <div className="field">
                <label>ФИО</label>
                <input
                    type="text"
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                />
            </div>

            <div className="field">
                <label>Дата рождения</label>
                <DatePicker
                    value={date}
                    onInput={(value) => setDate(value)}
                />
            </div>
            <div className="field">
                <label>Email</label>
                <EmailInput
                    value={email}
                    onInput={(value) => setEmail(value)}
                />
            </div>
            <div className="field">
                <label>Телефон</label>
                <input
                    type="text"
                    value={phone}
                    onInput={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className="field">
                <label>Дистанция</label>
                <select
                    value={distance}
                    onInput={(e) => setDistance(e.target.value)}
                >
                    <option>3</option>
                    <option>5</option>
                    <option>10</option>
                </select>
            </div>
            <div className="field">
                <label>Сумма взноса</label>
                <input
                    type="number"
                    value={payment}
                    onInput={(e) => setPayment(e.target.value)}
                />
            </div>
            <div className="buttons">
                <button type="submit">OK</button>
                <button type="button" onClick={() => clear()}>
                    Reset
                </button>
            </div>
        </form>
    );
}
