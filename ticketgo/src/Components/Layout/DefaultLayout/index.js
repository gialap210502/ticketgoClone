import Footer from '../components/Footer/Footer';
import NavHeader from '../components/headNav/headerNav';
import Nav from '../components/Nav/Nav';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import {
    getAppToken
} from '../../../redux/apiRequest';
export function LayoutD({children}){
    const dispatch = useDispatch();
    useEffect(() => {
        const app = {
            appId: 'cli_slkdjalasdkjasd',
            appSecret: 'dskLLdkasdjlasdKK',
        }
        getAppToken(app, dispatch);
    }, [])
    useEffect(() => {
        const app = {
            appId: 'cli_slkdjalasdkjasd',
            appSecret: 'dskLLdkasdjlasdKK',
        };

        async function fetchAccessToken() {
            try {
                const response = await axios.post('https://open.larksuite.com/open-apis/auth/v3/app_access_token/internal', app);
                console.log(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchAccessToken();
    }, []);
    return(
        <div>
            <Nav/>
            <NavHeader/>
            {children}
            <Footer/>
        </div>
    )
}
