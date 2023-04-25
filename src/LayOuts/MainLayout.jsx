import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Shared/Navigationbar/NavigationBar';

const MainLayout = () => {
    return (
        <div className='text-center md:container md:mx-auto'>
            main
            <Header></Header>
            <NavigationBar></NavigationBar>
            <div className='grid grid-cols-12'>
                <div className='col-span-3 '>
                    <LeftNav></LeftNav>
                </div>

                <div className='col-span-6 '><Outlet></Outlet></div>

                <div className='col-span-3  mx-2'><RightNav></RightNav></div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;