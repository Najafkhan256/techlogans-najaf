import React from "react";
import MenuIcon from "@/images/icons/menu.png";
import CloseIcon from "@/images/icons/close.png";
import Image from "next/image";
// import { FaBarsStaggered } from "react-icons/fa";

const ToggleButton = ({ toggleActive, setToggleActive }) => {
  const handleClick = () => {
    setToggleActive(!toggleActive);
  };
  return (
    <div onClick={() => handleClick()} className="toggleButton">
      {toggleActive ? (
        <Image src={CloseIcon} alt="menu" height={20} width={20} />
      ) : (
        <div className="toggle_icon">
          <Image src={MenuIcon} alt="menu" height={15} width={20} />
        </div>
      )}
    </div>
  );
};

export default ToggleButton;
