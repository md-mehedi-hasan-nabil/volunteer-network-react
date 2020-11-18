import React, { useState } from 'react';
import './Register.css';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../logos/logo.png';
import { Link } from 'react-router-dom';


const Register = () => {
    const [text, setText] = useState('');
    const getItem = () => {
        const text = localStorage.getItem("myText");
        setText(text);
        localStorage.removeItem("myText");
    };
    document.title = 'Register';
    return (
        <>
            <Container className="d-flex justify-content-center mt-3">
                <Link to="/"><img src={logo} alt="logo" style={{width: '150px'}}/></Link>
            </Container>
            <Container>
                <Row>
                    <Col lg={5} className="mx-auto box mt-3 border py-4 px-5 rounded">
                    <h4 className="mb-4">Register as a Volunteer</h4>
                    <form action="https://safe-island-26719.herokuapp.com/addUser" method="POST">
                        <div id="inputBox">
                            <input type="text" className="w-100" name="name" required autoComplete="off" onClick={getItem} />
                            <label>Full Name</label>
                        </div>
                        <div id="inputBox">
                            <input type="email" className="w-100" name="email" required autoComplete="off" />
                            <label>Username or Email</label>
                        </div>
                        <div id="inputBox">
                            <input type="text" className="w-100" name="desicriton" required autoComplete="off" />
                            <label>Desicriton</label>
                        </div>
                        <div id="inputBox">
                            <input type="date" className="w-100" name="date" required autoComplete="off" />
                        </div>
                        <div id="inputBox">
                            <input type="data" className="w-100" name="work" required autoComplete="off" value={text} />
                            <label>Work</label>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mb-4">Registration</button>
                    </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;