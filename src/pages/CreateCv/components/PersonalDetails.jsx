import { useState } from "react";
import { Input } from "../../../components/ui/input";
import { useGlobalContext } from "@/contexts/Context";

export const PersonalDetails = () => {
  const [addMore, setAddMore] = useState(false);
  const { cvData, setCvData } = useGlobalContext();

  return (
    <section>
      <h2 className="text-xl mb-4 font-medium">Personal Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2">
        <Input
          placeholder="Wanted Job Title"
          className="sm:col-span-2"
          id={"job"}
          type={"text"}
          value={cvData.personalDetails?.jobTitle}
          onChange={(e) =>
            setCvData((prev) => {
              return {
                ...prev,
                personalDetails: {
                  ...prev.personalDetails,
                  jobTitle: e.target.value,
                },
              };
            })
          }
        />

        <Input
          placeholder="First Name"
          id={"first_name"}
          type={"text"}
          value={cvData.personalDetails?.firstName}
          onChange={(e) =>
            setCvData((prev) => {
              return {
                ...prev,
                personalDetails: {
                  ...prev.personalDetails,
                  firstName: e.target.value,
                },
              };
            })
          }
        />
        <Input
          placeholder="Last Name"
          id={"last_name"}
          type={"text"}
          value={cvData.personalDetails?.lastName}
          onChange={(e) =>
            setCvData((prev) => {
              return {
                ...prev,
                personalDetails: {
                  ...prev.personalDetails,
                  lastName: e.target.value,
                },
              };
            })
          }
        />
        <Input
          placeholder="Email"
          id={"email"}
          type={"email"}
          value={cvData.personalDetails?.email}
          onChange={(e) =>
            setCvData((prev) => {
              return {
                ...prev,
                personalDetails: {
                  ...prev.personalDetails,
                  email: e.target.value,
                },
              };
            })
          }
        />
        <Input
          placeholder="Phone"
          id={"phone"}
          type={"text"}
          value={cvData.personalDetails?.phone}
          onChange={(e) =>
            setCvData((prev) => {
              return {
                ...prev,
                personalDetails: {
                  ...prev.personalDetails,
                  phone: e.target.value,
                },
              };
            })
          }
        />
        <Input
          placeholder="Country"
          id={"country"}
          type={"text"}
          value={cvData.personalDetails?.counrty}
          onChange={(e) =>
            setCvData((prev) => {
              return {
                ...prev,
                personalDetails: {
                  ...prev.personalDetails,
                  counrty: e.target.value,
                },
              };
            })
          }
        />
        <Input
          placeholder="City"
          id={"city"}
          type={"text"}
          value={cvData.personalDetails?.city}
          onChange={(e) =>
            setCvData((prev) => {
              return {
                ...prev,
                personalDetails: {
                  ...prev.personalDetails,
                  city: e.target.value,
                },
              };
            })
          }
        />
        <Input
          placeholder="LinkedIn profile or personal website"
          id={"personal_web"}
          type={"text"}
          value={cvData.personalDetails?.personalweb}
          className="sm:col-span-2"
          onChange={(e) =>
            setCvData((prev) => {
              return {
                ...prev,
                personalDetails: {
                  ...prev.personalDetails,
                  personalweb: e.target.value,
                },
              };
            })
          }
        />
      </div>
      <button
        onClick={() => setAddMore(!addMore)}
        className="mt-3 text-primary"
      ></button>
    </section>
  );
};
