import axios from "axios";

const url = "http://localhost:8080/api/"

export class ReceiverService{
    static createReceiver(data){
        console.log("obj")
        console.log(data)
        return axios.post(url + 'receiver', data)
    }

    static getAllReceiverType(){
        // return axios.get(url + 'receiver/types')
    }
}