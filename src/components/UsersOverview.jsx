import Pagination from './Pagination';
import UsersTable from './UsersTable';

export default function UsersOverview(props) {
    return (
        <div className={props.className + ' users-overview'}>
            <UsersTable className="users-overview__users-table" users={props.pagedUsers} />
            <Pagination page={props.page} total={props.total} step={props.step} onGo={(page) => props.onGo(page)} />
        </div>
    );
}
