import axios from "axios";
import { async } from "q";

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

  static async logIn(username, password) {
    const loginFormData = new FormData();
    loginFormData.append("username", username);
    loginFormData.append("password", password);
    return await axios.post(url + "donors/log-in", loginFormData);
  }

  static async getDonor(donorId) {
    return await axios.get(url + "donors/" + donorId);
  }

  static async addDonor(donor) {
    return await axios.post(url + "donors/add", donor);
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
