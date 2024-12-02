import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../assets/newData.json'
console.log(data)
const Product1 = () => {



    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 2000);

        return () => clearInterval(intervalRef.current); // Cleanup on unmount
    }, []);

    return (
        <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="carousel-item min-w-full flex-shrink-0 flex-col ">
                        <Link to={`/${item.id}`}>
                            <img

                                src={item.image}
                                className="w-[90vw]"
                                alt="Carousel item"
                            />
                        </Link>
                        <div className='pt-2 space-y-2'>
                            <p className="text-2xl font-semibold">{item.title}</p>
                            <p className="text-gray-600 text-xl">{item.price}</p>
                            <button className="bg-pink-900 p-2 text-white font-semibold w-[30vw] rounded">
                                Explore
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product1;
