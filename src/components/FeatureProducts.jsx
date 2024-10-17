import { Link } from "react-router-dom";

import data from '../assets/data.json'
const FeatureProducts = () => {
    return (
        <>
            <div className="p-5 ">
                <div className="text-3xl flex items-center justify-center pb-5 ">
                    Feature Product
                </div>

                <div className="carousel w-full">
                    {data.map((item) => (
                        <div key={item.id} id="item1" className="carousel-item w-full">
                            <Link to={`/${item.id}`}>
                                <img
                                    src={item.img}
                                    className="w-[100vw]" />
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
        </>
    )
}

export default FeatureProducts
