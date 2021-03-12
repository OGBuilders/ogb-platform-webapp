import axios from "axios";
import { SET_CONTACT, RESET_CONTACT } from "./types";

//Function to send contact
export const setCustomerInfo = (userData) => (dispatch) => {
  // Send POST Request to the API
  var formBody = [];
  for (var property in userData) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(userData[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  console.log(formBody);

  // Send POST request to the OGB API
  axios
    .post(
      "http://35.209.131.147/customer/leads", 
      formBody, 
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        }
      })
    .then((res) => {
      dispatch({ type: SET_CONTACT, payload: userData });
    })
    //RESETING customer info if there is error
    .catch((err) => dispatch({ type: RESET_CONTACT }));
};
