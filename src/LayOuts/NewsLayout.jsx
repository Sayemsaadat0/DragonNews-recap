import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';

import RightNav from '../Pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div className='text-center md:container md:mx-auto'>
        main
        <Header></Header>
        <div className='grid grid-cols-12'>
            <div className='col-span-9 bg-teal-100'><Outlet></Outlet></div>

            <div className='mx-5 col-span-3 '><RightNav></RightNav></div>

        </div>
        <Footer></Footer>
    </div>
    );
};

export default NewsLayout;