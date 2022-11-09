import axios from "axios";
import Global from "../Global";

export default class HospitalesServices {

    getHospitales(request) {
        return new Promise(function(resolve) {
            var url = Global.urlApi + request;
            var hospitales = [];
            axios.get(url).then(response => {
                hospitales = response.data; // Asigno a mi array, los datos recibidos
                resolve(hospitales); // Devuelvo el array de hospitales 
            });
        });
    }

    getHospital(request, idHospital) {
        return new Promise(function(resolve) {
            var url = Global.urlApi + request + idHospital;
            var hospital = {};
            axios.get(url).then(response => {
                hospital = response.data;
                resolve(hospital);
            });
        });
    }
    
    postHospital(request, hospital) {
        return new Promise(function(resolve) {
            var url = Global.urlApi + request;
            axios.post(url, hospital).then(response => {
                resolve(response);
            });
        });
    }

    putHospital(request, hospital) {
        return new Promise(function(resolve) {
            var url = Global.urlApi + request;
            axios.put(url, hospital).then(response => {
                resolve(response);
            });
        });
    }

    deleteHospital(request, idHospital) {
        return new Promise(function(resolve) {
            var url = Global.urlApi + request + idHospital;
            axios.delete(url).then(response => {
                resolve(response);
            });
        });
    }

}