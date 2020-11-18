import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Admin.css';
import logo from '../../logos/logo.png';
import users from '../../logos/users.png';
import plus from '../../logos/plus.png';
import AdminData from './AdminData';

const Admin = () => {
    document.title = 'Admin';
    return (
        <Container>
            <Row className="mt-2">
                <Col>
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="logo" className="w-100" />
                    </Link>
                    <h5 className="d-inline m-4 pl-5"> <span>Volunteer register list</span> </h5>
                </Col>
            </Row>
            <Row>
                <Col lg={3} className="mt-4">
                    <Link to="/admin" style={{color: '#03a9f4'}} className="py-2">
                        <img src={users} alt="users" style={{width: '18px'}} /> Volunteer register list
                    </Link>
                    <Link to="/addEvent" className="btn btn-outline-primary btn-sm m-3"> 
                    <img src={plus} alt="plus" className="w-25 mr-2"/>
                    Add event</Link>
                </Col>
                <Col lg={8} style={{backgroundColor: 'rgb(229, 229, 229)'}} className="p-4">
                <table className="table table-hover bg-light w-100">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Registration date</th>
                        <th scope="col">Volunteer list</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <AdminData />
                        }
                    </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
};

export default Admin;