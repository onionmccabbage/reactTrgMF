import React from 'react';
import addUser from '../redux/actions/AddUserActions';
import { connect, useDispatch } from 'react-redux'

const ConnectedAddUser = ({ user }) => {
    const dispatch = useDispatch()
    // this next line gets called on EVERY component refresh
    console.log(`user is now ${user} ${JSON.stringify(user)}`)

    const { firstname, surname, gender, date_of_birth, email_address, address, zipcode, phone_number, method_of_contact } = user
    const setOnChange = (type, value) => {
        console.log(`type: SET_${type}, value:${value}`)
        return dispatch({ type: 'SET_' + type, value })
    }

    const handleChange = (e) => {
        // console.log(e.target.name) // we see 'FIRSTNAME'
        setOnChange(e)
        setOnChange([e.target.name], e.target.value) // was [e.target.name]
    }

    // onSubmit still not yet working
    const onSubmit = () => {
        // console.log("USER >>> ", user) // yes we see this
        // console.log(`addUser is: ${addUser}`) // and we see this
        addUser(user)() // this is silent unless we add () to invoke method
    }

    return (
        <div>
            <h2>Customer Relationship Management - Add User (Connect)</h2>
            <div className="container">
                <form>
                    <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="addUserFirstName">First Name</label>
                            <input type="text" className="form-control" value={firstname} id="addUserFirstName" name="FIRSTNAME"
                                onChange={handleChange} />
                        </div>
                        <div className="form-group col-6 ">
                            <label htmlFor="addUserLastName">Last Name</label>
                            <input type="text" className="form-control" id="addUserLastName" value={surname} name="LASTNAME" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="addUserGender">Select Gender</label>
                            <select className="form-control" id="addUserGender" value={gender} name="GENDER" onChange={handleChange}>
                                <option></option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="addUserDateOfBirth">Date Of Birth</label>
                            <input type="date" className="form-control" id="addUserDateOfBirth" value={date_of_birth} name="DOB" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="addUserEmailAddress">Email address</label>
                            <input type="email" className="form-control" id="addUserEmailAddress" value={email_address} name="EMAIL_ADDRESS" onChange={handleChange} />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="addUserAddress">Address</label>
                            <input type="text" className="form-control" id="addUserAddress" value={address} name="ADDRESS" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="addUserZipCode">Zip Code</label>
                            <input type="text" className="form-control" id="addUserZipCode" value={zipcode} name="ZIP_CODE" onChange={handleChange} />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="addUserContactNumber">Contact Number</label>
                            <input type="number" className="form-control" id="addUserContactNumber" value={phone_number} name="CONTACT_NUMBER" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="addUserPreferredMethod">Preferred Method of Contact</label>
                            <select className="form-control" id="addUserPreferredMethod" value={method_of_contact} name="PREFERRED_METHOD" onChange={handleChange}>
                                <option></option>
                                <option>Phone</option>
                                <option>Email</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group col-3">
                        <input type="button" className="form-control btn btn-primary" value="Add User" onClick={onSubmit} />
                    </div>
                </form>
            </div>
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addUser : (user) => {
//             console.log(`in mapped addUser user is ${user}`) // this echoes correctly
//             return (dispatch(addUser(user)))
//         }
//     };
// };

const mapDispatchToProps = { // just use the short-hand
    addUser // this gets called - runs code in AddUserAction
}

const mapStateToProps = state => ({
    user: state.AddUserReducer.user // the default case returns state (which is initial state)
})

const AddUser = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedAddUser);

export default AddUser;