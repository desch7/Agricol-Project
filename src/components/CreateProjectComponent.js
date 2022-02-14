import { useEffect, useState } from 'react';
import {useForm,Controller} from 'react-hook-form';
import Select from "react-select";
import {useParams} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import ProjectService from '../services/ProjectService';
import PlantService from '../services/PlantService';
import FarmerService from '../services/FarmerService';

function CreateProjectComponent(){
    const navigate=useNavigate();
    const params=useParams();
    const [num,setNum]=useState(0);
    const [id,setId]=useState(params.id);
    const [proj,setProj]=useState({});
    

    const {register,handleSubmit, formState:{errors}, trigger,control}=useForm();
    const [plantList,setplantList]=useState([]);
    const [farmerList,setfarmerList]=useState([]);

    useEffect(()=>{
        
        if(id!=-1){
            ProjectService.findById(id).then((res)=>{setProj(res.data);});
        }

        PlantService.findAllDto().then((res)=>{
            setplantList(res.data);
        });
            FarmerService.findAllDto().then((res)=>{
                setfarmerList(res.data);
        });
    },[num]);
 
/*
    const [Ddeb,setDdeb]=useState(`${new Date().getFullYear()}-${mois}-${new Date().getDate()}`);
    const [SDdeb,setSDdeb]=useState(`${new Date().getFullYear()}-${mois}-${new Date().getDate()}`);
    const [DFin,setDFin]=useState(`${new Date().getFullYear()}-${mois}-${new Date().getDate()}`);
    const [ADFin,setADFin]=useState(`${new Date().getFullYear()}-${mois}-${new Date().getDate()}`);
    */

   

    async function onSubmit (data) {
        console.log(data);
        let data1={
            anticipated_harvest_date:"",
            sowing_date:"",
            contact_date:"",
            harvest_date:"",
            step_in_process:0,
            isupdate:false,
            localisation:"",
            country:"",
            name:"",
            status:"",
            area:0,
            plant_id:0,
            farmer_id:0

        };
        data1.plant_id=data.plant_id.value;
        data1.farmer_id=data.farmer_id.value;
        data1.anticipated_harvest_date=data.anticipated_harvest_date;
        data1.sowing_date=data.sowing_date;
        data1.contact_date=data.contact_date;
        data1.harvest_date=data.harvest_date;
        data1.step_in_process=data.step_in_process;
        data1.isupdate=data.isupdate; 
        data1.localisation=data.localisation;
        data1.country=data.country;
        data1.name=data.name;
        data1.status=data.status;
        data1.area=data.area;
        if(id==-1){
        await ProjectService.createProject(data1);
        navigate("/");
        }else{
            await ProjectService.updateProject(id,data1);
            navigate("/"); 
        }
    };


    return(
        <div className="container pt-5">
            <div className="row justify-content-sm-center pt-5">
                <div className="col-sm-6 shadow round pb-3">
                    <h2 className="text-center pt-3 text-secondary">Project Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="col-form-label">Name</label>
                            <input type="text" className={`form-control ${errors.name && " is-invalid"}`} 
                            {...register("name", {required:"Name is required"})} value={proj.name}
                            onKeyUp={()=>{trigger("name");}}
                            />
                            {errors.name && (<small className="text-danger" >{errors.name?.message}</small>)}
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Contact date</label>
                            <input type="date"  className="form-control"
                            {...register("contact_date", {required: "Date required"})}
                            value={proj.contact_date}
                            />
                            {errors.contact_date && (<small className="text-danger" >{errors.contact_date?.message}</small>)}
                           
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Sowing date</label>
                            <input type="date"  className="form-control"
                            {...register("sowing_date", {required: "Date required"})}
                            value={proj.sowing_date}
                            />
                            {errors.sowing_date && (<small className="text-danger" >{errors.sowing_date?.message}</small>)}
                           
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Harvest date</label>
                            <input type="date"  className="form-control"
                            {...register("harvest_date", {required: "Date required"})}
                            value={proj.harvest_date}
                            />
                            {errors.harvest_date && (<small className="text-danger" >{errors.harvest_date?.message}</small>)}
                           
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Anticipated harvest date</label>
                            <input type="date"  className="form-control"
                            {...register("anticipated_harvest_date", {required: "Date required"})}
                            value={proj.anticipated_harvest_date}
                            />
                            {errors.anticipated_harvest_date && (<small className="text-danger" >{errors.anticipated_harvest_date?.message}</small>)}
                           
                        </div>

                        <div className="form-group">
                        <label className="col-form-label">Farmer</label>
                            <Controller
                                name="farmer_id"
                                control={control}
                                render={({ field }) => (
                                <Select
                                  
                                    {...field}
                                    isClearable
                                    isSearchable={false}
                                    className="react-dropdown"
                                    classNamePrefix="dropdown"
                                    options={farmerList}
                                />
                                )}
                                rules={{ required: "Select required" }}
                            />
                            {errors.farmer_id && (<small className="text-danger" >{errors.farmer_id?.message}</small>)}
                        </div>

                        <div className="form-group">
                        <label className="col-form-label">Plant</label>
                            <Controller
                                name="plant_id"
                                control={control}
                                render={({ field }) => (
                                <Select
                                  
                                    {...field}
                                    isClearable
                                    isSearchable={false}
                                    className="react-dropdown"
                                    classNamePrefix="dropdown"
                                    options={plantList}
                                />
                                )}
                                rules={{ required: "Select required" }}
                            />
                            {errors.plant_id && (<small className="text-danger" >{errors.plant_id?.message}</small>)}
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Localisation</label>
                            <input type="text" className={`form-control ${errors.localisation && " is-invalid"}`} 
                            {...register("localisation", {required:"country is required"})}
                            onKeyUp={()=>{trigger("country");}}
                            value={proj.localisation}
                            />
                            {errors.localisation && (<small className="text-danger" >{errors.localisation?.message}</small>)}
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">country</label>
                            <input type="text" className={`form-control ${errors.country && " is-invalid"}`} 
                            {...register("country", {required:"country is required"})}
                            onKeyUp={()=>{trigger("country");}}
                            value={proj.country}
                            />
                            {errors.country && (<small className="text-danger" >{errors.country?.message}</small>)}
                        </div>


                        <div className="form-group">
                            <label className="col-form-label">Area</label>
                            <input type="text" className={`form-control ${errors.age && " is-invalid"}`} 
                            {...register("area", {required:"Area is required",
                            pattern:{value:/^[0-9]*$/, message:"Only numbers are allowed"}
                            })}
                            onKeyUp={()=>{trigger("area");}}
                            value={proj.area}
                            />
                            {errors.area && (<small className="text-danger" >{errors.area?.message}</small>)}
                            
                        </div>

                        <br/>

                        <button className="btn btn-success " type="submit">Creer</button>
                        <Link style={{marginLeft: "10px"}} to={"/"}>Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );

}
export default CreateProjectComponent;