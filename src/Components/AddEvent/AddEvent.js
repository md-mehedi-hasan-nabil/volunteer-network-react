import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png';
import users from '../../logos/users.png';
import plus from '../../logos/plus.png';

const AddEvent = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col>
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="logo" className="w-100" />
                    </Link>
                    <h5 className="d-inline ml-5 pl-5"> <span className="ml-2">Add event</span> </h5>
                </Col>
            </Row>
            <Row>
                <Col md={3} className="mt-4">
                    <Link to="/admin" style={{color: '#03a9f4'}}>
                        <img src={users} alt="users" style={{width: '18px'}} /> Volunteer register list
                    </Link>
                    <Link to="/addEvent" className="btn btn-outline-primary btn-sm mt-3"> 
                    <img src={plus} alt="plus" className="w-25 mr-2"/>
                    Add event</Link>
                </Col>
                <Col md={9} style={{backgroundColor: 'rgb(229, 229, 229)'}}>
                    <form action="" className="bg-light p-5 m-4 rounded">
                        <div className="d-flex">
                            <div className="w-50">
                                <label>Event Title</label>
                                <input type="text" className="form-control mr-3" placeholder="Enter title" />
                            </div>
                            <div className="w-50">
                                <label className="ml-3">Event Date</label>
                                <input type="date" className="form-control ml-3" />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50">
                                <label>Description</label>
                                <textarea rows="4" cols="45" className="form-control mr-3" placeholder="Enter description"></textarea>
                            </div>
                            <div className="w-50">
                                <label className="ml-3">Banner</label>
                                <input type="file" className="form-control ml-3" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary px-5 mt-3">Submit</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddEvent;