/* eslint-disable react/prop-types */
import { useGlobalContext } from "@/contexts/Context";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
} from "../../../components/ui/select";
import {
  MdDeleteOutline,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

// eslint-disable-next-line react/prop-types
export const LanguagesEntry = ({ index, onDelete, onUpdate, language }) => {
  const { expandedIndices, toggleEntry } = useGlobalContext();
  const isShowMore = expandedIndices.languages === index;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate(index, name, value);
  };

  return (
    <div className="border-b-2 border-blue-500 bg-blue p-2 text-sm mt-4 mb-6">
      <div
        onClick={() => toggleEntry("languages", index)}
        className="flex flex-row justify-between items-center"
      >
        <div>
          <h3 className="font-semibold">
            {language.language ? language.language : "Language"}
          </h3>
          <h5 className="text-gray-400 capitalize">
            {language.level ? language.level : ""}
          </h5>
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
            placeholder="Language"
            id={`language_${index}`}
            type="text"
            value={language.language}
            name="language"
            onChange={handleChange}
          />

          <Select
            onValueChange={(val) => {
              onUpdate(index, "level", val);
            }}
            value={language.level}
            name="level"
          >
            <SelectTrigger>
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Level</SelectLabel>
                <SelectItem value="Native speaker">Native speaker</SelectItem>
                <SelectItem value="Highly proficient">
                  Highly proficient
                </SelectItem>
                <SelectItem value="Very good command">
                  Very good command
                </SelectItem>
                <SelectItem value="Good working knowledge">
                  Good working knowledge
                </SelectItem>
                <SelectItem value="Working knowledge">
                  Working knowledge
                </SelectItem>
                <SelectItem value="C2">C2</SelectItem>
                <SelectItem value="C1">C1</SelectItem>
                <SelectItem value="B2">B2</SelectItem>
                <SelectItem value="B1">B1</SelectItem>
                <SelectItem value="A2">A2</SelectItem>
                <SelectItem value="A1">A1</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};
