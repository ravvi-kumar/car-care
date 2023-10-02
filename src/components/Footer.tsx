import { AiFillInstagram } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

function Footer() {
  const iconStyle =
    "rounded-[50%] bg-yellow-400 hover:bg-slate-600 p-3 text-5xl text-colorThree duration-300";
  return (
    <footer className="bg-colorTwo text-colorThree">
      <div className="m_contain grid grid-cols-1 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="py-4">
          <h3 className="text-3xl text-yellow-400">Car Care</h3>
        </div>
        <div>
          <div className="py-4">
            <div className="px-4">
              <i className="fa-solid fa-phone footer-icon"></i>
            </div>
            <div className="flex items-center py-4">
              <FaPhoneAlt className={`${iconStyle}`} />
              <div className="px-4">
                <h3>Phone:</h3>
                <p className="text-gray-500">12 (845) 3342 78 92</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center py-4">
          <HiLocationMarker className={`${iconStyle}`} />
          <div className="px-4">
            <h3>Location:</h3>
            <p className="text-gray-500">Chajju Majra Kharar, Punjab</p>
          </div>
        </div>
        <div className="flex items-center py-4">
          <FaClock className={`${iconStyle}`} />
          <div className="px-4">
            <h3>Open:</h3>
            <p className="text-gray-500">Mon.-Sat. 9:00AM - 10:00PM</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="m_contain grid grid-cols-1 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="py-3 text-2xl">About Us</h3>
          <p className="text-gray-500">
            A Cars Online we consider ourselves a part of the big automobile
            community. We service all makes and models and take pride in every
            repair.
          </p>
          <div className="flex gap-2 py-4 text-3xl">
            <a href="https://www.instagram.com/carcare581/" target="_blank">
              <AiFillInstagram
                className={`${iconStyle} bg-white text-black hover:bg-slate-600 hover:text-white`}
              />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <BsFacebook
                className={`${iconStyle} bg-white text-black hover:bg-slate-600 hover:text-white`}
              />
            </a>
            <a href="https://twitter.com/i/flow/login" target="_blank">
              <BsTwitter
                className={`${iconStyle} bg-white text-black hover:bg-slate-600 hover:text-white`}
              />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <BsLinkedin
                className={`${iconStyle} bg-white text-black hover:bg-slate-600 hover:text-white`}
              />
            </a>
          </div>
        </div>
        <div>
          <div className="">
            <div className="px-4">
              <i className="fa-solid fa-phone footer-icon"></i>
            </div>
            <div className="flex items-center">
              <div className="px-4">
                <h3 className="py-3 text-2xl">Quick Links</h3>
                <ul className="">
                  <li>
                    <a href="index.html" className="a text-gray-500">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="About.html" className="a text-gray-500">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="Service.html" className="a text-gray-500">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="Team.html" className="a text-gray-500">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="contact.html" className="a text-gray-500">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="px-4">
            <h3 className="py-3 text-2xl">Our Services</h3>
            <ul className="py-3">
              {[
                "Engine Repair",
                "Car Windshield",
                "Oil Filter",
                "Engine Coolant",
                "Air Conditioner",
                "Tyre Replacement",
              ].map((text) => (
                <li
                  className="flex items-center gap-2 text-gray-500"
                  key={text}
                >
                  <BiCheck className="text-2xl font-semibold text-yellow-300" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <div className="px-4">
            <ul className="mt-5 py-3">
              {[
                "Suspension Service",
                "Diagnostics Service",
                "Dent/Repair Service",
                "Brake Rotors Service",
                "Wheel Alignment",
              ].map((text) => (
                <li
                  className="flex items-center gap-2 text-gray-500"
                  key={text}
                >
                  <BiCheck className="text-2xl font-semibold text-yellow-300" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <h3 className="py-3 text-center">
        Copyright © 2022 <span className=" text-yellow-400">Car Care</span>. All
        Rights Reserved. | Website design by
        <span className=" text-yellow-400"> Dalbir and Sukhpreet </span>
      </h3>
    </footer>
  );
}

export default Footer;
