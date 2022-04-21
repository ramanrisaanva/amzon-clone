import React from "react";

export default function Footer() {
  return (
    <div className="bg-black text-white flex justify-evenly">
      <div className="flex flex-col  my-8">
        <h1 className="font-bold">Get To Know Us</h1>
        <ul>
          <li>About Us</li>
          <li>Career</li>
          <li>Amazon cares</li>
          <li>Gift a Smile</li>
          <li>Press relase</li>
        </ul>
      </div>
      <div className="flex flex-col  my-8">
        <h1 className="font-bold">Contect Us</h1>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="flex flex-col  my-8">
        <h1 className="font-bold">Make MOny With Us</h1>
        <ul>
          <li>Sell on Amazon</li>
          <li>Become an Affiliate</li>
          <li>Amazon Global Selling</li>
          <li>Amazon Pay on Merchants</li>
        </ul>
      </div>
      <div className="flex flex-col  my-8">
        <h1 className="font-bold">Let Us Help You</h1>
        <ul>
          <li>COVID-19 and Amazon</li>
          <li>Amazon App Download</li>
          <li>Amazon Assistant Download</li>
          <li>Returns Centre</li>
        </ul>
      </div>
    </div>
  );
}
