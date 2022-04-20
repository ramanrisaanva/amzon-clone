import {GiHamburgerMenu} from 'react-icons/gi'
export default function index() {
  return (
    <div className="flex bg-blue  w-full justify-between text-center" style={{color:"white"}}  >
    <ul className="flex py-4 items-center text-base">
    <GiHamburgerMenu className="ml-5"/><li className="ml-2"> All</li>
        <li className="ml-4">Best Sellers</li>
        <li className="ml-4">Mobiles</li>
        <li className="ml-4">Customer Service</li>
        <li className="ml-4">Today's Deals</li>
        <li className="ml-4">Fashion</li>
        <li className="ml-4">Electronics</li>
        <li className="ml-4">Prime</li>
        <li className="ml-4">New Releases</li>
    </ul>
    <ul className="flex p-4 ">
        <li><img src="/header.jpg" alt="" /></li>
    </ul>
    </div>
  )
}
