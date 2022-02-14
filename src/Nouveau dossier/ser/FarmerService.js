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
}
export default new FarmerService()