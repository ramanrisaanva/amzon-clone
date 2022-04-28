import React from "react";
import { useRouter } from "next/router";

export default function Category() {
  const categoryCards = [1, 2, 3, 4, 5, 6];
  const router = useRouter();
  return (
    <div className="flex flex-wrap justify-center w-full relative -top-52 -mb-52">
      {categoryCards?.map((card) => {
        return (
          <div
            className="flex bg-white  w-25 flex-col py-4 px-2 m-4 mx-5 cursor-pointer"
            onClick={() => router.push("../../productlist")}
          >
            <h1 className="m-3 font-medium text-3xl">Home Summer Needs</h1>
            <div className="flex ">
              <div className="flex m-2 flex-col">
                <img src="category.jpg" alt="1" />
                <p>Bads</p>
              </div>
              <div className="flex m-2 flex-col">
                <img src="bags.jpg" alt="2" />
                <p>Bags for women</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex m-2 flex-col">
                <img src="watch.jpg" alt="3" />
                <p>Watches</p>
              </div>
              <div className="flex m-2 flex-col">
                <img src="category-2.jpg" alt="4" />
                <p>Emergency Lights</p>
              </div>
            </div>
            <h2 className="m-3 text-blue font-medium"> see more</h2>
          </div>
        );
      })}
    </div>
  );
}
