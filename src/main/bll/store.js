import {applyMiddleware, combineReducers, createStore} from "redux";
import {testReducer} from "./reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    test: testReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))