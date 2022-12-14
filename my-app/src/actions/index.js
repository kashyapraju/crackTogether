 import * as api from "../api/index.js"
import { SEND,FETCH_USERS ,GET_BY_DOMAIN} from "../components/constants.js";
import SignIn from "../components/signIn/signIn.js";
import { useNavigate } from "react-router-dom";

export const createUser=(data)=> async(dispatch)=>{
 
    try {
        const userData=await api.createUsr(data) 
        dispatch({type:SEND,payload:userData})
    } catch (error) {
        console.log("could not send");
    }
}

export const getUsers=()=>async(dispatch)=>{
    try {
        const users=await api.getUrs();
        dispatch({type:FETCH_USERS,payload:users})
    } catch (error) {
        console.log("could not fetch");
    }
}
export const getbydomain=(id)=>async(dispatch)=>{
    try {
        const users=await api.getUsersByDomain(id)
        dispatch({type:GET_BY_DOMAIN,payload:users})
    } catch (error) {
        console.log("could not get by domain");
    }
}