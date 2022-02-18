import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import 'moment';
import {history} from '../configureStore'
import {axiosInstance } from '../../config';
import { setCookie, deleteCookie } from '../../shared/Cookies';

const token = localStorage.getItem('token')
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const SIGN_UP = 'SIGN_UP';
const GET_USER = 'GET_USER';


const logIn = createAction(LOG_IN, (accountId, nickname, id, token) => ({
  accountId,
  nickname,
  id,
  token,
}));
const signUp = createAction(SIGN_UP, (id, email, nickname, password) => ({
  nickname,
  id,
  email,
  password,
}));


const getUser = createAction(GET_USER, (user) => ({user}))
const logout = createAction(LOG_OUT, (user) => ({user}));

const initialState = {
  user: {
    userEmail : "",
    userId : 1,
    userName: "",
}

};


const signUpDB = (id, nickname, pwd, pwdcheck) => {
  return function (dispatch) {
    axiosInstance.post(`/api/signup`, {
        username: id,
        nickname: nickname,
        password: pwd,
        passwordcheck: pwdcheck,
      })
      .then((response) => {
        console.log(response.data);
        dispatch(signUp(id, nickname, pwd));
        window.alert('가입을 축하드려요!');
        history.push('/login')
      })
      .catch((err) => {
        console.log(`회원가입 오류 발생: ${err}`);
      });
  };
};


const log_Out = () => {
  return function(dispatch, getState, {history}){
    dispatch(logout())
    history.replace('/')
  }
}

const getUserCheck = () =>{
  return function (dispatch, getState, {history}){
    axiosInstance.get(`/api/idCheck`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  })
    .then((res) => {
    localStorage.setItem('userId', JSON.stringify(res.data))
    dispatch(getUser(res.data))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}



//reducer
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success")
        draft.list = { ...action.payload };
      }),
    [SIGN_UP]: (state, action) =>
      produce(state, (draft) => {
        draft.list = { ...action.payload };
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        console.log(action.payload);
      }),

      [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
      }),
  },
  initialState
);

const actionsCreators = {
  logIn,
  signUpDB,
  log_Out,
  getUserCheck,
};

export { actionsCreators };