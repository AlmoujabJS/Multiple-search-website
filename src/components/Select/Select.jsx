import { useState } from "react";
import { ICONS } from "../../Helper/EnginesIcons/EnginesIcons";

import "./styles.css";

const Select = ({ list, name }) => {
  const [listVisibility, setListVisibility] = useState("none");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const switchVisibility = () => {
    listVisibility === "none"
      ? setListVisibility("block")
      : setListVisibility("none");
  };
  const switchSelect = (e) => {
    const targetValue = e.target.dataset.value;
    setSelectedOptions((currentOptions) => {
      return currentOptions.includes(targetValue)
        ? currentOptions.filter((option) => option !== targetValue)
        : [...currentOptions, targetValue];
    });
  };
  return (
    <div name={name} className="AMJ-Select" data-value={selectedOptions}>
      <div className="selected-options" onClick={switchVisibility}>
        {selectedOptions.length
          ? selectedOptions.map((ele, index) => (
              <span key={index} className="selected-option">
                {ICONS[ele.toLowerCase()]()}
              </span>
            ))
          : "Select"}
      </div>
      <div className="select-list">
        <ul style={{ display: listVisibility }}>
          {list.map((li, index) => {
            if (selectedOptions.includes(li)) {
              return (
                <li
                  style={{
                    backgroundColor: "var(--color-hover)",
                    fontWeight: 500
                  }}
                  key={index}
                  data-value={li}
                  onClick={switchSelect}
                >
                  {li}
                </li>
              );
            }
            return (
              <li key={index} data-value={li} onClick={switchSelect}>
                {li}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Select;
