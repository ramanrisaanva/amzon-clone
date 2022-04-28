import React from "react";
import { useRouter } from 'next/router';


export default function Productrow() {
  const products = [
    { img: "product-1.jpg", name: "Mobile Phone" },
    { img: "product-2.jpg", name: "Laptop" },
    { img: "product-3.jpg" , name:"Digital Watch"},
    { img: "product-2.jpg" , name:"Mobile Phone"},
  ];
  const router = useRouter()

  return (
    <div className="bg-white flex p-4 my-8">
      {products?.map((value) => {
        return (
          <div className="flex m-8 flex-col cursor-pointer" onClick={()=>router.push("../../productdetailpage")}>
            <img src={value.img} alt="" />
            <p className="m-3 font-bold">{value.name}</p>
          </div>
        );
      })}
    </div>
  );
}
