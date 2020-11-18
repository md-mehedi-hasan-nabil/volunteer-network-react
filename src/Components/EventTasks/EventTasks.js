import React, { useContext } from 'react';
import './EventTasks.css';
import logo from '../../logos/logo.png';
import { Col, Container, Row, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Tasks from './Tasks';


const EventTasks = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Container>
            <Row>
                <Navbar expand="md" className="w-100 mt-2">
                <Link to="/" className="navbar-brand"><img src={logo} alt="logo" className="w-100"/></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/" className="nav-link m-1">Home</Link>
                            <Link to="/tasks" className="nav-link m-1">Tasks</Link>
                            {
                                loggedInUser.displayName && <span className="p-2 m-2 bg-info text-light rounded">{loggedInUser.displayName}</span>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Row>

            <Row>
                <Tasks></Tasks>
            </Row>
        </Container>
    );
};

export default EventTasks;