import React from 'react';
import PropTypes from 'prop-types';

export default function Dialog({ isOpen, selectedOption, options, onClose, onDropdownChange }) {
  return (
    isOpen && (
      <div className="v-dialog">
        <div className="bg-white p-8 rounded shadow-lg flex items-center justify-center">
          <span className="pr-2"> Select: </span>
          <select
            className="block w-full p-2 border border-gray-300 rounded"
            value={selectedOption}
            onChange={onDropdownChange}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  );
}

Dialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    selectedOption: PropTypes.string,
    options: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
    onDropdownChange: PropTypes.func.isRequired,
};