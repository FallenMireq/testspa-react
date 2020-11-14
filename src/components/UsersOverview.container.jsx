import { connect } from 'react-redux';
import { setPage } from '../store/actions';
import UsersOverview from './UsersOverview';

function pagedUsers (users, pagination) {
    let userIds = users.list.slice(
        (pagination.page - 1) * pagination.step,
        pagination.page * pagination.step
    )
    return userIds.map(id => users.index[id]);
}

const mapStateToProps = (state) => {
    return {
        pagedUsers: pagedUsers(state.users, state.pagination),
        page: state.pagination.page,
        step: state.pagination.step,
        total: state.users.list.length,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGo: (page) => {
            dispatch(setPage(page));
        },
    };
};

const UsersOverviewContainer = connect(mapStateToProps, mapDispatchToProps)(UsersOverview);

export default UsersOverviewContainer;
