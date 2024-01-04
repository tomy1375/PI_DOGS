import { ADD_FAV, GET_BY_NAME, GET_USERS, REMOVE_FAV } from "../actions"

let initialState = {allUsers:[],userCopy:[],myFavorites: []}
function rootReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            return{
                ...state,
                myFavorites: action.payload,
                allUsers: action.payload
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites:action.payload
            }
        case GET_USERS:
            return{
                ...state,
                allUsers:action.payload,
                userCopy:action.payload
            }
        case GET_BY_NAME:
            return{
                ...state,
                allUsers: action.payload
            }
        default:
            return state
    }
}

export default rootReducer