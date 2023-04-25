import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/Fa';

const RightNav = () => {
    return (
        <div className='text-left'>
            <h3 className='text-3xl font-semibold text-left mb-4'>login with</h3>

            <div className=' mb-6'>
                <button className='btn btn-outline mb-2 border-blue-400 hover:bg-blue-500 hover:border-none'>
                    <FaGoogle className='mx-2'></FaGoogle>
                    login wiht google</button>
                <button className='btn btn-outline'>
                    <FaGithub className='mx-2'></FaGithub>
                    login wiht Github</button>
            </div>
            <div>
                <h3 className='text-3xl'>find us on </h3>
                <div className="btn-group btn-group-vertical ">
                    <button className="btn btn-outline border-none hover:text-blue-400 hover:bg-white">Facebook</button>
                    <button className="hover:text-blue-400 hover:bg-white btn btn-outline border-none">twitter</button>
                    <button className="btn btn-outline border-none hover:text-pink-400 hover:bg-white">Telegram</button>
                </div>
            </div>

        </div>
    );
};

export default RightNav;