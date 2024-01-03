import { GET_USERS } from "../actions"

let initialState = {allUser:[]}
function rootReducer(state=initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return{
                ...state,
                allUser:action.payload,
            }
        default:
            return state
    }
}

export default rootReducer