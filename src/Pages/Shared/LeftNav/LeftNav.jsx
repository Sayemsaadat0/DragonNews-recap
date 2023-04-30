import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategores] = useState([])
    useEffect(() => {
        fetch('https://server-sayemsaadat0.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategores(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className='text-left'>
            <h3 className='text-2xl font-semibold'>All categories</h3>
            {
                categories.map(category => <p className='mt-3' key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }

        </div>
    );
};

export default LeftNav;