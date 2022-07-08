import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const MoreForms = (props) => {
    // STATE
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    // PREVENT DEFAULT
    const createUser = (event) => {
        event.preventDefault();
    }

    // VALIDATIONS
    const [fNameValid, setFNameValid] = useState(true);
    const [lNameValid, setLNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [confirmValid, setConfirmValid] = useState(true);

    const fNameHandler = (event) => {
        setFName(event.target.value)
        if (fName.length < 2) {
            setFNameValid(false)
        }
        else {
            setFNameValid(true)
        }
    }
    const lNameHandler = (event) => {
        setLName(event.target.value)
        if (lName.length < 2) {
            setLNameValid(false)
        }
        else {
            setLNameValid(true)
        }
    }
    const emailHandler = (event) => {
        setEmail(event.target.value)
        if (email.length < 5) {
            setEmailValid(false)
        }
        else {
            setEmailValid(true)
        }
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value)
        if (password.length < 8) {
            setPasswordValid(false)
        }
        else {
            setPasswordValid(true)
        }
    }
    const confirmHandler = (event) => {
        setConfirm(event.target.value)
        if (confirm.length < 8) {
            setConfirmValid(false)
        }
        else {
            setConfirmValid(true)
        }
    }


    return (
        <body className="bg-secondary">
            <div className='container m-auto bg-light mt-5'>
                <form onSubmit={createUser} className="w-50 m-auto border rounded bg-secondary p-3">
                    <h1>User Form</h1>
                    {/* Form Inputs */}
                    <div className="">
                        <label className="form-label">First Name: </label>
                        <input className="form-control w-50 m-auto" type="text" name="fName" onChange={fNameHandler} />
                        {/* Form Validations */}
                        {
                            (fNameValid) ? null : <p class="text-danger">Your first name must be longer than 2 chars</p>
                        }
                    </div>

                    <div>
                        <label className="form-label">Last Name: </label>
                        <input className="form-control w-50 m-auto" type="text" name="lName" onChange={lNameHandler} />
                        {/* Form Validations */}
                        {
                            (lNameValid) ? null : <p class="text-danger">Your last name must be longer than 2 chars</p>
                        }
                    </div>

                    <div>
                        <label className="form-label">Email: </label>
                        <input className="form-control w-50 m-auto" type="text" name="email" onChange={emailHandler} />
                        {/* Form Validations */}
                        {
                            (emailValid) ? null : <p class="text-danger">Your first email must be longer than 5 chars</p>
                        }
                    </div>

                    <div>
                        <label className="form-label">Password: </label>
                        <input className="form-control w-50 m-auto" type="text" name="password" onChange={passwordHandler} />
                        {/* Form Validations */}
                        {
                            (passwordValid) ? null : <p class="text-danger">Your password must be longer than 8 chars</p>
                        }
                    </div>

                    <div>
                        <label className="form-label">Confirm: </label>
                        <input className="form-control w-50 m-auto" type="text" name="confirm" onChange={confirmHandler} />
                        {/* Form Validations */}
                        {
                            (confirmValid) ? null : <p class="text-danger">Your confirm password must be longer than 8 chars</p>
                        }
                    </div>
                    <button className="btn btn-outline-warning mt-2">Submit</button>
                </form>

                {/* Display Submitted User */}
                <p>Name: {fName} {lName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm: {confirm}</p>
            </div>
            
        </body>
    )
}



export default MoreForms;