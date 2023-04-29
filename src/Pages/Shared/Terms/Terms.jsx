import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='p-10 text-center'>
            <h1 className='text-2xl underline'>terms and condional page</h1>
            <p className='w-96 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi impedit provident officia! Cum dolore corrupti quae, earum quia error laborum minus mollitia iure eum porro voluptatibus laudantium? Aut, delectus. </p>
            <Link className='btn-link' to='/register'>go to register</Link>
        </div>
    );
};

export default Terms;