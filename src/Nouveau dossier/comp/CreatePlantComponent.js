import { useState } from 'react';
import {useForm} from 'react-hook-form';
import PlantService from '../services/PlantService';

function CreatePlantComponent(){
    const {register,handleSubmit, formState:{errors}, trigger}=useForm();
   


    const onSubmit=(data)=>{
        console.log(data);
        PlantService.createPlant(data);
    };

    //console.log(errors);
    const cancel=()=>{
        
     }

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
                            />
                            {errors.periodicite && (<small className="text-danger" >{errors.periodicite?.message}</small>)}
                            
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Seed Type</label>
                            <input type="text" className={`form-control ${errors.seed_type && " is-invalid"}`} 
                            {...register("seed_type", {required:"Seed Type is required"})}
                            onKeyUp={()=>{trigger("seed_type");}}
                            />
                            {errors.seed_type && (<small className="text-danger" >{errors.seed_type?.message}</small>)}
                        </div>

                        <button className="btn btn-primary my-3" type="submit">Save</button>
                        <button className="btn btn-danger " style={{marginLeft: "10px"}} onClick={()=>cancel()}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );

}
export default CreatePlantComponent