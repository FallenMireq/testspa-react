import { connect } from 'react-redux';
import { addUser } from './store/actions';
import App from './App';

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNewUser: (user) => {
            dispatch(addUser(user));
        },
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
