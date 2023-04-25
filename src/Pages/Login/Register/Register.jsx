import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
          <div className=" bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                 Register account
                    </h2>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-gradient-to-br from-purple-600 to-violet-400 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6 text-white" action="#" method="POST">
                        <div>
                                <label htmlFor="name" className=" block text-sm font-medium ">
                                   Your Name
                                </label>
                                <div className="mt-1">
                                    <input id="name" name="name" type="text" autocomplete="name" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                                </div>
                            </div>
                        <div>
                                <label htmlFor="photo_url" className=" block text-sm font-medium ">
                                photo_url
                                </label>
                                <div className="mt-1">
                                    <input id="photo_url" name="photo_url" type="text" autocomplete="photo_url" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className=" block text-sm font-medium ">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input id="email" name="email" type="email" autocomplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium ">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input id="password" name="password" type="password" autocomplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium ">
                                  confirm  Password
                                </label>
                                <div className="mt-1">
                                    <input id="confirm" name="confirm" type="password" autocomplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                    Register
                                </button>
                                <p className='mt-2'>Already have an account ? <Link className='underline' to='/login'>login here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;