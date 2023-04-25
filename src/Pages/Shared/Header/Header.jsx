import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";


const Header = () => { 
    return (
        <div >
            <div className='flex justify-center'>
                <img src={logo} alt="" />
            </div>
            <p>Lorem ipsum dolor sit ae, nihil!</p>
            <p className='mt-3 mb-3 bg-lime-100 p-2'>{moment().format('dddd, MMMM DD, YYYY')}</p>
            <div className='flex'>
                <button className='btn btn-secondary
        '>button</button>
                <Marquee className='mx-5'>
                    I can be a React component, multiple React components, or just some text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, quas.
                </Marquee>
            </div>
        </div>
    );
};

export default Header;
