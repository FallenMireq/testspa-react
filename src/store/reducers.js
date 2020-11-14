import { combineReducers } from 'redux';
import { SET_USERS, ADD_USER, SET_PAGE, LOAD_USERS } from './actionTypes';

const defaultUsersState = {
    index: {},
    list: [],
    nextId: 1,
};

function users(state = defaultUsersState, action) {
    switch (action.type) {
        case ADD_USER:
            let user = {
                ...action.user,
                id: state.nextId,
            };
            return {
                index: { ...state.index, [user.id]: user },
                list: [...state.list, user.id],
                nextId: state.nextId + 1,
            };
        case SET_USERS:
            let index = {};
            let list = new Array(action.users.length);
            action.users.forEach((user, i) => {
                index[user.id] = { ...user };
                list[i] = user.id;
            });

            return {
                list,
                index,
                nextId: action.users.reduce((acc, x) => Math.max(acc, x.id), 0) + 1,
            };
        default:
            return state;
    }
}

const defaultPaginationState = {
    page: 1,
    step: 5,
};

function pagination(state = defaultPaginationState, action) {
    switch (action.type) {
        case SET_PAGE:
            return {
                ...state,
                page: action.page,
            };
        default:
            return state;
    }
}

const appReducers = combineReducers({
    users,
    pagination,
});

export default appReducers;
