/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

const TopproductCard = ({ item }) => {


    return (
        <div>
            <div className="card lg:card-side border-2 rounded-sm border-black">
                <figure>
                    <Link to={`/${item.id}`}>
                        <img src={item.img} alt={item.name} />
                    </Link>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
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

TopproductCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default TopproductCard;
