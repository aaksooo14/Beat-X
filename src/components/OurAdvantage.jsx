import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineSafetyCheck } from "react-icons/md";
import { FaIdeal } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";


const OurAdvantage = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-2xl font-bold mb-4">Our Advantage</h1>
                <div className="justify-around space-y-3">
                    <div className="flex items-center space-x-2">
                        <div>
                            <MdDeliveryDining className="text-xl" />
                        </div>
                        <p className="text-lg">Express delivery</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div>
                            <MdOutlineSafetyCheck className="text-xl" />
                        </div>
                        <p className="text-lg">Brand Warranty</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div>
                            <FaIdeal className="text-xl" />
                        </div>
                        <p className="text-lg">Exciting Deals</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div>
                            <MdOutlinePayment className="text-xl" />
                        </div>
                        <p className="text-lg">Secure Payments</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default OurAdvantage
