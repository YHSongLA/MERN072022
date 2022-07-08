// IMPORT DEPENDENCY
import React, { useState } from 'react'


// CREATE THE COMPONENT
const HookForm = (props) => {
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

  return (
    <div className='container m-auto bg-secondary'>
        <form onSubmit={createUser}>
            <h1>User Form</h1>
            {/* Form Inputs */}
            <div>
                <label>First Name: </label>
                <input type="text" name="fName" onChange={(event) => setFName(event.target.value)} />
                {/* Form Validations */}
            </div>

            <div>
                <label>Last Name: </label>
                <input type="text" name="lName" onChange={(event) => setLName(event.target.value)} />
                {/* Form Validations */}
            </div>

            <div>
                <label>Email: </label>
                <input type="text" name="email" onChange={(event) => setEmail(event.target.value)} />
                {/* Form Validations */}
            </div>

            <div>
                <label>Password: </label>
                <input type="text" name="password" onChange={(event) => setPassword(event.target.value)} />
                {/* Form Validations */}
            </div>

            <div>
                <label>Confirm: </label>
                <input type="text" name="confirm" onChange={(event) => setConfirm(event.target.value)} />
                {/* Form Validations */}
            </div>
            <button>Submit</button>
        </form>

        {/* Display Submitted User */}
        <p>Name: {fName} {lName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm: {confirm}</p>
    </div>
  )
}



// EXPORT COMPONENT
export default HookForm;