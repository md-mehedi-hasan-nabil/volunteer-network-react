import React, { useEffect, useState } from 'react';
import trash from '../../logos/trash.png';

const AdminData = () => {
    const [userData, AdduserData] = useState([]);
    
    useEffect(()=>{
        fetch('https://safe-island-26719.herokuapp.com/users')
        .then(res => res.json())
        .then(data => {
            AdduserData(data);
        })
        .catch(err => console.log(err));
    }, []);

    const deleteUser = (id) => {
        fetch(`https://safe-island-26719.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            // console.log(result);
        });
        window.location.reload();
    }
    
    
    return (
        <>
        {
            userData ?
            userData.map(showUser => {
                return (
                     <tr key={showUser._id}>
                        <td>{showUser.name}</td>
                        <td>{showUser.email}</td>
                        <td>{showUser.date}</td>
                        <td>{showUser.work}</td>
                        <td> <button onClick={() => deleteUser((showUser._id))} className="btn"><img src={trash} alt="trash" className="bg-danger rounded" style={{width: '22px'}} /></button> </td>
                    </tr>
                )
            }) :
            <div class="spinner-grow text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        }
        </>
    );
};

export default AdminData;