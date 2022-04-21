import React from "react";

export default function Productrow() {
  const products = [
    { img: "product-1.jpg", name: "Mobile Phone" },
    { img: "product-2.jpg", name: "Laptop" },
    { img: "product-3.jpg" , name:"Digital Watch"},
    { img: "product-2.jpg" , name:"Mobile Phone"},
  ];
  return (
    <div className="bg-white flex p-4 my-8">
      {products?.map((value) => {
        return (
          <div className="flex m-8 flex-col">
            <img src={value.img} alt="" />
            <p className="m-3 font-bold">{value.name}</p>
          </div>
        );
      })}
    </div>
  );
}
