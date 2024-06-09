import { LanguagesEntry } from "./LanguagesEntry";
import { AddButton } from "../../../components/common/ui/AddButton";
import { useGlobalContext } from "@/contexts/Context";

export const Languages = () => {
  const { cvData, addEntry, deleteEntry, updateEntry } = useGlobalContext();

  const handleAddLanguage = () => addEntry("languages");
  const handleDeleteLanguage = (index) => deleteEntry("languages", index);
  const handleUpdateLanguage = (index, field, value) =>
    updateEntry("languages", index, field, value);

  return (
    <section>
      <h2 className="text-xl mb-3 font-medium">Languages</h2>
      {cvData.languages?.map((language, index) => (
        <LanguagesEntry
          key={index}
          index={index}
          language={language}
          onDelete={handleDeleteLanguage}
          onUpdate={handleUpdateLanguage}
        />
      ))}
      <AddButton onClick={handleAddLanguage} phrase={"Add Language"} />
    </section>
  );
};
