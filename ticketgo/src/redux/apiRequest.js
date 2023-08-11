import axios from "axios";
import {
    loginStart, loginFailed, loginSuccess
} from "./authSlice";

export const getAppToken = async (data, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('https://open.larksuite.com/open-apis/auth/v3/app_access_token/internal', data);
        dispatch(loginSuccess(res.data));
        //navigate("/home");
    } catch (error) {
        dispatch(loginFailed());
    }
}