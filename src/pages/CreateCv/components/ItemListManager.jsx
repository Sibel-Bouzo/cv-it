/* eslint-disable react/prop-types */
import { useState } from "react";
import { GoPlus } from "react-icons/go";

// eslint-disable-next-line react/prop-types
const ItemListManager = ({ items, setItems }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="relative flex flex-col">
      <input
        type="text"
        className="flex h-10 w-full border-b-2 border-input px-3 py-2 text-sm ring-offset-background rounded bg-[#ebebeb49] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        style={{ boxShadow: "0px 0px 8px 0px var(--black-100-t20)" }}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Add skill"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleAddItem();
          }
        }}
      />

      <button onClick={handleAddItem} className="absolute end-5 top-[0.5rem]">
        <GoPlus className="text-2xl mr-1 font-bold text-primary" />
      </button>

      {items?.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2 items-center">
          {items?.map((item, index) => (
            <li
              key={index}
              className="flex justify-between gap-[0.62rem] text-black text-sm rounded bg-[#3333330d] px-3 py-2 hover:bg-blue-100"
            >
              {item}
              <button
                onClick={() => handleRemoveItem(index)}
                className="mt-[3px]"
              >
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 5L4.5 14"
                    stroke="#333333"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 5L13.5 14"
                    stroke="#333333"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemListManager;
