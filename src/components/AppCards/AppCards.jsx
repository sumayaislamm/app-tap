import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';
import { FaDownload } from 'react-icons/fa';

const AppCard = ({ app }) => {
    return (
        <Link to={`/app/${app.id}`}>
            <div
                key={app.id}
                className='bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300'
            >
                <img
                    src={app.image}
                    alt={app.title}
                    className='w-full h-40 object-cover'
                />
                <div className='p-4'>
                    <h2 className='font-semibold text-lg text-gray-800'><span>{app.title}-{app.companyName}</span></h2>
                    <div className='flex justify-between gap-5'>
                        <p className='text-gray-500 text-sm flex items-center gap-1'><FaDownload className="text-blue-500" /> {app.downloads}</p>
                        <p className='text-yellow-500 font-medium flex items-center gap-1'><AiFillStar className="text-yellow-400" />  {app.ratingAvg} </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;