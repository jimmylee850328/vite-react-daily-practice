import React, { useState } from 'react';
import Dialog from './components/Dialog';
import Button from '@mui/joy/Button';

export default function Home() {
  return <Button variant="outlined">Hello world</Button>;
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState('');
  // const options = ['a', 'b', 'c'];

  // const handleButtonClick = () => {
  //   setIsOpen(true);
  // };

  // const handleDropdownChange = (event) => {
  //   setIsOpen(false); // 选择完选项后关闭 dialog
  //   setSelectedOption(event.target.value);
  // };

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  // return (
  //   <div>
  //     <button
  //       className="bg-primary py-2 px-4 rounded"
  //       onClick={handleButtonClick}
  //     >
  //       Open Dialog
  //     </button>
  //     <p className="mt-4">Selected Option: {selectedOption}</p>

  //     <Dialog
  //       isOpen={isOpen}
  //       selectedOption={selectedOption}
  //       options={options}
  //       onClose={handleClose}
  //       onDropdownChange={handleDropdownChange}
  //     />
  //   </div>
  // );
}