import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import useAuth from '../../../hooks/useAuth';
import './Header.css'
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='navbar' variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><img width='200' src={logo} alt="" /></Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='nav-menu' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='nav-menu' as={HashLink} to="/home#service">Services</Nav.Link>
                        <Nav.Link className='nav-menu link' as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className='nav-menu link' as={Link} to="/price">Contact</Nav.Link>
                        {
                            user.email ?
                                <Button onClick={logOut} variant="danger">Log Out</Button>
                                :
                                <Nav.Link className='nav-menu' as={Link} to="/login">Login</Nav.Link>
                        }

                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;