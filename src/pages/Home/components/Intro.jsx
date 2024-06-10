import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

export const Intro = () => {
  return (
    <div className="w-full relative h-[72vh] text-justify">
      <div className="w-[70%] m-auto text-center mt-16 sm:mt-36 flex flex-col items-center align-middle justify-around">
        <h1 className="text-3xl sm:text-4xl font-bold capitalize">
          Create an ATS-Friendly CV in Just 12 Minutes
        </h1>
        <p className="mt-3 text-gray-500 leading-6 text-sm sm:text-lg max-w-3xl">
          Build a professional CV that passes Applicant Tracking Systems and
          lands you your dream job, all in under 12 minutes.
        </p>
        <Link to="/cv-it/create-cv">
          <button className="btn mt-10 relative border-2 border-black w-fit py-3 px-6 text-xl sm:py-5 sm:px-10 sm:text-3xl font-bold uppercase ">
            Create CV
          </button>
        </Link>
        <a
          href="#steps"
          className="z-20 absolute bottom-3 left-1/2 -translate-x-1/2"
        >
          <MdOutlineKeyboardDoubleArrowDown className="go-down duration-300 text-5xl hover:text-sky-400 cursor-pointer" />
        </a>
        <div className="custom-shape-divider-bottom-1717967457">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
