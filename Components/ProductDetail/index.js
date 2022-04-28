import ProductCarousel from "./ProductCarousel";
import {useState} from 'react'

function ProductPage() {
  const sizeArr = ["XS", "S", "M", "L", "XL"];
  const colorArr = ["pink", "black", "white"];
  const [count, setCount] = useState(1);

  const handledecrement=()=>{
    if(count>0)
    setCount(count-1)
    else alert("can't decrease")
  }
  const handleIncrement=()=>{
    setCount(count+1)
  }


  return (
    <>
      <div className="flex m-8">
        <div className="flex" style={{width:"50%"}}>
          <ProductCarousel />
        </div>
        <div className="flex flex-col pl-8 ml-8">
          <div className="flex my-3">
            <h1 className="text-xl font-bold">Jaipuri Dress </h1>
          </div>
          <div className="flex">Rs 1200</div>
          <div className="flex flex-col my-2">
            <h1 className="text-xl font-bold">Size</h1>
            <ul className="flex">
              {sizeArr?.map((i) => {
                return <li className="p-2 px-3 hover:bg-red-300">{i}</li>;
              })}
            </ul>
          </div>
          <div className="my-3">
            <h1 className="text-xl font-bold">Color</h1>
            {colorArr?.map((i) => {
              return (
                <button
                  className={`p-2  m-2 border-2 hover:bg-${i}-500  hover:drop-shadow-xl ${
                    i === "white" ? "hover:text-black  hover:drop-shadow-l " : "hover:text-white"
                  } ${i==='black' ?"hover:bg-black" :null}`}
                >
                  {i}
                </button>
              );
            })}
          </div>
          <div className="my-3">
            <h1 className="text-xl font-bold">Quantity</h1>
            <div className="flex items-center">
              <button className="text-3xl font-semibold mr-2" onClick={handledecrement}>-</button> {count}
              <button className="text-3xl font-semibold ml-2" onClick={handleIncrement}>+</button>
            </div>
          </div>
          <div className="my-3">
            <button className="p-2 border-brown border-2 bg-brown text-white ">
              Add to Cart +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
