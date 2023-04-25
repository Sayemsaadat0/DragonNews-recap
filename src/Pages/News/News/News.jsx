import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
const News = () => {
    const news = useLoaderData()
    const {_id,title,author,image_url,details,total_view,rating,category_id} = news
    return (
        <div className="card w-full bg-base-100 shadow-xl">
    <img src={image_url} alt="Shoes" />
        <div className="py-5">
          <h2 className="card-title text-left">{title}</h2>
          <p className='text-left mt-2'>{details}</p>
          <div className="card-actions justify-start">
            <Link  className="btn btn-error mt-5 border-none hover:bg-warning hover:border-none" 
            to={`/category/${category_id}`}>ALL in this categoru</Link>
          </div>
        </div>
      </div>
    );
};

export default News;
/* */