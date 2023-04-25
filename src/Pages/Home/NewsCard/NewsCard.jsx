import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { BsStar,BsStarFill,BsStarHalf} from 'react-icons/Bs';

const NewsCard = ({news}) => {
    const {_id,title,author,image_url,details,total_view,rating} = news

    return (
        <div>
            <Link to={`/news/${_id}`}></Link>
           <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-5 text-left">
  <header className="p-4 bg-cyan-200">
    <h2 className="text-lg font-semibold text-gray-800">Card Header</h2>
  </header>
  <img className="w-full" src={image_url} alt="Card Image" />
  <div className="p-4">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-700">{details.length < 250 ? <>details</> : <>{details.slice(0, 250)}...<Link className='btn-link to' to={`/news/${_id}`}>Read More</Link></> }</p>
  </div>
  <footer className="p-4 bg-purple-200">
  <span>{rating?.number}</span>
  </footer>
</div>
        </div>
    );
};

export default NewsCard;