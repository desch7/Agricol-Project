import { useState, useEffect } from 'react';
import PlantService from '../services/PlantService';


function PlantListComponent(){

    const [num,setNum]=useState(0);
    const [plants,setPlants]=useState([]);
    const editPlant=(id)=>{

    }

    const deletePlant=(id)=>{
        
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
                                        <button onClick={()=>editPlant(plant.id)} className="btn btn-info">Update</button>
                                        <button onClick={()=>deletePlant(plant.id)} className="btn btn-danger" style={{marginLeft: "5px"}} >Delete</button> 
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
export default PlantListComponent;