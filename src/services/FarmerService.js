import axios from "axios";

const urlBase="http://localhost:8087/api/farmer";

class FarmerService {

    createFarmer(farmer){
        return axios.post(urlBase+"/create", farmer);
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

    updateFarmer(id,farmer){
        return axios.put(urlBase+"/update/"+id,farmer);
    }

    deleteFarmer(id){
        return axios.delete(urlBase+"/delete/"+id);
    }
}
export default new FarmerService()