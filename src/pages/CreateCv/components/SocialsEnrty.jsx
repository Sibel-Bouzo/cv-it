/* eslint-disable react/prop-types */
import { useGlobalContext } from "@/contexts/Context";
import { Input } from "../../../components/ui/input";
import {
  MdDeleteOutline,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

// eslint-disable-next-line react/prop-types
export const SocialsEnrty = ({ index, onDelete, social, onUpdate }) => {
  const { expandedIndices, toggleEntry } = useGlobalContext();
  const isShowMore = expandedIndices.socials === index;
  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate(index, name, value);
  };

  return (
    <div className="border-b-2 border-blue-500 bg-blue p-2 text-sm mt-4 mb-6">
      <div
        onClick={() => toggleEntry("socials", index)}
        className="flex flex-row justify-between items-center"
      >
        <div>
          <h3 className="font-semibold capitalize">
            {social.label ? social.label : "Social Label"}
          </h3>
          <h5 className="text-gray-400">{social.link ? social.link : ""}</h5>
        </div>
        <div className="flex flex-row align-middle">
          <button onClick={() => onDelete(index)} className="mr-2">
            <MdDeleteOutline className="text-xl text-gray-400 duration-300 hover:text-red-600" />
          </button>
          {isShowMore ? (
            <button>
              <MdKeyboardArrowUp className="text-2xl text-primary font-bold" />
            </button>
          ) : (
            <button>
              <MdKeyboardArrowDown className="text-2xl text-primary font-bold" />
            </button>
          )}
        </div>
      </div>
      {isShowMore && (
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4 mt-4">
          <Input
            placeholder="Label"
            id={`label_${index}`}
            type="text"
            value={social.label}
            name="label"
            onChange={handleChange}
          />
          <Input
            placeholder="Link"
            id={`link_${index}`}
            type="text"
            value={social.link}
            name="link"
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};
