import axios from "axios";
import { getListStart, getListFailed, getListSuccess} from "./authSlice";
import { orderStart, orderSuccess, orderFail} from "./orderSlice";

axios.defaults.baseURL = 'http://localhost:5500/';

export const createOrder = async (dispatch,data) => {
    dispatch(orderStart());
    try {
        await axios.post('/order', data);
        dispatch(orderSuccess());
    } catch (error) {
        dispatch(orderFail(error));
    }
}


export const getCodeAuth = async (dispatch) => {
    dispatch(getListStart());
    try {
        const res = await axios.get('/auth');
        dispatch(getListSuccess(res.data));
    } catch (error) {
        dispatch(getListFailed());
    }
}

export const getList =  async (dispatch) => {
    dispatch(getListStart());
    try {
        const res = await axios.get('/listTableRecords');
        dispatch(getListSuccess(res.data));
        //navigate("/home");
    } catch (error) {
        dispatch(getListFailed());
    }
}