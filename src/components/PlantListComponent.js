import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PlantService from '../services/PlantService';


function PlantListComponent(){
    

    const [num,setNum]=useState(0);
    const [plants,setPlants]=useState([]);
   
    async function deletePlant (id) {
        await PlantService.deletePlant(id);
        //setNum(1);
        window.location.reload();
    }

    useEffect(()=>{
        PlantService.findAll().then((res)=>{
            setPlants(res.data);
        });
    },[num]);
 
return(
    <div>
        <br/>

            <h2 className="text-center"> Plants List</h2>
            <br/>
            <div className="col">
                <Link to={"/"}>Manage Project
                </Link>
                <div style={{marginLeft: "5px"}}>
                <Link style={{marginLeft: "5px"}} to={"/farmerList"}>Manage Farmer
                </Link>
                </div>
            </div>
            <br/>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Seed type</th>
                            <th>Periodicite</th>
                            <th>Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            plants.map(
                                plant=>
                                <tr key ={plant.id}>
                                    <td>{plant.name}</td>
                                    <td>{plant.seed_type}</td>
                                    <td>{plant.periodicite}</td>
                                    <td>
                                    <Link to={`/createPlant/${plant.id}`}>
                                        <button  className="btn btn-info">Update</button>
                                    </Link>
                                   
                                        <button  className="btn btn-danger" style={{marginLeft: "5px"}} onClick={()=>deletePlant(plant.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table> 
                
            </div>
            <div className="col">
                <Link to={"/createPlant/-1"}>Create Plant
                </Link>
            </div>
            
    </div>
);

}
export default PlantListComponent;