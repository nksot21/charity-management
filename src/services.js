import axios from "axios";

const url = "http://localhost:8080/api/"

export class ReceiverService{
    static createReceiver(data){
        return axios.post(url + 'receiver', data)
    }

    static getAllReceivers(){
        return axios.get(url + 'receiver')
    }

    static getReceiverById(id){
        return axios.get(url + 'receiver/' + id)
    }

    static getAllReceiverType(){
        return axios.get(url + 'receiver/types')
    }
}