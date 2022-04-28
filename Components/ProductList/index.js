import BrandComp from "./BrandComp";
import InternalMemoryComp from "./InternalMemoryComp";
import NumberOfCores from "./NumberOfCores";
import PriceComp from "./PriceComp";
import ProcessorSpeedComp from "./ProcessorSpeedComp";
import Product from "./Product";
import Ram from "./RamComp";
import ScreenSizeComp from "./ScreenSizeComp";

export default function ProductList() {
  const products = [1, 2, 3, 4, 5];
  return (
    <div
      style={{
        display: "flex",
        margin: 30,
      }}
    >
      <div>
        <BrandComp />
        <PriceComp />
        <InternalMemoryComp />
        <Ram />
        <NumberOfCores />
        <ScreenSizeComp />
        <ProcessorSpeedComp />
      </div>
      <div
        className="container"
        style={{ borderLeftWidth: 10, paddingLeft: 20 }}
      >
        {products?.map((product) => {
          return <Product />;
        })}
      </div>
    </div>
  );
}
