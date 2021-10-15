import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../Images/logo and background image/logo2.png';


const Header = () => {
    const addToCart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home"><img className='logo' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={HashLink} to="/login"><button className='cart-button'>{addToCart}</button></Nav.Link>
                            <Nav.Link as={HashLink} to="/login"><button className='login-button'>Login</button></Nav.Link>
                            <Nav.Link as={HashLink} to="/signup"><button className='signup-button'>Sign up</button></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
