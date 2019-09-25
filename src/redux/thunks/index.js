/* eslint-disable max-len */
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://svas123.herokuapp.com/api/',
});

// eslint-disable-next-line max-len
const postDataThunk = (method, endpoint, actionCreator, data) => (dispatch) => axiosInstance[method](endpoint, data)
  .then((response) => {
    dispatch(actionCreator(response.data));
  })
  .catch((error) => {
    dispatch(actionCreator({ errors: error.response.data.message || error.response.data.message[0] }));
  });

const postDataThunksignup = (method, endpoint, actionCreator, data) => (dispatch) => axiosInstance[method](endpoint, data)
  .then((response) => {
    dispatch(actionCreator(response.data.message));
  })
  .catch((error) => {
    dispatch(actionCreator({ errors: error.response.data.message || error.response.data.message[0] }));
  });

const postDataThunkPrivate = (method, endpoint, actionCreator, data) => (dispatch) => {
  const Authorization = localStorage.getItem('token');
  axiosInstance.defaults.headers.common.Authorization = Authorization;
  return axiosInstance[method](endpoint, data).then((response) => {
    dispatch(actionCreator(response.data));
  }).catch((error) => {
    dispatch(actionCreator({ errors: error.response.data.message }));
  });
};

export { postDataThunk, postDataThunksignup, postDataThunkPrivate };
