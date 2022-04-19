import BrandComp from "../../Components/ProductList/BrandComp"
import CheckBox from "../../Components/ProductList/CheckBox"
import HeadingText from "../../Components/ProductList/Heading"
import InternalMemoryComp from "../../Components/ProductList/InternalMemoryComp"
import NumberOfCores from "../../Components/ProductList/NumberOfCores"
import PriceComp from "../../Components/ProductList/PriceComp"
import ProcessorSpeedComp from "../../Components/ProductList/ProcessorSpeedComp"
import Product from "../../Components/ProductList/Product"
import Ram from "../../Components/ProductList/RamComp"
import ScreenSizeComp from "../../Components/ProductList/ScreenSizeComp"


export default function ProductList(){
    return(
        <div style={{
            display: 'flex',
            margin: 20
        }} >
            <div>
                <BrandComp/>
                <PriceComp/>
                <InternalMemoryComp/>
                <Ram/>
                <NumberOfCores/>
                <ScreenSizeComp/>
                <ProcessorSpeedComp/>
            </div>
            <div >
                <Product/>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )

}