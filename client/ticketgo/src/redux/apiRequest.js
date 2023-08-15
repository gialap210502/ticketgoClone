import axios from "axios";
import {
    loginStart, loginFailed, loginSuccess
} from "./authSlice";

export const getCodeAuth = async (dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.get('http://localhost:5500/auth');
        dispatch(loginSuccess("Succes"));
    } catch (error) {
        dispatch(loginFailed());
    }
}
export const getList = async (dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.get('http://localhost:5500/listTableRecords');
        dispatch(loginSuccess(res.data.items));
        //navigate("/home");
    } catch (error) {
        dispatch(loginFailed());
    }
}