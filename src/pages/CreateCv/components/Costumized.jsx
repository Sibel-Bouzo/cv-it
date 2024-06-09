import { AddButton } from "../../../components/common/ui/AddButton";
import { CostumEntry } from "./CostumEntry";
import { useGlobalContext } from "@/contexts/Context";

export const Costumized = () => {
  const { cvData, addEntry, deleteEntry, updateEntry } = useGlobalContext();

  const handleAddCustom = () => addEntry("custom");
  const handleDeleteCustom = (index) => deleteEntry("custom", index);
  const handleUpdateCustom = (index, field, value) =>
    updateEntry("custom", index, field, value);

  return (
    <section>
      <h2 className="text-xl mb-3 font-medium">Add Custom Section</h2>
      <p className="mb-3 text-gray-400 text-sm">
        Click on the untitled to change section name
      </p>
      {cvData.custom.map((customItem, index) => (
        <CostumEntry
          key={index}
          index={index}
          onDelete={handleDeleteCustom}
          onUpdate={handleUpdateCustom}
          customItem={customItem}
        />
      ))}

      <AddButton
        onClick={handleAddCustom}
        phrase={"Add one more costum section"}
      />
    </section>
  );
};
