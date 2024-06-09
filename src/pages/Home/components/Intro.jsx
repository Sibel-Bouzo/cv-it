import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

export const Intro = () => {
  return (
    <div className="w-full relative h-[72vh] text-justify">
      <div className="w-[70%] m-auto text-center mt-36 flex flex-col items-center align-middle justify-around">
        <h1 className="text-3xl sm:text-4xl font-bold capitalize">
          Create an ATS-Friendly CV in Just 12 Minutes
        </h1>
        <p className="mt-3 text-gray-500 leading-6 text-sm sm:text-lg max-w-3xl">
          Build a professional CV that passes Applicant Tracking Systems and
          lands you your dream job, all in under 12 minutes.
        </p>
        <Link to="/cv-it/create-cv">
          <button className="btn mt-10 capitalize">Create CV</button>
        </Link>
        <a href="#steps">
          <MdOutlineKeyboardDoubleArrowDown className="go-down duration-300 text-5xl hover:text-sky-400 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};
