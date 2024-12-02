/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const TopproductCard = ({ item }) => {
    console.log(item)

    return (
        <div>
            <div className="card lg:card-side border-2 rounded-sm border-black">
                <figure>
                    <Link to={`/${item.id}`}>
                        <img src={item.image} alt={item.title} />
                    </Link>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                    <div>
                        <button
                            type="button"

                            className="btn w-full bg-pink-900 text-white text-lg">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default TopproductCard;
