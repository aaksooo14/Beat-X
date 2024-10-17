
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../slices/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);
    console.log(cartItems)

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="max-w-4xl mx-auto p-5 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="space-y-4">
                        {cartItems.map(item => (
                            <li key={item.id} className="flex items-center justify-between p-3 border-b">
                                <div className="flex items-center">
                                    <img src={item.img} alt={item.name} className="w-16 h-auto mr-3" />
                                    <div>
                                        <h2 className="font-semibold">{item.name}</h2>
                                        <p className="text-gray-600">Price: ${item.price}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition">
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 font-bold">
                        Total Price: ${totalPrice.toFixed(2)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
