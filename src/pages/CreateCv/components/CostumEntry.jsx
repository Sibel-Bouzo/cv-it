/* eslint-disable react/prop-types */
import { useState } from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import ReactQuill from "react-quill";
import {
  MdDeleteOutline,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

// eslint-disable-next-line react/prop-types
export const CostumEntry = ({ index, onDelete, onUpdate, customItem }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const [title, setTitle] = useState("Untitled");
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate(index, name, value);
  };

  const handleQuillChange = (value) => {
    const updatedVal = value == "<p><br></p>" ? undefined : value;
    onUpdate(index, "description", updatedVal);
  };

  return (
    <div className="border-b-2 border-blue-500 bg-blue p-2 text-sm mt-4 mb-5">
      <div
        onClick={() => setIsShowMore(!isShowMore)}
        className="flex flex-row justify-between items-center"
      >
        {isEditing ? (
          <input
            type="text"
            value={customItem.sectionTitle}
            name="sectionTitle"
            onChange={(e) => {
              handleChange(e);
              handleInputChange(e);
            }}
            autoFocus
          />
        ) : (
          <h3 className="font-semibold" onClick={() => setIsEditing(true)}>
            {title}
          </h3>
        )}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2 mt-4">
          <Input
            placeholder={`Activity name, course title, etc.`}
            id={`section_type_${index}`}
            type="text"
            onChange={handleChange}
            value={customItem.activity}
            name="activity"
          />

          <Input
            placeholder="City"
            id={`job_city_${index}`}
            type="text"
            onChange={handleChange}
            value={customItem.city}
            name="city"
          />
          <Input
            placeholder="Start & End Date"
            id={`period_${index}`}
            type="text"
            onChange={handleChange}
            value={customItem.date}
            name="date"
          />
          <div className="sm:col-span-2">
            <Label className="text-gray-400 text-sm font-normal">
              Description
            </Label>
            <div className="ql-toolbar mt-2">
              <select className="ql-size" defaultValue="medium">
                <option value="large">Large</option>
                <option value="medium">Normal</option>
              </select>
              <button className="ql-bold" />
              <button className="ql-italic" />
              <button className="ql-underline" />
              <button className="ql-list" value="bullet" />
            </div>
            <ReactQuill
              modules={{
                toolbar: ".ql-toolbar",
              }}
              name="description"
              theme="snow"
              // eslint-disable-next-line react/prop-types
              value={customItem.description}
              onChange={handleQuillChange}
              style={{ maxHeight: "9.8rem", overflowY: "scroll" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
