import React, { useState } from 'react';

const Dropdown = ({ items, heading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {heading && (
        <div className="absolute text-xs text-white bg-[#222623] bottom-8 left-3">
          {heading}
        </div>
      )}
      <button
        className="min-w-[150px] max-w-md max-h-10 overflow-hidden flex border-[1px] border-white items-center px-2 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        onClick={toggleDropdown}
      >
        {selectedItem ? selectedItem.name : 'Select an item'}
        <svg
          className="w-4 h-4 ml-1 text-white fill-current"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M10 12l6-6H4l6 6z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute max-w-md mt-2 border border-gray-700 shadow-md">
          <ul className="py-2">
            {items.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer px-2 text-white py-2 hover:bg-gray-500"
                onClick={() => handleItemClick(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
