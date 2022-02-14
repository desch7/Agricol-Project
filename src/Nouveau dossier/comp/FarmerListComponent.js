import { useState, useEffect } from 'react';
import FarmerService from '../services/FarmerService';


function FarmerListComponent(){

    const [num,setNum]=useState(0);
    const [farmers,setFarmers]=useState([]);
    const editFarmer=(id)=>{

    }

    const deleteFarmer=(id)=>{
        
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
                                        <button onClick={()=>editFarmer(farmer.id)} className="btn btn-info">Update</button>
                                        <button onClick={()=>deleteFarmer(farmer.id)} className="btn btn-danger" style={{marginLeft: "5px"}} >Delete</button> 
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table> 
                <div className="col">
                </div>
            </div>
            
    </div>
);

}
export default FarmerListComponent;