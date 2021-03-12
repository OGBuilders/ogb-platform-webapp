import { SET_CONTACT, RESET_CONTACT } from "../actions/types";

//initial state is defined

const initialState = {
  customerInfo: false,
  customerDetails: {},
};

//switch case statement whhich changes state based on the action type passed in the dispatched function
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CONTACT: {
      return {
        ...state,
        customerDetails: action.payload,
        customerInfo: true,
      };
    }

    case RESET_CONTACT: {
      return {
        ...state,
        customerDetails: {},
        customerInfo: false,
      };
    }

    default:
      return state;
  }
}
