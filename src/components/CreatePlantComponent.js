import { useState, useEffect } from 'react';
import {useForm} from 'react-hook-form';
import {useParams, Redirect} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import PlantService from '../services/PlantService';

function CreatePlantComponent(){
    const navigate=useNavigate();
    const {register,handleSubmit, formState:{errors}, trigger}=useForm();
    const params=useParams();
    const [num,setNum]=useState(0);
    const [id,setId]=useState(params.id);
    const [plt,setPlt]=useState({});


    async function onSubmit(data){
        console.log(data);
        if(id==-1){
            await PlantService.createPlant(data);
            navigate("/plantList");
            }else{
            await PlantService.updatePlant(id,data);
                navigate("/plantList"); 
            }
    };

    useEffect(()=>{
        
        if(id!=-1){
            PlantService.findById(id).then((res)=>{setPlt(res.data);});
        }

    },[num]);

   
    return(
        <div className="container pt-5">
            <div className="row justify-content-sm-center pt-5">
                <div className="col-sm-6 shadow round pb-3">
                    <h2 className="text-center pt-3 text-secondary">Plant Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="col-form-label">Name</label>
                            <input type="text" className={`form-control ${errors.name && " is-invalid"}`} 
                            {...register("name", {required:"Name is required"})}
                            onKeyUp={()=>{trigger("name");}}
                            value={plt.name}
                            />
                            {errors.name && (<small className="text-danger" >{errors.name?.message}</small>)}
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Periodicite</label>
                            <input type="text" className={`form-control ${errors.periodicite && " is-invalid"}`} 
                            {...register("periodicite", {required:"periodicite is required", 
                            pattern:{value:/^[0-9]*$/, message:"Only numbers are allowed"}
                            })}
                            onKeyUp={()=>{trigger("periodicite");}}
                            value={plt.periodicite}
                            />
                            {errors.periodicite && (<small className="text-danger" >{errors.periodicite?.message}</small>)}
                            
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Seed Type</label>
                            <input type="text" className={`form-control ${errors.seed_type && " is-invalid"}`} 
                            {...register("seed_type", {required:"Seed Type is required"})}
                            onKeyUp={()=>{trigger("seed_type");}}
                            value={plt.seed_type}
                            />
                            {errors.seed_type && (<small className="text-danger" >{errors.seed_type?.message}</small>)}
                        </div>

                        <button className="btn btn-primary my-3" type="submit">Save</button>
                        <Link style={{marginLeft: "10px"}} to={"/plantList"}>Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );

}
export default CreatePlantComponent