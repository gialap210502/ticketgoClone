import Footer from '../components/Footer/Footer';
import NavHeader from '../components/headNav/headerNav';
import Nav from '../components/Nav/Nav';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import {
    getCodeAuth, getList
} from '../../../redux/apiRequest';
export function LayoutD({ children }) {
    const dispatch = useDispatch();
    useEffect(async () => {
        // getCodeAuth(dispatch);
        // getList(dispatch);
        try {
            const res = await axios.post('/auth');
        } catch (error) {
            console.log(error);
        }

    }, []);
    return (
        <div>
            <Nav />
            <NavHeader />
            {children}
            <Footer />
        </div>
    )
}
