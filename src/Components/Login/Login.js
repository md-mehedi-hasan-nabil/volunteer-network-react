import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../logos/logo.png';
import google from '../../logos/google.png';
import { UserContext } from '../../App';


firebase.initializeApp(firebaseConfig);

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const { displayName, email, emailVerified, photoURL } = res.user;
            const userData = {
                displayName: displayName,
                email: email,
                emailVerified: emailVerified,
                photoURL: photoURL,
                text: ''
            }
            setLoggedInUser(userData);
            history.replace(from);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return (
        <>
        <Container className="d-flex justify-content-center mt-3">
            <Link to="/"><img src={logo} alt="logo" style={{width: '150px'}}/></Link>
        </Container>
        <Container>
                <Row className="mt-3">
                    <Col lg={5} className="mx-auto mt-5 pt-5 border text-center">
                        <div className="p-4">
                            <h5 className="mb-3">Login With</h5>
                            <img src={google} alt="" className="googleIcon"/>
                            <button onClick={handleSignIn} className="btn w-100 m-2 btnIcon mb-5">Continue with Google</button>
                        </div>
                    </Col>
                </Row>
        </Container>
        </>
    );
};

export default Login;