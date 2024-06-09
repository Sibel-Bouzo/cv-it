import { useGlobalContext } from "@/contexts/Context";
import ItemListManager from "./ItemListManager";

export const Skills = () => {
  const { cvData, setCvData } = useGlobalContext();

  return (
    <section>
      <h2 className="text-xl mb-3 font-medium">Skills</h2>
      <p className="text-gray-500 text-sm mb-3">
        Choose 5 important skills that show you fit the position. Make sure they
        match the key skills mentioned in the job listing (especially when
        applying via an online system).
      </p>
      <ItemListManager
        items={cvData.skills}
        setItems={(items) => {
          setCvData((prev) => {
            return { ...prev, skills: items };
          });
        }}
      />
    </section>
  );
};
