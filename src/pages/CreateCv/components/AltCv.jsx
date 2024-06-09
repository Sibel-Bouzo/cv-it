import { useGlobalContext } from "@/contexts/Context";
import "react-quill/dist/quill.snow.css"; // Import styles for React-Quill

export const AltCv = () => {
  const { cvData } = useGlobalContext();

  return (
    <div
      className="p-12 w-full alt-cv times-new-roman"
      id="divToPrint"
      style={{ overflowWrap: "anywhere" }}
    >
      {Object.values(cvData?.personalDetails).filter((item) => !!item).length >
        0 && (
        <div className="pb-2 text-center personal-details w-full justify-center">
          <h1 className="capitalize font-bold text-[26px]">
            {cvData.personalDetails?.firstName}{" "}
            {cvData.personalDetails?.lastName}
          </h1>
          <h3 className="capitalize font-semibold text-[22px] mb-2">
            {cvData.personalDetails?.jobTitle}
          </h3>
          <ul className="flex justify-center gap-6 list-disc text-[14px] overflow-wrap-anywhere p-0">
            {(cvData.personalDetails?.city ||
              cvData.personalDetails?.counrty) && (
              <li className="capitalize">
                {cvData.personalDetails?.city},{" "}
                {cvData.personalDetails?.counrty}
              </li>
            )}
            {cvData.personalDetails?.phone && (
              <li>{cvData.personalDetails?.phone}</li>
            )}
            {cvData.personalDetails?.email && (
              <li>{cvData.personalDetails?.email}</li>
            )}
            {cvData.personalDetails?.personalweb && (
              <li>
                <a
                  href={`https://${cvData.personalDetails?.personalweb}`}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                >
                  {cvData.personalDetails?.personalweb}
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
      {cvData?.summary && (
        <div className="mt-4 text-xl">
          <h2 className="text-[18px] font-semibold mb-2 uppercase border-b border-black">
            career summary
          </h2>
          <div
            className="text-justify text-[14px] overflow-wrap-anywhere leading-[1.1rem]"
            dangerouslySetInnerHTML={{ __html: cvData.summary }}
          />
        </div>
      )}
      {cvData?.employment.length > 0 &&
        Object.values(cvData?.employment[0]).filter((item) => !!item).length >
          0 && (
          <div className="mt-4 text-xl">
            <h2 className="text-[18px] font-semibold mb-2 uppercase border-b border-black">
              professional experience
            </h2>
            {cvData.employment.map((job, index) => (
              <div
                key={index}
                className="[&:not(:last-child)]:mb-3 text-[0.9169rem]"
              >
                <p className="capitalize mb-1 font-semibold text-[16px]">
                  {job.employmentTitle}
                </p>
                <div className="flex flex-row align-middle justify-between">
                  <p className="capitalize font-semibold text-[16px]">
                    {job.employer}
                    {job.city && <span className="inline">, {job.city}</span>}
                  </p>
                  <p className="capitalize">{job.date}</p>
                </div>
                <div
                  className="text-[14px] text-justify overflow-wrap-anywhere leading-[1.1rem] mt-1"
                  dangerouslySetInnerHTML={{
                    __html: job.description,
                  }}
                />
              </div>
            ))}
          </div>
        )}
      {cvData?.education.length > 0 &&
        Object.values(cvData?.education[0]).filter((item) => !!item).length >
          0 && (
          <div className=" mt-4 text-xl">
            <h2 className="text-[18px] font-semibold mb-2 uppercase border-b border-black">
              education
            </h2>
            {cvData.education.map((degree, index) => (
              <div
                key={index}
                className="[&:not(:last-child)]:mb-3 text-[0.9169rem]"
              >
                <div className="flex flex-row align-middle justify-between">
                  <p className="capitalize font-medium">
                    {degree.degree}
                    {degree.school && (
                      <span className="inline capitalize">
                        - {degree.school}
                      </span>
                    )}
                  </p>
                  <p className="capitalize">{degree.date}</p>
                </div>
                <p className="capitalize">{degree.city}</p>
                <div
                  className="mt-1 text-justify text-[14px] overflow-wrap-anywhere leading-[1.1rem]"
                  dangerouslySetInnerHTML={{
                    __html: degree.description,
                  }}
                />
              </div>
            ))}
          </div>
        )}
      {cvData.skills.length > 0 && (
        <div className=" mt-4 text-xl">
          <h2 className="text-[18px] font-semibold mb-2 uppercase border-b border-black">
            skills
          </h2>
          {cvData.skills.map((skill, index) => (
            <span key={index} className="text-[14px]">
              {skill}
              {index < cvData.skills.length - 1 && ", "}{" "}
            </span>
          ))}
        </div>
      )}
      {cvData?.socials.length > 0 &&
        Object.values(cvData?.socials[0]).filter((item) => !!item).length >
          0 && (
          <div className=" mt-4 text-xl">
            <h2 className="text-[18px] font-semibold mb-2 uppercase border-b border-black">
              Social Links
            </h2>
            <ul>
              {cvData.socials.map((social, index) => (
                <li className="text-[14px] font-semibold" key={index}>
                  <p className="capitalize inline text-[14px]">
                    {social.label}:{" "}
                  </p>
                  <a
                    href={`https://${social.link}`}
                    className="text-blue-500 hover:underline text-[14px]"
                    target="_blank"
                  >
                    <span className="font-normal text-[14px]">
                      {social.link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      {cvData?.languages.length > 0 &&
        Object.values(cvData?.languages[0]).filter((item) => !!item).length >
          0 && (
          <div className=" mt-4 text-xl">
            <h2 className="text-[18px] font-semibold mb-2 uppercase border-b border-black">
              languages
            </h2>
            <ul>
              {cvData.languages.map((language, index) => (
                <li className="text-[14px] font-semibold" key={index}>
                  <p className="capitalize inline mr-1">{language.language}:</p>
                  <span className="font-normal">{language.level}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      {cvData?.custom.length > 0 &&
        Object.values(cvData?.custom[0]).filter((item) => !!item).length >
          0 && (
          <>
            {cvData.custom.map((customsection, index) => (
              <div key={index} className=" mt-4 text-xl">
                <h2 className="text-[18px] font-semibold mb-2 uppercase border-b border-black">
                  {customsection.sectionTitle}
                </h2>
                <div className="[&:not(:last-child)]:mb-3 text-[0.9169rem]">
                  <div className="flex flex-row align-middle justify-between">
                    <p className="capitalize font-medium">
                      {customsection.activity}
                      {customsection.city && (
                        <span className="inline">, {customsection.city}</span>
                      )}
                    </p>
                    <p className="capitalize">{customsection.date}</p>
                  </div>

                  <div
                    className="text-justify text-[14px] overflow-wrap-anywhere leading-[1.1rem]"
                    dangerouslySetInnerHTML={{
                      __html: customsection.description,
                    }}
                  />
                </div>
              </div>
            ))}
          </>
        )}
    </div>
  );
};
