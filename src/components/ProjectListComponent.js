import { useState, useEffect } from 'react';
import ProjectService from '../services/ProjectService';
import { Link } from 'react-router-dom';


function ProjectListComponent(){

    const [num,setNum]=useState(0);
    const [projects,setProjects]=useState([]);


    useEffect(()=>{
        ProjectService.findAll().then((res)=>{
            setProjects(res.data);
        });
    },[num]);
    console.log(projects);

    async function deleteProject (id) {
        await ProjectService.deleteProject(id);
        //setNum(1);
        window.location.reload();
    }
 
return(
    <div>
        <br/>

            <h2 className="text-center"> Project List</h2>
            <br/>
            <div className="col">
                <Link to={"/plantList"}>Manage Plant
                </Link>
                <div style={{marginLeft: "5px"}}>
                <Link to={"/farmerList"}>Manage Farmer
                </Link>
                </div>
            </div>
            <br/>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>sowing date</th>
                            <th>harvest date</th>
                            <th>Farmer name</th>
                            <th>Plant name</th>
                            <th>country</th>
                            <th>area</th>
                            <th>Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.map(
                                project=>
                                <tr key ={project.id}>
                                    <td>{project.name}</td>
                                    <td>{project.sowing_date}</td>
                                    <td>{project.harvest_date}</td>
                                    <td>{project.farmer_id.name}</td>
                                    <td>{project.plant_id.name}</td>
                                    <td>{project.country}</td>
                                    <td>{project.area}</td>
                                    <td>
                                    <Link to={`/createProject/${project.id}`}>
                                        <button  className="btn btn-info">Update</button>
                                    </Link>
                                   
                                        <button  className="btn btn-danger" style={{marginLeft: "5px"}} onClick={()=>deleteProject(project.id)}>Delete</button>
                                    
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table> 
                
            </div>
            <div className="col">
                <Link to={"/createProject/-1"}>Create Project
                </Link>
            </div>
            
    </div>
);

}
export default ProjectListComponent;