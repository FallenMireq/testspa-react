import './UsersTable.css';

export default function UsersTable(props) {
    return (
        <table className="users-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>ФИО</th>
                    <th>Дата рождения</th>
                    <th>Email</th>
                    <th>Телефон</th>
                    <th>Дистанция</th>
                    <th>Сумма взноса</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.date}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.distance}</td>
                        <td>{user.payment}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
