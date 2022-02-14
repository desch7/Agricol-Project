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
}
export default new PlantService()