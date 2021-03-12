import axios from "axios";

import { GET_PROJECTS, PROJECT_LOADING, SET_PROJECTID } from "./types";

//Function to get projects
export const getProjects = () => (dispatch) => {
  //setLoading function is dispatched
  dispatch(setProjectLoading());
  axios
    .get("https://restcountries.eu/rest/v2/all")
    .then((res) =>
      //Dispatch states so that the store is updated
      dispatch({
        type: GET_PROJECTS,
        payload: res.data,
      })
    )
    .catch((err) => dispatch({ type: GET_PROJECTS, payload: null }));
};

//SetLoading function for projects
export const setProjectLoading = () => {
  return {
    type: PROJECT_LOADING,
  };
};

//Set project Id to fetch project details
export const setProjectId = (projectId) => (dispatch) => {
  dispatch({
    type: SET_PROJECTID,
    payload: projectId,
  });
};
