import {
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_FAIL
} from "../constants/UserConstants"

const initialState = {
    // user: {
    //     firstname: "",
    //     surname: "",
    //     gender: "",
    //     date_of_birth: "",
    //     email_address: "",
    //     address: "",
    //     zipcode: "",
    //     phone_number: "",
    //     method_of_contact: ""
    // }
    user: {
        firstname: "Ada", // while developing, have default values
        surname: "Lovelace",
        gender: "Female",
        date_of_birth: "1880-01-01",
        email_address: "ada@babbage.ie",
        address: "last century",
        zipcode: "10001001",
        phone_number: "001000101",
        method_of_contact: "Phone"
    }
}

function addUserReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_FIRSTNAME':
            // was user: { firstname: action.value} but that lost the other user members
            return {...state, user: { ...state.user, firstname: action.value} };
        case 'SET_LASTNAME':
            return {...state, user: { ...state.user, surname: action.value} };
        case 'SET_GENDER':
            return {...state, user: { ...state.user, gender: action.value} };
        case 'SET_DOB':
            return {...state, user: { ...state.user, date_of_birth: action.value} };
        case 'SET_EMAIL_ADDRESS':
            return {...state, user: { ...state.user, email_address: action.value} };
        case 'SET_ADDRESS':
            return {...state, user: { ...state.user, address: action.value} };
        case 'SET_ZIP_CODE':
            return {...state, user: { ...state.user, zipcode: action.value} };
        case 'SET_CONTACT_NUMBER':
            return {...state, user: { ...state.user, phone_number: action.value} };
        case 'SET_PREFERRED_METHOD':
            return {...state, user: { ...state.user, method_of_contact: action.value} };
        case ADD_USER_REQUEST:
            return {...state};
        case ADD_USER_SUCCESS:
            return {...state};
        case ADD_USER_FAIL:
            return {...state, error: action.payload};
        default:
            return state;
    }
}

export default addUserReducer;