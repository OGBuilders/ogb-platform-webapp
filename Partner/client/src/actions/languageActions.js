import {SET_LANGUAGE} from "./types";

export const setLanguage=(param)=>(dispatch)=>{
    dispatch({
        type:SET_LANGUAGE,
        payload:param,
    })
}