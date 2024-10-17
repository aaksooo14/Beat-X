import Product1 from "../components/Product1"
import FeatureProducts from "../components/FeatureProducts"
import TopProduct from "../components/TopProduct"
import OurAdvantage from "../components/OurAdvantage"

const Home = () => {
    return (
        <div className="pl-2 pr-2 bg-gray-100 mt-0">
            <Product1 />
            <FeatureProducts />
            <TopProduct />
            <OurAdvantage />
        </div>
    )
}

export default Home
