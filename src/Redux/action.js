import * as types from "./actionTypes"

const getTodoRequest = () =>{
    return { type:types.GET_TODO_LISTS_REQUEST}
}
const getTodoSuccess = (payload) =>{
    return { type:types.GET_TODO_LISTS_SUCCESS,payload}
}
const getTodoFailure = () =>{
    return { type:types.GET_TODO_LISTS_FAILURE}
}


const addTodoRequest = () =>{
    return { type:types.ADD_TODO_REQUEST}
}
const addTodoSuccess = (payload) =>{
    return { type:types.ADD_TODO_SUCCESS, payload}
}
const addTodoFailure = () =>{
    return { type:types.ADD_TODO_FAILURE}
}


const toggleTodoRequest = () =>{
    return { type:types.TOGGLE_TODO_REQUEST}
}
const toggleTodoSuccess = (payload) =>{
    return { type:types.TOGGLE_TODO_SUCCESS, payload}
}
const toggleTodoFailure = () =>{
    return { type:types.TOGGLE_TODO_FAILURE}
}


const removeTodoRequest = () =>{
    return { type:types.REMOVE_TODO_REQUEST}
}
const removeTodoSuccess = (payload) =>{
    return { type:types.REMOVE_TODO_SUCCESS, payload}
}
const removeTodoFailure = () =>{
    return { type:types.REMOVE_TODO_FAILURE}
}


export {getTodoRequest, getTodoSuccess, getTodoFailure, addTodoFailure,addTodoSuccess,addTodoRequest,toggleTodoRequest,toggleTodoFailure,toggleTodoSuccess,removeTodoRequest,removeTodoSuccess,removeTodoFailure};