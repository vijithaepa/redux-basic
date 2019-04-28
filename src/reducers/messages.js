import {LOAD_TODOS, TODO_ADD, TODO_DELETE, TODO_REPLACE} from "./todo";


const MESSAGE_SHOW = 'MESSAGE_SHOW';

export const showMessage = (msg) => ({
    type: MESSAGE_SHOW, payload: msg
})

export default (state='', action) => {

    switch (action.type) {
        case MESSAGE_SHOW:
            return action.payload;
        case TODO_ADD, LOAD_TODOS, TODO_REPLACE, TODO_DELETE:
            return '';
        default:
            return state;
    }
}