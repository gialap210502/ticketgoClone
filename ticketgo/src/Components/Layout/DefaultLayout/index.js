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

    const fetchData = async () => {
        // getCodeAuth(dispatch);
        // getList(dispatch);
        try {
            const res = await axios.get('http://localhost:5500/auth');
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Nav />
            <NavHeader />
            {children}
            <Footer />
        </div>
    );
}

