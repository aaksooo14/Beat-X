import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice'; // Adjust the import path
import data from '../assets/newData.json';
import { useState } from "react";
console.log(data)
const DetailCard = () => {

    const [color, setColor] = useState(true)
    const [text, setText] = useState(true)

    const { id } = useParams();
    const dispatch = useDispatch();
    const productId = parseInt(id, 10);
    console.log(productId)
    const product = data.find(item => item.id === productId);
    console.log(product)

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart(product));
        }
        setColor(false)
        setText(false)
    };

    return (
        <>
            {
                product ? (
                    <div key={product.id} className="max-w-4xl mx-auto pl-2 pr-2 bg-white shadow-md rounded-lg">
                        <div>
                            <img
                                className="w-full h-auto border-b-2 p-2"
                                src={product.image}
                                alt={`Product ${productId}`} />
                        </div>
                        {/* Small Images */}
                        <div className="flex items-center justify-center space-x-5">
                            {product.images?.slice(0, 3).map((img, index) => (
                                <div key={index} className="border-2 rounded-sm overflow-hidden">
                                    <img
                                        className="w-20 h-auto"
                                        src={img}
                                        alt={`Product ${productId} small ${index}`} />
                                </div>
                            ))}
                        </div>
                        {/* Description */}
                        <div className="border-b-2 p-2 mt-0 space-y-1">
                            <h2 className="text-xl font-bold">{product.title}</h2>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="text-yellow-500">{product.rating} Ratings</p>
                        </div>
                        {/* Prices */}
                        <div className="space-y-1 border-b-2 p-2 ">
                            <p className="text-2xl font-semibold">Price: ${product.price}</p>
                            <p className="text-red-500">You save: ${product.priceYouSave}</p>
                            <p className="text-gray-500">Exclusive of all prices</p>
                        </div>
                        {/* Offers and Discounts */}
                        <div className="space-y-2 p-2 border-b-2">
                            <p className="font-semibold">Offers and Discounts</p>
                            <div className="space-x-2 flex">
                                <div className="border-2 p-1 rounded-lg">No cost EMI on credit card</div>
                                <div className="border-2 p-1 rounded-lg">Pay later and avail cashback</div>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className={`text-white px-4 py-2 rounded  transition ${color ? 'bg-pink-900' : 'bg-green-500'}`}>
                                {text ? 'Add to Cart' : 'Added to Cart'}
                            </button>
                        </div>
                        {/* Menu */}
                        <div className="flex-row items-center justify-center p-2">
                            <ul className="menu menu-horizontal space-x-2 lg:menu-horizontal flex items-center justify-center">
                                <li><a className="hover:text-blue-600">Specifications</a></li>
                                <li><a className="hover:text-blue-600">Overview</a></li>
                                <li><a className="hover:text-blue-600">Review</a></li>
                            </ul>
                            <div className="pt-2">
                                <div>{product.specification}</div>
                                <div>{product.overview}</div>
                                <div>{product.review}</div>
                            </div>
                        </div>
                    </div >
                ) : (
                    <div>Product not found</div>
                )
            }
        </>
    );
};

export default DetailCard;
