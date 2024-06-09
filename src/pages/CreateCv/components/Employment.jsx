import { JobEntry } from "./JobEntry";
import { AddButton } from "../../../components/common/ui/AddButton";
import { useGlobalContext } from "@/contexts/Context";

export const Employment = () => {
  const { cvData, addEntry, deleteEntry, updateEntry } = useGlobalContext();

  const handleAddJob = () => addEntry("employment");
  const handleDeleteJob = (index) => deleteEntry("employment", index);
  const handleUpdateJob = (index, field, value) =>
    updateEntry("employment", index, field, value);

  return (
    <section>
      <h2 className="text-xl mb-3 font-medium">Employment History</h2>
      <p className="text-gray-500 text-sm mb-3">
        Show your relevant experience. Use bullet points to note your
        achievements, if possible use numbers/facts (Achieved X, measured by Y,
        by doing Z).
      </p>
      {cvData.employment?.map((job, index) => (
        <JobEntry
          key={index}
          index={index}
          job={job}
          onDelete={handleDeleteJob}
          onUpdate={handleUpdateJob}
        />
      ))}

      <AddButton onClick={handleAddJob} phrase={"Add one more employment"} />
    </section>
  );
};
