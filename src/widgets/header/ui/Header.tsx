import { memo } from "react";
import logo from "@/shared/assets/Frame.svg";
import { Link } from "react-router-dom";
import { FaFacebook, FaRegHeart } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

export const Header = memo(() => {
  return (
    <div>
      <header>
        <div className="text-gray-400 flex container mx-auto gap-3 mt-2 border-b border-gray-200 py-2 justify-between">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="">
            <ul className="flex gap-5 ml-10">
              <li>
                <Link to={"/"}>ALL PRODUCTS</Link>
              </li>
              <li>
                <Link to={"/about"}>ABOUT SEEDRA</Link>
              </li>
              <li>
                <Link to={"/blog"}>OUR BLOG</Link>
              </li>
              <li>
                <Link to={"/contacts"}>CONTACTS</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
          <div className="flex gap-2 mx-2 items-center">
            <RiInstagramFill />
            <FaFacebook />
          </div>
          <div className="relative">
          <CiSearch className="absolute top-1 w-6" />
            <input className="border rounded-full pl-6" type="text" placeholder="Search" />
          </div>
          <div className="flex gap-2 mx-2 items-center">
          <FaRegHeart />
          <IoCartOutline />
          </div>

          </div>
        </div>
      </header>
    </div>
  );
});
