import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FarmerService from '../services/FarmerService';


function FarmerListComponent(){

    const [num,setNum]=useState(0);
    const [farmers,setFarmers]=useState([]);
   
    async function deleteFarmer (id) {
        await FarmerService.deleteFarmer(id);
        //setNum(1);
        window.location.reload();
    }

    useEffect(()=>{
        FarmerService.findAll().then((res)=>{
            setFarmers(res.data);
        });
    },[num]);
 
return(
    <div>
        <br/>

            <h2 className="text-center"> Farmers List</h2>
            <br/>
            <div className="col">
                <Link to={"/"}>Manage Project
                </Link>
                <div style={{marginLeft: "5px"}}>
                <Link style={{marginLeft: "5px"}} to={"/plantList"}>Manage Plant
                </Link>
                </div>
            </div>
            <br/>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Sexe</th>
                            <th>email</th>
                            <th>Phone</th>
                            <th>Whatsapp</th>
                            <th>Biography</th>
                            <th>Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            farmers.map(
                                farmer=>
                                <tr key ={farmer.id}>
                                    <td>{farmer.name}</td>
                                    <td>{farmer.age}</td>
                                    <td>{farmer.sexe}</td>
                                    <td>{farmer.email}</td>
                                    <td>{farmer.phone}</td>
                                    <td>{farmer.whatsapp}</td>
                                    <td>{farmer.biography}</td>
                                    <td>
                                    <Link to={`/createFarmer/${farmer.id}`}>
                                        <button  className="btn btn-info">Update</button>
                                    </Link>
                                   
                                        <button  className="btn btn-danger" style={{marginLeft: "5px"}} onClick={()=>deleteFarmer(farmer.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table> 
            </div>
            <div className="col">
                <Link to={"/createFarmer/-1"}>Create Farmer
                </Link>
            </div>
            
    </div>
);

}
export default FarmerListComponent;