import {testAPI} from "../dal/API";


const SET_MESSAGE = "SET-MESSAGE"

const initialState = {
    messages: []
}


export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {...state, messages: [...state.messages, action.message]}
        default:
            return state
    }
}

// ActionCreator
export const setMessageAC = (message) => ({type: SET_MESSAGE, message})


// ThunkCreator
export const sendMessageTC = (message) => (dispatch) => {
    testAPI.sendMessage(message)
    dispatch(setMessageAC(message))
}




