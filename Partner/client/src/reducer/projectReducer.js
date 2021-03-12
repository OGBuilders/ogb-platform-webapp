import { GET_PROJECTS, PROJECT_LOADING, SET_PROJECTID } from "../actions/types";

//initial state is defined

const initialState = {
  getProject: false,
  projects: [],
  projectId: "",
};

//switch case statement whhich changes state based on the action type passed in the dispatched function
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS: {
      return {
        ...state,
        projects: action.payload,
        getProject: false,
      };
    }

    case PROJECT_LOADING: {
      return {
        ...state,
        getProject: true,
      };
    }

    case SET_PROJECTID: {
      return {
        ...state,
        projectId: action.payload,
      };
    }

    default:
      return state;
  }
}
