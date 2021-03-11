import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
function RoomFilter() {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  return (
    <section className="filter-container">
      Hello from room filter
      <Title title="search-rooms" />
      <form className="filter-form">
        {/* select type */}

        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            onChange={handleChange}
            className="form-control"
            name="type"
            id="type"
            value={type}
          ></select>
        </div>

        {/*end select type */}
      </form>
    </section>
  );
}

export default RoomFilter;
