import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <Navbar className="container " expand="lg">
                <Navbar.Brand className="navbar-brand" to="/">Raintree Books</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto nav-item">
                        <li >
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li>
                            <Link className="nav-link active" to="/orders">Orders</Link>
                        </li>
                        <li>
                            <Link className="nav-link active" to="/admin">Admin</Link>
                        </li>
                        <li>
                            {
                                loggedInUser.name ? <Link className="nav-link text-primary" to="/login">{loggedInUser.name}</Link>
                                    : <Link className="nav-link active" to="/login">Login</Link>
                            }
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;