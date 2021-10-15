import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo and background image/logo.png';
import facebok from '../../../Images/icon/facebook.png';
import google from '../../../Images/icon/google.png';
import github from '../../../Images/icon/github.png';

const SignUp = () => {
    return (
        <div>
            <Form className='w-25 mx-auto mb-5'>
                <div>
                    <img className='w-75 my-5' src={logo} alt="" />
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <button className='signup-button w-100' type="submit">
                    Sign up
                </button>
                <p>Sign up with</p>
                <div className='d-flex justify-content-center align-items-center'>
                    <div><button className='icon-design'><img className='w-25' src={google} alt="" /></button></div>
                    <div><button className='icon-design'><img className='w-25' src={github} alt="" /></button></div>
                    <div><button className='icon-design'><img className='w-25' src={facebok} alt="" /></button></div>
                </div>
                <div>
                    <p>Don't have an account?? <br /> <Link to='/signin'>sign in</Link></p>
                </div>
            </Form>
        </div>
    );
};

export default SignUp;