import { SocialsEnrty } from "./SocialsEnrty";
import { AddButton } from "../../../components/common/ui/AddButton";
import { useGlobalContext } from "@/contexts/Context";

export const Socials = () => {
  const { cvData, addEntry, deleteEntry, updateEntry } = useGlobalContext();

  const handleAddSocial = () => addEntry("socials");
  const handleDeleteSocial = (index) => deleteEntry("socials", index);
  const handleUpdateSocial = (index, field, value) =>
    updateEntry("socials", index, field, value);

  return (
    <section>
      <h2 className="text-xl mb-3 font-medium">Websites & Social Links</h2>
      <p className="text-gray-500 text-sm mb-3">
        You can add links to websites you want hiring managers to see! It can be
        a link to your portfolio, LinkedIn profile, or personal website.
      </p>
      {cvData.socials?.map((social, index) => (
        <SocialsEnrty
          key={index}
          index={index}
          social={social}
          onDelete={handleDeleteSocial}
          onUpdate={handleUpdateSocial}
        />
      ))}
      <AddButton onClick={handleAddSocial} phrase={"Add link"} />
    </section>
  );
};
