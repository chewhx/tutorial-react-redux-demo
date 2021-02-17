import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userConstant";
import axios from "axios";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUserRequest());
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      const users = res.data;
      dispatch(fetchUserSuccess(users));
    })
    .catch((err) => dispatch(fetchUserFailure(err.message)));
};
