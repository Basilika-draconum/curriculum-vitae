import { useState } from "react";
import { ReactComponent as Solo } from "../../images/icons/people solo.svg";
import { ReactComponent as Group } from "../../images/icons/people team.svg";
import s from "./filter.module.scss";

const Filter = ({ onChangeFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setSelectedFilter(value);
    onChangeFilter(value);
  };

  return (
    <div className={s.radio}>
      <label className={s.radio_label}>
        <input
          type="radio"
          className={s.radio_input}
          name="filter"
          value="all"
          checked={selectedFilter === "all"}
          onChange={handleFilterChange}
        />
        All
      </label>
      <label className={s.radio_label}>
        <input
          type="radio"
          className={s.radio_input}
          name="filter"
          value="solo"
          checked={selectedFilter === "solo"}
          onChange={handleFilterChange}
        />
        Solo
        <Solo className={s.icon_proj} />
      </label>
      <label className={s.radio_label}>
        <input
          type="radio"
          className={s.radio_input}
          name="filter"
          value="group"
          checked={selectedFilter === "group"}
          onChange={handleFilterChange}
        />
        Group
        <Group className={s.icon_proj} />
      </label>
    </div>
  );
};

export default Filter;
