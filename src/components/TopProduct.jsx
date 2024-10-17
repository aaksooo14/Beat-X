import TopproductCard from "./TopproductCard"
import data from '../assets/data.json'


const TopProduct = () => {
    return (
        <>
            <div className="space-y-5">
                <div className="text-3xl flex items-center justify-center ">
                    Top Product
                </div>
                <div>
                    <ul className="menu menu-horizontal bg-base-200 rounded-box">
                        <li><a>All</a></li>
                        <li><a>Chair</a></li>
                        <li><a>Sofa</a></li>
                        <li><a>Dining</a></li>
                        <li><a>Interior</a></li>
                    </ul>
                </div>
                <div>
                    {
                        data.map((item) => (
                            <div key={item.id} className="p-2">
                                <TopproductCard item={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default TopProduct
