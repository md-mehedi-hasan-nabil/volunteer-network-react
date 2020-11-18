import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import babySit from '../../images/babySit.png';

const Tasks = () => {
    const [userData, AdduserData] = useState([]);
    
    useEffect(()=>{
        fetch('https://safe-island-26719.herokuapp.com/users')
        .then(res => res.json())
        .then(data => {
            AdduserData(data);
        }) 
        .catch(err => console.log(err));
    }, []);
    document.title = 'Tasks';
    return (
        <>
        {
            userData ? 
            userData.map(data => {
                return (
                <Col md={6} key={data._id}>
                <div className="card m-3">
                    <div className="row no-gutters">
                        <div className="col-sm-5">
                            <img className="card-img" src={babySit} alt="Suresh Dasari Card" />
                        </div>
                        <div className="col-sm-7">
                            <div className="card-body">
                                <h5 className="card-title">{data.work}</h5>
                                <p className="card-text">{data.date}</p>
                                <button className="btn btn-primary">See more</button>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>)
            }) : 
            <div class="spinner-grow text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        
        }
        </>
    );
};

export default Tasks;