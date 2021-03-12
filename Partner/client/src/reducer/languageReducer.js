import { SET_LANGUAGE } from "../actions/types";

const initialState = {
  language: "",
  islanguage: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE: {
      return {
        language: action.payload,
        islanguage: true,
      };
    }

    default:
      return state;
  }
}
