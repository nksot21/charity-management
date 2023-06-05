import axios from "axios";
import { async } from "q";

const url = "http://localhost:8080/api/";

export class ReceiverService {
  static createReceiver(data) {
    return axios.post(url + "receiver", data);
  }

<<<<<<< HEAD
    static getAllReceivers(){
        return axios.get(url + 'receiver')
    }

    static getReceiverById(id){
        return axios.get(url + 'receiver/' + id)
    }

    static getAllReceiverType(){
        return axios.get(url + 'receiver/types')
    }

    static getAllDistribution(id){
        return axios.get(url + 'distribution/receiver/' + id)
    }
}
=======
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

export class EventService {
  static async getAllEvents() {
    return await axios.get(url + "events");
  }

  static async getEvent(eventId) {
    return await axios.get(url + "events/" + eventId);
  }

  // add or update
  static async addEvent(event) {
    return await axios.post(url + "events", event);
  }

  static async deleteEvent(eventId) {
    return await axios.delete(url + "events/" + eventId);
  }
}

export class StorageService {
  static async getImageURL(image) {
    return await axios.post(url + "images", image);
  }
}
>>>>>>> dev
