import React from 'react';
import Nabvar from '../Shared/Navbar/Nabvar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';


const Main = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;