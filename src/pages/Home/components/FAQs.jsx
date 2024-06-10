import { useState } from "react";
import { faqs } from "@/data/data";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-14 sm:py-20 w-full" id="faqs">
      <div className="w-[80%] m-auto">
        <h2 className="text-center text-4xl mb-16 sm:mb-24 uppercase relative font-semibold main-title">
          FAQ
          <span className="normal-case">s</span>
        </h2>
        {faqs.map((faq, index) => (
          <div
            className="mb-4 pb-4 [&:not(:last-child)]:border-b border-gray-200"
            key={index}
          >
            <h3
              className=" sm:text-xl font-semibold cursor-pointer flex items-start sm:items-center"
              onClick={() => toggleAnswer(index)}
            >
              {openIndex === index ? (
                <MdKeyboardArrowDown className="inline text-primary mr-1 mt-1" />
              ) : (
                <MdKeyboardArrowRight className="inline text-primary mr-1 mt-1" />
              )}

              {faq.question}
            </h3>
            <div
              className={`overflow-hidden transition-all duration-500 ease-linear ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              style={{
                transitionProperty: "max-height, opacity",
                maxHeight: openIndex === index ? "500px" : "0",
                opacity: openIndex === index ? 1 : 0,
              }}
            >
              <p className="mt-3 text-justify">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
