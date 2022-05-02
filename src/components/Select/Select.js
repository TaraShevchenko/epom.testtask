import {useEffect, useRef, useState} from "react";
import dropdownIcon from "../../assets/images/Dropdown.svg";

import "./Select.scss";


const Select = ({options, defaultOption}) => {

  const selectRef = useRef(null);
  const [selected, setSelected] = useState("");
  const [opened, setOpened] = useState(false);

  const handleToggleSelect = () => {
    setOpened(!opened);
  };

  const handleSelected = (e) => {
    setSelected(e.target.innerHTML);
    setOpened(false);
  };

  const checkClickOutsideSearch = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setOpened(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", checkClickOutsideSearch);
    return () => {
      document.removeEventListener("click", checkClickOutsideSearch);
    }
  })

  return (
    <div ref={selectRef} className={`select ${opened ? "select--opened" : ""}`}>
      <div
        onClick={handleToggleSelect}
        className={`select__input ${!selected ? "select__input--placeholder" : ""}`}>

        {!!selected ? selected : defaultOption}
        <img className="select__dropdown_icon" src={dropdownIcon} alt="dropdownIcon"/>

      </div>
      <div className="select__dropdown">
        {!!options.length && options.map((option, i) => (
          <div
            key={i}
            onClick={handleSelected}
            className={
              `select__dropdown_item
              ${selected === option ? "select__dropdown_item--selected" : ""}`
            }
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
