import React from 'react';
import addUser from '../redux/actions/AddUserActions';
import { useDispatch, useSelector } from 'react-redux' // no need for connect
// prefer the first two rather than useStore
// import { useStore } from 'react-redux'

const AddUserUsingHooks = () => { // our state is passed in as user
    // this can be tidied up with functions to return use rather than via AddUserReducer
    const user = useSelector(state => state.AddUserReducer.user)
    const dispatch = useDispatch();
    // this next line gets called on EVERY component refresh
    console.log(`user is now ${user} ${JSON.stringify(user)}`)
    // console.log(`addUser is ${addUser} ${JSON.stringify(addUser)}`)

    const { firstname, surname, gender, date_of_birth, email_address, address, zipcode, phone_number, method_of_contact } = user

    const handleChange = (e) => {
        // console.log(e.target.name) // we see 'FIRSTNAME'
        //               // ECMAScript string interpolation with back-ticks ``
        console.log(`type: SET_${e.target.name}, value: e.target.value`)
        // make use of dispatch, from useDispatch, which is a reference to the dispatch function in teh Redux store
        dispatch({ type: `SET_${e.target.name}`, value: e.target.value })
    }

    const onSubmit = () => {
        addUser(user)
    }

    return (
        <div>
            <h2>Customer Relationship Management - Add User (Hooks)</h2>
            <div className="container">
                <form>
                    <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="addUserFirstName">First Name</label>
                            <input type="text" className="form-control"
                                value={firstname}
                                id="addUserFirstName" name="FIRSTNAME"
                                onChange={handleChange} />
                        </div>
                        <div className="form-group col-6 ">
                            <label htmlFor="addUserLastName">Last Name</label>
                            <input type="text" className="form-control" 
                                value={surname} 
                                id="addUserLastName" name="LASTNAME" 
                                onChange={handleChange} />
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
                            {/* advise using string not number - might need +353(0)- */}
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

export default AddUserUsingHooks;