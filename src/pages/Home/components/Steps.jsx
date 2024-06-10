import { FcSearch, FcTodoList, FcIdea, FcShare } from "react-icons/fc";

export const Steps = () => {
  return (
    <div className="py-14 sm:py-20 bg-white w-full" id="steps">
      <div className="w-[80%] m-auto">
        <h2 className="text-center text-4xl mb-16 sm:mb-24 uppercase relative font-semibold  main-title">
          steps
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-10 w-full">
          <div className="flex flex-col items-center gap-2 p-7 text-center bg-[#ebebeb49] step">
            <FcSearch className="mb-2 text-6xl border-b-2 border-gray-200 w-full pb-4" />
            <p className="text-lg">
              Enter your details, and CV Builder will create a standout CV ready
              to send to employers
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 p-7 text-center bg-[#ebebeb49] step">
            <FcTodoList className="mb-2 text-6xl border-b-2 border-gray-200 w-full pb-4" />
            <p className="text-lg">
              Fill in your job history, skills, and educational background in
              the form provided
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 p-7 text-center bg-[#ebebeb49] step">
            <FcIdea className="mb-2 text-6xl border-b-2 border-gray-200 w-full pb-4" />
            <p className="text-lg">
              Follow the on-screen tips for guidance and inspiration throughout
              the process
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 p-7 text-center bg-[#ebebeb49] step">
            <FcShare className="mb-2 text-6xl border-b-2 border-gray-200 w-full pb-4" />
            <p className="text-lg">
              Save, download, and distribute your professional and perfectly
              refined CV smoothly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
