import { GoPlus } from "react-icons/go";

// eslint-disable-next-line react/prop-types
export const AddButton = ({ onClick, phrase }) => {
  return (
    <button
      className="flex align-middle mt-4 text-primary cursor-pointer rounded w-full duration-300 py-1 sm:px-2 hover:bg-[#1a90f013]"
      onClick={onClick}
    >
      <GoPlus className="text-2xl mr-1 font-bold" /> {phrase}
    </button>
  );
};
