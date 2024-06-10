import { features } from "@/data/data";
export const Features = () => {
  return (
    <div className="py-14 sm:py-20 w-full" id="features">
      <div className="w-[80%] m-auto">
        <h2 className="text-center text-4xl mb-16 sm:mb-24 uppercase relative font-semibold  main-title">
          features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-20 w-full">
          <img src="images/cvs.png" alt="cv" className="hidden md:block" />
          <div>
            {features.map((feature, index) => (
              <div className="mb-3" key={index}>
                <h3 className="font-semibold capitalize text-xl mb-1">
                  - {feature.header}:
                </h3>
                <p className="text-justify text-gray-500">{feature.desc}</p>
              </div>
            ))}
            <div className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
              <h2 className="text-xl font-semibold">
                ATS System Compatibility
              </h2>
              <p>
                Our CV generator produces resumes that pass Applicant Tracking
                Systems (ATS), ensuring your CV reaches recruiters without being
                filtered out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
