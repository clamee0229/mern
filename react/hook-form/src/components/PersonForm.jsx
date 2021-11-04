import React, {useState} from "react";
import DisplayPerson from './DisplayPerson';
const PersonForm = () =>{

    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')


    return(
    <>
        <form>
            <div className='form-group'>
                <label>First Name:</label>
                <input onChange = {(e)=>{setFirstName(e.target.value)}} type='text' name = 'firstName' className='form-control'></input>
                {
                    firstName.length<2 ?
                        <p className = 'text-danger'>First Name must be at least 2 characters</p>
                        : ''
                }
            </div>
            <div className='form-group'>
                <label>Last Name:</label>
                <input onChange = {(e)=>{setLastName(e.target.value)}} type='text' name = 'lastName' className='form-control'></input>
                {
                    lastName.length<2 ?
                        <p className = 'text-danger'>Last Name must be at least 2 characters</p>
                        : ''
                }
            </div>
            <div className='form-group'>
                <label>Email:</label>
                <input onChange = {(e)=>{setEmail(e.target.value)}} type='text' name = 'email' className='form-control'></input>
                {
                    email.length<5 ?
                        <p className = 'text-danger'>Email must be at least 5 characters</p>
                        : ''
                }
            </div>
            <div className='form-group'>
                <label>Password:</label>
                <input onChange = {(e)=>{setPassword(e.target.value)}} type = 'password' name = 'password' className='form-control'></input>
                {
                    password.length<8 ?
                    <>
                        <p className = 'text-danger'>Password must be at least 8 characters</p>
                        <p>Hope this works</p>
                    </>
                        : ''
                    
                }
            </div>
            <div className='form-group'>
                <label>Confirm Password:</label>
                <input onChange = {(e)=>{setConfirmPassword(e.target.value)}} type = 'password' name = 'confirmPassword' className='form-control'></input>
                {
                    password !== confirmPassword ?
                        <p className = 'text-danger'>Passwords must match</p>
                        : ''
                }
            </div>
        </form>
        <DisplayPerson firstName = {firstName} lastName = {lastName} email = {email} password = {password} confirmPassword = {confirmPassword}></DisplayPerson>
    </>

    )
}

export default PersonForm;