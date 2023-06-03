import axios from "axios";

const url = "http://localhost:8080/api/";

export class ReceiverService {
  static createReceiver(data) {
    return axios.post(url + "receiver", data);
  }

  static getAllReceiverType() {
    return axios.get(url + "receiver/types");
  }
}

export class DonorService {
  static async getAllDonors() {
    return await axios.get(url + "donors/get-all");
    }
    
  static async getDonor(donorId) {
    return await axios.get(url + "donors/" + donorId);
  }
}
