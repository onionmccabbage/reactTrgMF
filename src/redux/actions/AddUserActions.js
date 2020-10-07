import { ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAIL } from "../constants/UserConstants"
import UserService from "../../services/UserService";


// this is still a work in progress....
const addUser = (user) => {
    console.log(`Inside addUser action where user is ${JSON.stringify(user)}`) // we see the value of firstname etc.
    return (
        (dispatch) => { // add 'async'
            try {
                console.log("inside addUser dispatch")
                dispatch({ type: ADD_USER_REQUEST }); // , payload:user ?
                UserService.create(user) // add 'await'
                    .then(response => {
                        console.log("IN ADD_USER_SUCCESS")
                        dispatch({ type: ADD_USER_SUCCESS })
                    });
            } catch (error) {
                console.log("IN ADD_USER_FAIL: ", error)
                dispatch({ type: ADD_USER_FAIL, payload: error });
            }

        }
    )
}

export default addUser;