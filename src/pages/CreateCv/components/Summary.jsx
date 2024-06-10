import ReactQuill from "react-quill";
import { useGlobalContext } from "@/contexts/Context";
import "react-quill/dist/quill.snow.css";

export const Summary = () => {
  const { cvData, setCvData } = useGlobalContext();

  return (
    <section>
      <h2 className="text-xl mb-3 font-medium">Professional Summary</h2>
      <p className="text-gray-500 text-sm mb-4">
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </p>
      <div className="ql-toolbar">
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
        theme="snow"
        value={cvData.summary}
        onChange={(e) =>
          setCvData((prev) => {
            return {
              ...prev,
              summary: e == "<p><br></p>" ? undefined : e,
            };
          })
        }
        style={{ maxHeight: "15rem", overflowY: "scroll" }}
      />
      <p className="text-gray-500 text-sm mb-2">
        Recruiter tip: write 400-600 characters to increase interview chances.
      </p>
    </section>
  );
};
