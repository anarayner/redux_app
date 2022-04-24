import {combineReducers} from "redux";
import {userReducer} from './userReducer.js'
import {todoReducer} from "./todoReducer";


export const rootReducer = combineReducers({
    user : userReducer,
    todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>