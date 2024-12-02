import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import data from "../assets/newData.json";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = () => {
        setToggleSearch(!toggleSearch);
    };

    const onhandleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        if (query.length === 0) {
            setSearchTerm('');
            setSearchResult([]);
        } else {
            setSearchTerm(query);
            const result = data.filter((product) => {
                return product.title.toLowerCase().includes(query); // Added return statement
            });
            setSearchResult(result);
        }
    };

    const cartItems = useSelector((state) => state.cart);

    return (
        <div className="navbar bg-orange-100">
            <div className="flex-1">
                <Link to={"/"} className="text-xl font-bold">
                    Beat-X
                </Link>
            </div>
            <div className="flex space-x-5">
                {/* SEARCH SVG */}
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        onClick={handleSearch} // Fixed to toggle the search state
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    {toggleSearch && (
                        <div className="absolute p-2 left-0 w-full z-50 bg-red-300">
                            <input
                                onChange={onhandleSearch}
                                type="text"
                                placeholder="search-product here"
                                className="p-2 w-full rounded-lg"
                            />
                            <ul className="bg-white mt-2 rounded-lg shadow-lg p-2">
                                {searchResult.length > 0 ? (
                                    searchResult.map((item, index) => (
                                        <Link to={`/${item.id}`} key={index}>
                                            <li >
                                                {item.title}
                                            </li>
                                        </Link>
                                    ))
                                ) : (
                                    <li>No Results Found</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Cart SVG */}
                <Link to={"/cart"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    <div className="absolute top-3 right-12 bg-pink-900 text-sm text-white pl-[2px] pr-[2px] rounded-full">
                        {cartItems.length}
                    </div>
                </Link>

                {/* USER SVG */}
                <div>
                    <svg
                        onClick={() => setToggle(!toggle)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                    </svg>
                    {toggle && (
                        <div className="fixed right-0 top-0 w-[60vw] h-[100vh] bg-gray-100 z-10">
                            <div className="flex flex-col items-center justify-center pt-[30vh] space-y-5">
                                <div
                                    onClick={() => setToggle(!toggle)}
                                    className="absolute top-0 left-0 text-2xl p-2"
                                >
                                    <IoCloseCircleOutline />
                                </div>
                                <Link to={"/"}>
                                    <p className="text-2xl">Home</p>
                                </Link>
                                <Link to={"/cart"}>
                                    <p className="text-2xl">Cart</p>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
