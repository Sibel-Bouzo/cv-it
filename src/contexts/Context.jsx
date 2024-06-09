import React, { useState, useContext } from "react";
const AppContext = React.createContext({ cvData: undefined });

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [cvData, setCvData] = useState({
    personalDetails: {
      jobTitle: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      counrty: "",
      city: "",
      personalweb: "",
    },
    summary: "",
    employment: [
      {
        employmentTitle: "",
        employer: "",
        date: "",
        city: "",
        description: "",
      },
    ],
    education: [
      {
        school: "",
        degree: "",
        date: "",
        city: "",
        description: "",
      },
    ],
    socials: [
      {
        label: "",
        link: "",
      },
    ],
    skills: [],
    languages: [
      {
        language: "",
        level: "",
      },
    ],
    custom: [
      {
        sectionTitle: "",
        activity: "",
        city: "",
        date: "",
        description: "",
      },
    ],
  });

  const addEntry = (section) => {
    setCvData((prev) => ({
      ...prev,
      [section]: [
        ...prev[section],
        section === "employment"
          ? {
              employmentTitle: "",
              employer: "",
              date: "",
              city: "",
              description: "",
            }
          : section === "education"
          ? {
              school: "",
              degree: "",
              date: "",
              city: "",
              description: "",
            }
          : section === "socials"
          ? {
              label: "",
              link: "",
            }
          : section === "skills"
          ? []
          : section === "languages"
          ? {
              language: "",
              level: "",
            }
          : section === "custom"
          ? {
              sectionTitle: "",
              activity: "",
              city: "",
              date: "",
              description: "",
            }
          : {},
      ],
    }));
  };

  const deleteEntry = (section, index) => {
    setCvData((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  const updateEntry = (section, index, field, value) => {
    const updatedSection = cvData[section].map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setCvData((prev) => ({
      ...prev,
      [section]: updatedSection,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        cvData: cvData,
        setCvData: setCvData,
        addEntry,
        deleteEntry,
        updateEntry,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
