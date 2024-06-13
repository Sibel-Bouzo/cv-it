/* eslint-disable react/prop-types */
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import ReactQuill from "react-quill";
import {
  MdDeleteOutline,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { useGlobalContext } from "@/contexts/Context";

// eslint-disable-next-line react/prop-types
export const JobEntry = ({ index, job, onDelete, onUpdate }) => {
  const { expandedIndices, toggleEntry } = useGlobalContext();
  const isShowMore = expandedIndices.employment === index;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate(index, name, value);
  };

  const handleQuillChange = (value) => {
    const updatedVal = value == "<p><br></p>" ? undefined : value;
    onUpdate(index, "description", updatedVal);
  };

  return (
    <div className="border-b-2 border-blue-500 bg-blue p-2 text-sm mt-4 mb-6">
      <div
        onClick={() => toggleEntry("employment", index)}
        className="flex flex-row justify-between items-center"
      >
        <div>
          <h3 className="font-semibold capitalize text-base">
            {job.employmentTitle ? job.employmentTitle : "Job Title"}
            {job.employer ? ` at ${job.employer}` : ""}
          </h3>
          <h5 className="text-gray-400 capitalize">
            {job.date ? job.date : ""}
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
            placeholder={`Job Title`}
            id={`job_title_${index}`}
            type="text"
            value={job.employmentTitle}
            name="employmentTitle"
            onChange={handleChange}
          />

          <Input
            placeholder="Employer"
            id={`employer_${index}`}
            type="text"
            value={job.employer}
            name="employer"
            onChange={handleChange}
          />
          <Input
            placeholder="Start & End Date"
            id={`period_${index}`}
            type="text"
            name="date"
            value={job.date}
            onChange={handleChange}
          />
          <Input
            placeholder="City"
            id={`job_city_${index}`}
            type="text"
            name="city"
            value={job.city}
            onChange={handleChange}
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
              value={job.description}
              onChange={handleQuillChange}
              style={{ maxHeight: "9.8rem", overflowY: "scroll" }}
            />
            <p className="text-gray-500 text-sm mb-2">
              Recruiter tip: write +200 characters to increase interview
              chances.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
