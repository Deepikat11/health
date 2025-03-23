import React from 'react';
import "../styles/RegisterStyles.css";
import {Form,Input} from 'antd';
import {Link} from 'react-router-dom';

const PatientLogin = () => {
    const onfinishHandler=(values)=>{
        console.log(values)
    }
    return (
        <div className="form-container">
        <Form layout="vertical" onFinish={onfinishHandler} className='card p-4'>
            <h1 className='test-center'>Login Form</h1>
            <Form.Item label='Email' name="email">
                <Input type="email" required />
            </Form.Item>
            <Form.Item label='password' name="password">
                <Input type="password" required />
            </Form.Item>
            <Link to="/Register" className='ms-2'>Not a user Register here</Link>
            <br></br>
            <button className='btn btn-primary' type='submit'>Log In</button>

        </Form>
    </div>
    );
};

export default PatientLogin;