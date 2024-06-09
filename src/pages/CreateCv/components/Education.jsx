import { useGlobalContext } from "@/contexts/Context";
import { AddButton } from "../../../components/common/ui/AddButton";
import { EducationEntry } from "./EducationEntry";

export const Education = () => {
  const { cvData, addEntry, deleteEntry, updateEntry } = useGlobalContext();

  const handleAddEducation = () => addEntry("education");
  const handleDeleteEducation = (index) => deleteEntry("education", index);
  const handleUpdateEducation = (index, field, value) =>
    updateEntry("education", index, field, value);

  return (
    <section>
      <h2 className="text-xl mb-3 font-medium">Education</h2>
      <p className="text-gray-500 text-sm mb-3">
        A varied education on your resume sums up the value that your learnings
        and background will bring to job.
      </p>
      {cvData.education?.map((education, index) => (
        <EducationEntry
          key={index}
          index={index}
          education={education}
          onDelete={handleDeleteEducation}
          onUpdate={handleUpdateEducation}
        />
      ))}

      <AddButton
        onClick={handleAddEducation}
        phrase={"Add one more education"}
      />
    </section>
  );
};
