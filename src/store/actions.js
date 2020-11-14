import { SET_USERS, ADD_USER, SET_PAGE } from './actionTypes';

export function setUsers(users) {
    return {
        type: SET_USERS,
        users,
    };
}

export function loadUsers(url) {
    return async (dispatch) => {
        let data = await (await fetch(url)).json();
        dispatch(setUsers(data.users));
    };
}

export function addUser(user) {
    return {
        type: ADD_USER,
        user,
    };
}

export function setPage(page) {
    return {
        type: SET_PAGE,
        page,
    };
}
