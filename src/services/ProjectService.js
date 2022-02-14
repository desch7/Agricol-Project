import axios from "axios";

const urlBase="http://localhost:8087/api/project";
class ProjectService{

    createProject(project){
        return axios.post(urlBase+"/create",project);
    }

    findAll(){
        return axios.get(urlBase+"/findAll");
    }

    findById(id){
        return axios.get(urlBase+"/findById/"+id);
    }

    updateProject(id,project){
        return axios.put(urlBase+"/update/"+id,project);
    }

    deleteProject(id){
        return axios.delete(urlBase+"/delete/"+id);
    }
    
}
export default new ProjectService()