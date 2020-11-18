import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Nav, Navbar, InputGroup, FormControl } from 'react-bootstrap';
import './Landingpage.css';
import logo from '../../logos/logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import FakeData from '../FakeData/FakeData.json';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';


const Landingpage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [items, setItems] = useState([]);
    useEffect(()=>{
        setItems(FakeData);
    },[]);
    
    const getValue = (e)=> {
        const text = e.target.nextSibling.innerText;
        localStorage.setItem("myText", text);
    }

    const handleSignOut = () => {
        firebase.auth().signOut().then(function() {
          const signOut = {
            displayName: '',
            email: '',
            emailVerified: false,
            photoURL: ''
          }
          setLoggedInUser(signOut);
        }).catch(function(error) {
          alert(error.message);
        });
      }
      document.title = 'Home';
    return (
        <>
        <section id="bgImg">
        <Container className="h-50">
            <Row>
                <Navbar expand="md" className="w-100 mt-1">
                <Link to="/" className="navbar-brand"><img src={logo} alt="logo" className="w-100"/></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/" className="nav-link m-1">Home</Link>
                            <Link to="/tasks" className="nav-link m-1">Tasks</Link>
                            <Link to="/register"><button className="btn btn-primary m-1 px-4">Register</button></Link>
                            <Link to="/admin"><button className="btn btn-dark m-1 px-4">Admin</button></Link>
                            {
                                loggedInUser.displayName && <>
                                <span className="p-2 m-1 bg-info text-light rounded">{loggedInUser.displayName}</span>
                                <button type="button" className="btn btn-danger" onClick={handleSignOut}>Sing out</button>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Row>
            <Row>
                <Col className="text-center" style={{height: '50vh'}}>
                <h2 className="my-5 text-uppercase">I grow by helping people in need.</h2>
                <InputGroup className="w-25 m-auto" id="search">
                    <FormControl placeholder="Search..." />
                    <InputGroup.Append>
                        <button className="btn btn-primary">Search</button>
                    </InputGroup.Append>
                </InputGroup>
                </Col>
            </Row>
        </Container>
        </section>


        <Container>
            <Row>
            {
                items.map(item => <Col md={3} className="my-3" key={item.id}>
                    <Link to="register">
                        <div id="box">
                            <img onClick={getValue} className="w-100" src={`../../images/${item.image}.png`} data-img={item.image} alt="img"/>
                            <span style={{backgroundColor: item.color}}>{item.title}</span>
                        </div>
                    </Link>
                </Col>)
            } 
            </Row>
        </Container>

        <footer className="bg-dark d-flex justify-content-center p-4"></footer>

        </>
    );
};

export default Landingpage;
