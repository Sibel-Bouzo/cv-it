import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { navEl } from "@/data/data";

export const Footer = () => {
  return (
    <footer className="bg-[#191919] pt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 w-[80%] m-auto mb-10">
        <img src="images/logo.png" className="w-28" />
        <div>
          <h3 className="mb-4 font-semibold text-gray-600 text-2xl">Explore</h3>
          <ul>
            {navEl.map((item, index) => (
              <li
                key={index}
                className="pb-4 duration-300 text-[#f5f5f5] !list-none cursor-pointer hover:text-primary"
              >
                <a href={item.href}>{item.element}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-gray-600 text-2xl">Contact</h3>
          <ul className="flex !list-none">
            <li className="mr-4">
              <a
                href="https://www.linkedin.com/in/sibel-bouzo/"
                target="_blank"
                className="bg-[#313131] text-2xl w-11 h-11 rounded-[50%] text-[#f5f5f5] inline-flex justify-center items-center duration-300 hover:bg-[#0077B5]"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="mr-4">
              <a
                href="https://github.com/Sibel-Bouzo"
                target="_blank"
                className="bg-[#313131] w-11 h-11 rounded-[50%] text-2xl text-[#f5f5f5] inline-flex justify-center items-center duration-300 hover:bg-white hover:text-[#313131]"
              >
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="capitalize py-1 text-center border-t border-t-gray-400 text-[#f5f5f5]">
        &copy; Copyright 2024 sibel. All rights reserved
      </div>
    </footer>
  );
};
