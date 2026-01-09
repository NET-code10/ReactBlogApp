import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MenuIcon,
  ShoppingBag,
  X,
  LayoutDashboard,
  ArrowRight,
  CircleUser
} from "lucide-react";
import { RiBloggerLine } from "react-icons/ri";

import Button from "./button";

const Navbar = () => {
  let [isOpen, setOpen] = useState(false);

  let navigateTo = useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 border z-50  border-b-gray-300 bg-gray-100 h-10 md:h-20 ">
      <nav className="flex flex-col md:flex-row justify-between md:items-center   md:w-[90%] mx-auto ">
        <div className="flex justify-between px-2 md:px-0  md:py-0 items-center  md:pt-0">
          <Link onClick={() => setOpen(false)} to={"/"}>
            {" "}
            <RiBloggerLine size={40} />
          </Link>

          <div className="flex gap-3">
            {isOpen ? (
              <X className="md:hidden" onClick={() => setOpen(false)} />
            ) : (
              <MenuIcon className="md:hidden" onClick={() => setOpen(true)} />
            )}
          </div>
        </div>
        <div className={`md:block   ${isOpen ? "block" : "hidden"}`}>
          <ul
            onClick={() => setOpen(false)}
            className="  bg-white md:bg-inherit h-1/2 pb-10 md:pb-0  md:h-auto flex flex-col gap-1 md:flex-row md:gap-3 md:items-center md:my-auto justify-start px-2 md:px-0 pt-2 md:pt-0 "
          >
            <li>
              <Link to={"articles"}> Articles</Link>
            </li>
            <li>
              <Link to={"support"}> Support</Link>
            </li>
            <li>
              <Link to={"about"}> About</Link>
            </li>

            <li className=""></li>
            <CircleUser onClick={() => navigateTo("/profile")} />

            <Link to={"/auth/sign-up"}>
              <Button
                content="Create Account"
                className="  w-full md:w-auto   group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
