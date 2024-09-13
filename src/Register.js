import React, { useState } from 'react';
import { json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Register(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function signUp(){
        let signUpObj = {name,email,password};
        //console.warn(signUpObj);

        let result = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            body: JSON.stringify(signUpObj),
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        })
        result = await result.json();
        console.warn('result', result);
        localStorage.setItem("user-info",JSON.stringify(result));
        navigate('/add');
    }
    return (
         <div className='col-sm-6 offset-sm-3'>
            <h1>Register User</h1>
            <br/>
            <div>
                <input value={name} onChange={(e)=>setName(e.target.value)}  type='text' className='form-control' placeholder='Enter Name' />
                <br/>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' className='form-control' placeholder='Enter Email' />
                <br/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' className='form-control' placeholder='Enter Password' />
                <br/>
                <button onClick={signUp} className='btn btn-primary'>Submit</button>
            </div>
         </div>
    );
}

export default Register;