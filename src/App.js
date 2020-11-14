import UserForm from './components/UserForm';
import UsersOverview from './components/UsersOverview.container';
import './App.css';

export default function App(props) {
    function formCompleted(e) {
        props.onNewUser(e.user);
        e.clear();
    }

    return (
        <>
            <UserForm onDone={(e) => formCompleted(e)} />
            <UsersOverview className="app__users-overview" />
        </>
    );
}
