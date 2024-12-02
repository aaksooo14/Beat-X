import TopproductCard from "./TopproductCard"
import data from '../assets/newData.json'
import { useState } from "react"

const TopProduct = () => {
    const [earpods, setEarpods] = useState(true)
    const [watches, setWatches] = useState(true)

    const handleEarpods = () => {

        setWatches(false)
        setEarpods(true)
    }

    const handleWatches = () => {

        setEarpods(false)
        setWatches(true)
    }

    const handleAll = () => {
        setEarpods(true)
        setWatches(true)
    }

    const earpodsData = data.filter((item) => item.category === "airdopes")
    const watchesData = data.filter((item) => item.category === "smart-watches")


    return (
        <>
            <div className="space-y-5">
                <div className="text-3xl flex items-center justify-center ">
                    Top Product
                </div>
                <div className="flex items-center justify-center">
                    <ul className="menu menu-horizontal">
                        <li onClick={handleAll}><a>All</a></li>
                        <li onClick={handleEarpods} ><a>Earpods</a></li>
                        <li onClick={handleWatches}><a>Smart-Watches</a></li>
                    </ul>
                </div>
                <div>
                    {
                        earpods && earpodsData.map((item) => (
                            <div key={item.id} className="p-2">
                                <TopproductCard item={item} />
                            </div>
                        ))
                    }
                    {
                        watches && watchesData.map((item) => (
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
