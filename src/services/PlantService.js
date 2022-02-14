import axios from "axios";

const urlBase="http://localhost:8087/api/plant";
class PlantService{

    createPlant(plant){
        return axios.post(urlBase+"/create",plant);
    }

    findAllDto(){
        return axios.get(urlBase+"/findAllDto");
    }

    findAll(){
        return axios.get(urlBase+"/findAll");
    }

    findById(id){
        return axios.get(urlBase+"/findById/"+id);
    }

    updatePlant(id,plant){
        return axios.put(urlBase+"/update/"+id,plant);
    }

    deletePlant(id){
        return axios.delete(urlBase+"/delete/"+id);
    }
}
export default new PlantService()