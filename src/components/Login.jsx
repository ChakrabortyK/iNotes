import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlertCustom from './Alert'



const Login = (props) => {
    const host = "http://localhost:5000"
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: '', password: '' })


    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmI3ZGM1NDVhZmMxOTYxNDA1MGZjYiIsImlhdCI6MTcwMTcxOTYyOH0.IREKF9PoMHcCyoVQyKpLtQC7xPZ692fE-Obahc3XMAk"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const jsonData = await response.json();
        // console.log(jsonData)
        if (jsonData.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', jsonData.authtoken);
            navigate("/");
            // console.log(jsonData.message)
            props.showAlert("success", jsonData.message, "Logged In")
            // setAlert = true
        }
        else {
            props.showAlert("warning", jsonData.message, "Invalid Email Or Password")
        }

    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
        // console.log(credentials)

    }

    return (<>
        <AlertCustom alert={props.alert} />
        <br /><br /><br />
        <div className='container'>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' onChange={onChange} id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" onChange={onChange} id="password" />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" htmlFor="login-check" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" name='logincheck'  htmlFor="login-check">Keep Me Logged In</label>
                </div> */}
                <button className="btn btn-primary" >Submit</button>
            </form>
        </div>
    </>
    )
}

export default Login