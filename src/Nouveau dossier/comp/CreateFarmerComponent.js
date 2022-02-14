import { useState } from 'react';
import {useForm, Controller} from 'react-hook-form';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Select from "react-select";
import FarmerService from '../services/FarmerService';
import axios from "axios";

function CreateFarmerComponent(){
    const urlBase="http://localhost:8087/api/farmer";
 
    const {register,handleSubmit, formState:{errors}, trigger, control}=useForm();
    const sexeList=[
        {label:"Men", value:"Men"},
        {label:"Women", value:"Women"}
    ];


    const onSubmit=(data)=>{
        
        let data1={name:"",age:0,sexe:"",email:"",phone:0,whatsapp:0,biography:""};
        data1.name=data.name;
        data1.age=parseInt(data.age);
        data1.sexe=data.sexe.value;
        data1.email=data.email;
        data1.phone=parseInt(data.phone);
        data1.whatsapp=parseInt(data.whatsapp);
        data1.biography=data.biography;
        //console.log(">>>>>>",data.sexe.value);
        FarmerService.createFarmer(data1);
    };

    //console.log(errors);

    return(
        <div className="container pt-5">
            <div className="row justify-content-sm-center pt-5">
                <div className="col-sm-6 shadow round pb-3">
                    <h2 className="text-center pt-3 text-secondary">Farmer Form</h2>
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
                            <label className="col-form-label">Age</label>
                            <input type="text" className={`form-control ${errors.age && " is-invalid"}`} 
                            {...register("age", {required:"Age is required", 
                            /*min:{value:13, message: "Minimum age required is 13"},
                            max:{value:60, message: "Maximum allowed age is 60"},*/
                            pattern:{value:/^[0-9]*$/, message:"Only numbers are allowed"}
                            })}
                            onKeyUp={()=>{trigger("age");}}
                            />
                            {errors.age && (<small className="text-danger" >{errors.age?.message}</small>)}
                            
                        </div>

                        <div className="form-group">
                        <label className="col-form-label">Sexe</label>
                            <Controller
                                name="sexe"
                                control={control}
                                render={({ field }) => (
                                <Select
                                  
                                    {...field}
                                    isClearable
                                    isSearchable={false}
                                    className="react-dropdown"
                                    classNamePrefix="dropdown"
                                    options={sexeList}
                                />
                                )}
                                rules={{ required: "Select required" }}
                            />
                            {errors.sexe && (<small className="text-danger" >{errors.sexe?.message}</small>)}
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Email</label>
                            <input type="text" className={`form-control ${errors.email && " is-invalid"}`} 
                            {...register("email", {required:"Email is required",
                            pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message:"Invalid email address"}
                            })}
                            onKeyUp={()=>{trigger("email");}}
                            />
                            {errors.email && (<small className="text-danger" >{errors.email?.message}</small>)}
                            
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Phone</label>
                            <input type="text" className={`form-control ${errors.phone && " is-invalid"}`} 
                            {...register("phone", {required:"Phone is required",
                            pattern:{value:/^[0-9]*$/,
                            message:"Invalid format"}
                            })}
                            onKeyUp={()=>{trigger("phone");}}
                            />
                            {errors.phone && (<small className="text-danger" >{errors.phone?.message}</small>)}
                           
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Whatsapp</label>
                            <input type="text" className={`form-control ${errors.whatsapp && " is-invalid"}`} 
                            {...register("whatsapp", {required:"Whatsapp number is required",
                            pattern:{value:/^[0-9]*$/,
                            message:"Invalid format"}
                            })}
                            onKeyUp={()=>{trigger("whatsapp");}}
                            />
                            {errors.whatsapp && (<small className="text-danger" >{errors.whatsapp?.message}</small>)}
                           
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Biography</label>
                            <textarea className={`form-control ${errors.biography && " is-invalid"}`} 
                            {...register("biography", {required:"Message is required(Minimum length 10)",
                            minLength:{value:10, message: "Minimum length required is 10"},
                            maxLength:{value:100, message: "Maximum length allowed is 100"}
                            })}
                            onKeyUp={()=>{trigger("biography");}}
                            />
                            {errors.biography && (<small className="text-danger" >{errors.biography?.message}</small>)}
                            
                        </div>

                        <button className="btn btn-primary my-3" type="submit">Save</button>
                        {/*
                        <Router>
                            
                                <Link to="/"><button className="btn btn-danger " style={{marginLeft: "10px"}}>Cancel</button></Link>
                               
                        </Router>*/}
                    </form>
                </div>
            </div>
        </div>
    );

}
export default CreateFarmerComponent