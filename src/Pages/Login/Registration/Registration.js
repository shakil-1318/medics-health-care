import React from 'react';
import Button from 'react-bootstrap/Button'
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {
    const { signInUsingGoogle, handleEmailChange, handlePasswordChange, handleRegistration, error, handleNameChange } = useAuth();
    return (
        <div>
            <div className="row mx-auto container mt-5">
                <Form onSubmit={handleRegistration}>
                    <h2 className='text-center text-primary'>Please Registration</h2>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control onBlur={handleNameChange} type="name" placeholder="Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                        </Col>

                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <p className='text-danger'>{error}</p>
                            <Button type="submit">Register</Button>


                        </Col>
                    </Form.Group>
                </Form>
                <div className='text-center'>
                    <p>Already have an account? <Link to='/login'>Login</Link> </p>
                    <div>--------------or use one of these options-----------</div>
                    <Button
                        onClick={signInUsingGoogle}
                        variant="success"
                    >Google Sign In</Button>
                </div>
            </div>
        </div>
    );
};

export default Registration;