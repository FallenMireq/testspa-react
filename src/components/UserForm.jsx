import { useState } from 'react';

import DatePicker from './DatePicker';
import EmailInput from './EmailInput';
import PhoneInput from './PhoneInput';

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

    const validation = {
        name: !!name,
        date: !!date,
        email: !!email && /^.+@.+\..+$/.test(email),
        phone: !!phone && phone.length === 12,
        distance: !!distance,
        payment: !!payment && /^\d+$/.test(payment),
    };

    const formValid = [
        validation.name,
        validation.date,
        validation.email,
        validation.phone,
        validation.distance,
        validation.payment,
    ].every(x => x);

    return (
        <form className="user-form" onSubmit={(e) => submit(e)}>
            <div className={'field' + (!validation.name ? ' field_invalid' : '')}>
                <label>ФИО</label>
                <input
                    type="text"
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                />
            </div>

            <div className={'field' + (!validation.date ? ' field_invalid' : '')}>
                <label>Дата рождения</label>
                <DatePicker
                    value={date}
                    onInput={(value) => setDate(value)}
                />
            </div>
            <div className={'field' + (!validation.email ? ' field_invalid' : '')}>
                <label>Email</label>
                <EmailInput
                    value={email}
                    onInput={(value) => setEmail(value)}
                />
            </div>
            <div className={'field' + (!validation.phone ? ' field_invalid' : '')}>
                <label>Телефон</label>
                <PhoneInput
                    value={phone}
                    onInput={(value) => setPhone(value)}
                />
            </div>
            <div className={'field' + (!validation.distance ? ' field_invalid' : '')}>
                <label>Дистанция</label>
                <select
                    value={distance}
                    onInput={(e) => setDistance(e.target.value)}
                >
                    <option value="" disabled>---</option>
                    <option>3</option>
                    <option>5</option>
                    <option>10</option>
                </select>
            </div>
            <div className={'field' + (!validation.payment ? ' field_invalid' : '')}>
                <label>Сумма взноса</label>
                <input
                    type="number"
                    value={payment}
                    onInput={(e) => setPayment(e.target.value)}
                />
            </div>
            <div className="buttons">
                <button type="submit" disabled={!formValid}>OK</button>
                <button type="button" onClick={() => clear()}>
                    Reset
                </button>
            </div>
        </form>
    );
}
