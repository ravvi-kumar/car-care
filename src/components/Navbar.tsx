import Logo from "@/accets/images/Picsart_22-06-05_11-59-14-196.png";
import useMediaQuery from "@/utils/useMediaQuery";
import { useState } from "react";
import {
  HiBars3CenterLeft,
  HiHome,
  HiInformationCircle,
  HiUserGroup,
  HiXMark,
} from "react-icons/hi2";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <header className="bg-colorTwo py-3 shadow-md shadow-yellow-400">
        <nav className="m_contain flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" width={"60px"} />
              <h1 className="text-2xl font-medium text-yellow-400">Car Care</h1>
            </div>
          </Link>
          {isAboveMediumScreens ? (
            <ul className="flex text-colorThree">
              <li className="cursor-pointer p-3">
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer p-3">
                <Link to="/about">About</Link>
              </li>
              <li className="cursor-pointer p-3">
                <Link to="/service">Service</Link>
              </li>
              <li className="cursor-pointer p-3">
                <Link to="/team">Team</Link>
              </li>
              <li className="cursor-pointer p-3">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          ) : (
            <button
              className="bg-secondary-500 rounded-xl bg-yellow-400 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              {isMenuToggled ? (
                <HiXMark className=" h-6 w-6 text-black" />
              ) : (
                <HiBars3CenterLeft className=" h-6 w-6 text-black" />
              )}
            </button>
          )}
        </nav>
      </header>

      {!isAboveMediumScreens && isMenuToggled && (
        <nav className="bg-slate-800">
          <ul className="flex flex-col text-white">
            <li className=" flex cursor-pointer items-center gap-3 p-3">
              <HiHome />
              Home
            </li>
            <li className="flex cursor-pointer items-center gap-3 p-3">
              <HiInformationCircle />
              About
            </li>
            <li className="flex cursor-pointer items-center gap-3 p-3">
              <MdOutlineMiscellaneousServices />
              Service
            </li>
            <li className="flex cursor-pointer items-center gap-3 p-3">
              <HiUserGroup />
              Team
            </li>
            <li className="flex cursor-pointer items-center gap-3 p-3">
              <RiContactsBook2Fill />
              Contact
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;
