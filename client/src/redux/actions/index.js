import axios from "axios"

export const GET_USERS = "GET_USERS";
export const GET_BY_NAME = "GET_BY_NAME"
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"

export function getUsers() {
    return async function(dispatch){
        const response = await axios("https://api.thedogapi.com/v1/breeds")
        return dispatch({
            type: "GET_USERS",
            payload: response.data
        })
    }
}

export function getByName(name) {
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/dogs/?name=${name}`)
        return dispatch({
            type: "GET_BY_NAME",
            payload: response.data
        })
    }
}

export const addFav = (character) => {
    const endpoint = "http://localhost:3000/favorites" ;
    return async (dispatch) => {
      try {
        const { data } = await axios.post(endpoint,  character );
        return dispatch({
          type: "ADD_FAV",
          payload: data,
        });
      } catch (error) {
        console.log(error)
        window.alert(error.response.data.message);
      }
    }}

    export const removeFav =  (id) => {
        const endpoint = "http://localhost:3000/favorites" + id;
        return async (dispatch) => {
          try {
            const { data } = await axios.delete(endpoint);
            return dispatch({
              type: "REMOVE_FAV",
              payload: data,
            });
          } catch (error) {
            window.alert(error.response.data.message);
          }
        }}
