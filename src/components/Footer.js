import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-[#000300] text-gray-300 py-2 px-2">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4">
        <div>
          <h6 className="font-bold uppercare pt-2">Heading 1</h6>
          <ul>
            <li className="py-1">link1</li>
            <li className="py-1">link2</li>
            <li className="py-1">link3</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercare pt-2">Heading 2</h6>
          <ul>
            <li className="py-1">link4</li>
            <li className="py-1">link5</li>
            <li className="py-1">link6</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercare pt-2">Heading 3</h6>
          <ul>
            <li className="py-1">link7</li>
            <li className="py-1">link8</li>
            <li className="py-1">link9</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercare pt-2">Heading 4</h6>
          <ul>
            <li className="py-1">link10</li>
            <li className="py-1">link11</li>
            <li className="py-1">link12</li>
          </ul>
        </div>

        <div className="col-span-2 py-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletters</p>
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4 rounded-md text-gray-500 font-semibold bg-[#d9ff66]">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">
          2023&copy; Sokani Foundation. All rights reserved
        </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl ">
          <FaFacebook
            onClick={{}}
            className="hover:bg-[#d9ff66] cursor-pointer rounded-md"
          />
          <FaInstagram
            onClick={{}}
            className="hover:bg-[#d9ff66] cursor-pointer rounded-md"
          />
          <FaTwitter
            onClick={{}}
            className="hover:bg-[#d9ff66] cursor-pointer rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
