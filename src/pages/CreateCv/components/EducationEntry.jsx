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

export const EducationEntry = ({ index, education, onDelete, onUpdate }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate(index, name, value);
  };

  const handleQuillChange = (value) => {
    const updatedVal = value == "<p><br></p>" ? undefined : value;
    onUpdate(index, "description", updatedVal);
  };

  return (
    <div className="border-b-2 border-primary bg-blue p-2 text-sm mt-4 mb-6">
      <div
        onClick={() => setIsShowMore(!isShowMore)}
        className="flex flex-row justify-between items-center"
      >
        <div>
          <h3 className="font-semibold capitalize">
            {education.degree ? education.degree : "Education Title"}
            {education.school ? ` at ${education.school}` : ""}
          </h3>
          <h5 className="text-gray-400 capitalize">
            {education.date ? education.date : ""}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2 mt-4">
          <Input
            id={`school_${index}`}
            type="text"
            placeholder="School"
            value={education.school}
            name="school"
            onChange={handleChange}
          />
          <Input
            id={`Degree_${index}`}
            type="text"
            placeholder="Degree"
            value={education.degree}
            name="degree"
            onChange={handleChange}
          />
          <Input
            placeholder="Start & End Date"
            id={`period_${index}`}
            type="text"
            value={education.date}
            name="date"
            onChange={handleChange}
          />
          <Input
            placeholder="City"
            id={`education_city_${index}`}
            type="text"
            value={education.city}
            name="city"
            onChange={handleChange}
          />
          <div className="sm:col-span-2">
            <Label className="text-gray-400 text-sm font-normal">
              Description
            </Label>
            <div className="ql-toolbar mt-2 ">
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
              value={education.description}
              onChange={handleQuillChange}
              style={{ maxHeight: "9.8rem", overflowY: "scroll" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
