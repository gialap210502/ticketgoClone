import axios from "axios";
import {
    loginStart, loginFailed, loginSuccess
} from "./authSlice";

export const getCodeAuth = () => async (dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('/auth');
        console.log('success');
    } catch (error) {
        dispatch(loginFailed());
    }
}
export const getList = () => async (dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.get('/listTableRecords');
        dispatch(loginSuccess(res.data));
        //navigate("/home");
    } catch (error) {
        dispatch(loginFailed());
    }
}