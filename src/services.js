import axios from "axios";
import { async } from "q";

const url = "http://localhost:8080/api/";

export class ReceiverService {
  static createReceiver(data) {
    return axios.post(url + "receiver", data);
  }

  static getAllReceivers() {
    return axios.get(url + "receiver");
  }

  static getReceiverById(id) {
    return axios.get(url + "receiver/" + id);
  }

  static getAllReceiverType() {
    return axios.get(url + "receiver/types");
  }

  static getAllDistribution(id) {
    return axios.get(url + "distribution/receiver/" + id);
  }
}

export class CategoryService {
  static async getAll() {
    return await axios.get(url + "categories");
  }

  static async create(data) {
    console.log(data);
    return await axios.post(url + "categories", data);
  }

  static async getCategoryById(id) {
    return await axios.get(url + "categories/" + id);
  }

  static async getDistributionByCategory(id) {
    return await axios.get(url + "distribution/category/" + id);
  }

  static async getDonationByCategory(id) {
    return await axios.get(url + "donations/category/" + id);
  }
  static async getCategories() {
    return await axios.get(url + "categories");
  }
}

export class DistributionService {
  static async createDistribution(data) {
    return await axios.post(url + "distribution", data);
  }

  static async getDistributionByEvent(id){
    return await axios.get(url + "distribution/event/" + id)
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

  static async getJoinedEvents(donorId) {
    return await axios.get(url + "donors/" + donorId + "/events");
  }

  static async checkPassword(donorId, password) {
    const data = new FormData();
    data.append("donorId", donorId);
    data.append("password", password);
    return await axios.post(url + "donors/check-password", data);
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

  static async getJoinedDonors(eventId) {
    return await axios.get(url + "events/" + eventId + "/donors");
  }

  // Get total amount of money/item that a donor donate to an event
  static async getAmount(eventId, donorId) {
    return await axios.get(
      url + "events/" + eventId + "/donor-amount/" + donorId
    );
  }
}

export class StorageService {
  static async getImageURL(image) {
    return await axios.post(url + "images", image);
  }
}

export class DonationService {
  static async getAllDonation() {
    return await axios.get(url + "donations");
  }

  static async addDonation(donation) {
    return await axios.post(url + "donations", donation);
  }

  static async getDonationsByEvent(eventId) {
    return await axios.get(url + "events/" + eventId + "/donations");
  }

  static async getDonationsByDonor(donorId) {
    return await axios.get(url + "donors/" + donorId + "/donations");
  }

  static async getAmountByCategoryAllEventEachDonor(donorId) {
    return await axios.get(
      url + "donors/" + donorId + "/total-amount-by-category"
    );
  }
}

export class TransferService {
  static async addTransferFrom(transferFrom) {
    return await axios.post(url + "transfer-from", transferFrom);
  }
}

export class ItemService {
  static async addItemFrom(itemFrom) {
    return await axios.post(url + "itemfr", itemFrom);
  }
}
