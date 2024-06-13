import { Education } from "@/pages/CreateCv/components/Education";
import { Employment } from "@/pages/CreateCv/components/Employment";
import { PersonalDetails } from "@/pages/CreateCv/components/PersonalDetails";
import { Skills } from "@/pages/CreateCv/components/Skills";
import { Socials } from "@/pages/CreateCv/components/Socials";
import { Summary } from "@/pages/CreateCv/components/Summary";
import { Languages } from "@/pages/CreateCv/components/Languages";
import { useState, useEffect } from "react";
import { Costumized } from "@/pages/CreateCv/components/Costumized";
import { Cv } from "./components/Cv";
import clsx from "clsx";
import { MdArrowBack } from "react-icons/md";
import { AltCv } from "./components/AltCv";
import { FaExchangeAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProgressBar = ({ step }) => {
  const totalSteps = 6;
  return (
    <div className="relative flex justify-center items-center mb-8">
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className="relative flex items-center">
          {index < totalSteps - 1 && (
            <div className="absolute left-[calc(50%+12px)] top-1/2 transform -translate-y-1/2 w-[calc(100%-24px)] h-0.5 bg-[#ebebeb49] z-0">
              <div
                className={`absolute top-0 left-0 h-full transition-all duration-300 ease-in-out ${
                  step > index ? "w-full bg-primary" : "w-0"
                }`}
              />
            </div>
          )}
          <div
            className={`relative z-10 w-4 h-4 rounded-full mx-4 transform transition-transform duration-300 delay-300 ease-in-out ${
              index <= step
                ? "bg-primary scale-110"
                : "bg-[#ebebeb49] scale-100"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export const CreateCv = () => {
  const [step, setStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isMediumOrLarger, setIsMediumOrLarger] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const downloadPdf = async () => {
    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "none";

    document.body.appendChild(iframe);

    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // const printContents = isFlipped
    //   ? document.querySelector(".back").innerHTML
    //   : document.querySelector(".front").innerHTML;

    const printContents = isFlipped
      ? document.getElementById("divToPrintBack").innerHTML
      : document.getElementById("divToPrintFront").innerHTML;

    const fontFamily = isFlipped
      ? "Times New Roman, serif"
      : "Arial, sans-serif";

    const stylesheets = Array.from(document.styleSheets)
      .map((styleSheet) => {
        try {
          return Array.from(styleSheet.cssRules)
            .map((rule) => rule.cssText)
            .join("");
        } catch (e) {
          return "";
        }
      })
      .join("");

    iframeDoc.open();
    iframeDoc.write(`
      <html>
        <head>
          <style>
            ${stylesheets}
            ul {
              list-style-type: disc;
              margin-left: 20px; /* Ensuring the list is indented */
            }
            .no-margin {
              margin-left:0;
            }
            body {
              background-color: white;
              margin:0;
                          font-family: ${fontFamily}; /* Dynamically set the font-family */

            }            
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `);
    iframeDoc.close();

    iframe.onload = () => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
      document.body.removeChild(iframe);
    };
  };

  const handleResize = () => {
    setIsMediumOrLarger(window.innerWidth >= 1024);
  };

  const handleTemplateChange = () => {
    setIsFlipped((prev) => !prev);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-row justify-between min-h-[100vh] w-full">
      <div
        className={clsx(
          isFinished && "hidden md:flex",
          "fixed left-0 top-0 w-full md:w-[50%] md:rounded-r-3xl shadow-xl px-10 py-8 h-[100vh] overflow-y-auto bg-white flex flex-col sm:justify-between"
        )}
      >
        <div>
          <p className="mb-6">
            <Link to="/cv-it/" className="text-blue-600 text-sm underline">
              Home
            </Link>
            &gt; create-cv
          </p>

          <ProgressBar step={step} />
          {step === 0 && <PersonalDetails />}
          {step === 1 && <Summary />}
          {step === 2 && <Employment />}
          {step === 3 && <Education />}
          {step === 4 && (
            <>
              <Socials />
              <Skills />
              <Languages />
            </>
          )}
          {step === 5 && <Costumized />}
        </div>
        <div className="w-[100%] flex flex-row justify-between font-semibold">
          <button
            onClick={() => {
              if (step > 0) setStep((prev) => prev - 1);
            }}
            className={
              step > 0
                ? "text-black border-2 px-6 py-2 rounded-md"
                : "text-gray-400 cursor-auto border-2 px-6 py-2 rounded-md"
            }
          >
            Back
          </button>
          {step < 5 ? (
            <button
              onClick={() => {
                if (step < 5) setStep((prev) => prev + 1);
              }}
              className="text-white bg-primary px-6 py-2 rounded-md"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => setIsFinished(true)}
              className={clsx(
                isMediumOrLarger ? "hidden" : "block",
                "text-white bg-primary px-6 py-2 rounded-md capitalize"
              )}
            >
              {!isMediumOrLarger ? "finish" : ""}
            </button>
          )}
        </div>
      </div>

      <div
        className={clsx(
          "md:ml-[50%] flex-1 w-full md:w-[50%] h-[100vh] flex flex-col items-center pt-5 relative overflow-hidden",
          !isFinished && "hidden md:flex"
        )}
      >
        <div className="flex flex-col gap-3 sm:w-[440px] md:w-[480px] items-center ml-0 max-h-[90vh] w-full px-5 sm:px-0">
          <div className="flex items-center justify-between md:justify-between gap-6 text-[15px] w-full">
            <button
              className="md:hidden block capitalize"
              onClick={() => setIsFinished(false)}
            >
              <MdArrowBack className="text-2xl duration-300 hover:text-primary" />
            </button>
            <div className="flex flex-row gap-3 md:justify-between md:w-full">
              <button
                onClick={handleTemplateChange}
                className="px-4 md:px-0 md:pr-2 py-2 rounded-md md:rounded-none md:border-r-2 md:border-gray-300 capitalize font-medium bg-gray-200 md:bg-transparent flex flex-row items-center duration-300 hover:bg-slate-200 hover:text-primary md:hover:bg-transparent md:hover:text-primary"
              >
                <FaExchangeAlt className="text-lg mr-2" />
                switch layout
              </button>

              <button
                className="text-white bg-primary px-2 py-1 sm:px-6 sm:py-2 rounded-md capitalize font-semibold text-center align-middle flex items-center justify-between gap-2"
                onClick={downloadPdf}
              >
                <p className="bold text-lg">
                  <FiDownload />
                </p>
                <p className="hidden sm:block">download</p>
              </button>
            </div>
          </div>

          <div className="flip-container">
            <div
              className={clsx(
                "flex flex-col justify-start items-center scale-[0.4] sm:scale-[0.55] md:scale-[0.6] bg-white w-[210mm] min-h-[297mm] transform origin-top shadow-lg overflow-y-auto",
                isFlipped && "flipped"
              )}
            >
              <div className="flipper">
                <div className="front">
                  <Cv />
                </div>
                <div className="back">
                  <AltCv />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
