import React from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button'
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, loginForm, handleEmailChange, handlePasswordChange, error } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }
    return (
        <>
            <div className='mx-auto row container'>
                <h3 className='text-center mt-5'>Please Login</h3>
                <Form onSubmit={loginForm}>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <p className='text-danger'>{error}</p>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>
                <div className='text-center'>
                    <p>create new account <Link to='/registration'>Registration</Link> </p>
                    <div>--------------or use one of these options-----------</div><br />
                    <button
                        onClick={handleGoogleLogin}
                        className="btn-regular"
                    >Google Sign In</button>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;