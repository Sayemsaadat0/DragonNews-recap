import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/Fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
const NavigationBar = () => {
    const { user ,logout} = useContext(AuthContext)
    const handlelogout = ()=>{
        logout()
        .then()
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
             <nav className=" mt-5 py-4 font-light">
                    <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center bg-slate-100">
                        <img src="" alt="img" />
                        <div className='mx-auto tex-left'>

                            <Link className=" mb-4 lg:mb-0 hover:scale-110 duration-700 hover:bg-teal-100" to='/'>Home</Link>

                            <Link className=" mb-4 mx-4 lg:mb-0 hover:scale-110 duration-700  hover:bg-teal-100" to='/'>about</Link>

                            <Link className=" mb-4 lg:mb-0 hover:scale-110 duration-700 hover:bg-teal-100" to='/'>career</Link>
                        </div>

                        <p className='flex items-center'>
                            {
                               user ? <>
                               <FaUserAlt className='mx-2'></FaUserAlt>
                               {user.dname} <button onClick={handlelogout} className='btn mx-2'>
                                logout
                               </button>
                               </> : <Link className='btn btn-secondary' to='/login'>
                               log in 
                               </Link>
                            }
                        </p>
                    </div>

                </nav>
        </div>
    );
};

export default NavigationBar;