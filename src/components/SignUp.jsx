import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import AlertCustom from './Alert';

import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

function Signup(props) {
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({ name: '', email: '', password: '' })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`/api/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmI3ZGM1NDVhZmMxOTYxNDA1MGZjYiIsImlhdCI6MTcwMTcxOTYyOH0.IREKF9PoMHcCyoVQyKpLtQC7xPZ692fE-Obahc3XMAk"
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
        });
        const jsonData = await response.json();

        if (jsonData.success) {
            localStorage.setItem("token", jsonData.token)
            navigate("/iNotes")
            props.showAlert("success", jsonData.message, "Sign Up Complete")
        } else {
            props.showAlert("warning", jsonData.message, "Unable To SignUp")
        }

    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
        // console.log(credentials)

    }
    return (<>
        <AlertCustom alert={props.alert} />
        <br /><br />
        <MDBContainer fluid className='d-flex align-items-center justify-content-center '>
            <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                <MDBCardBody className='px-5'>
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                    <form onSubmit={handleSubmit}>

                        <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' name='name' onChange={onChange} type='text' />
                        <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' name='email' onChange={onChange} type='email' />
                        <MDBInput wrapperClass='mb-4' label='Password' size='lg' name='password' onChange={onChange} type='password' />
                        <MDBInput wrapperClass='mb-4' label='Repeat your password' name='lg' id='confpassword' type='password' />
                        <div className='d-flex flex-row justify-content-center mb-4'>
                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                        </div>
                        <button type="submit" className=" container btn btn-primary my-1 py-1" >Register</button>

                    </form>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    </>
    );
}

export default Signup;