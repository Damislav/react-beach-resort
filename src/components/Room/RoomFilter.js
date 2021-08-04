import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../context/context";
import Title from "../Main/Title";
function RoomFilter({ rooms }) {
  // çonst get unique views, value is its position in arr
  const getUnique = (items, value) => {
    // SET only returns unique items
    return [
      ...new Set(
        items.map((item) => {
          return item[value];
        })
      ),
    ];
  };

  // get unique  types
  let types = getUnique(rooms, "type");
  // ¸add all

  types = ["all", ...types];
  // ¸map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  // get all unique rooms and capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

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
          >
            {types}
          </select>
        </div>{" "}
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            onChange={handleChange}
            className="form-control"
            name="capacity"
            id="capacity"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/*end guest type */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            className="form-control"
            onChange={handleChange}
            value={price}
            id="price"
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
          />
        </div>
        {/* end room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size"> </label>
          <div className="size">room size</div>
          <div className="size-inputs">
            <input
              className="size-input"
              onChange={handleChange}
              value={minSize}
              type="number"
              name="minSize"
              id="size"
            />{" "}
            <input
              className="size-input"
              onChange={handleChange}
              value={maxSize}
              type="number"
              name="maxSize"
              id="size"
            />
          </div>{" "}
        </div>
        {/* ¸end of size */}
        {/* ¸extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              onChange={handleChange}
              checked={breakfast}
              type="checkbox"
              name="breakfast"
              id="breakfast"
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>{" "}
          <div className="single-extra">
            <input
              onChange={handleChange}
              checked={pets}
              type="checkbox"
              name="pets"
              id="pets"
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* ¸end of extras */}
      </form>
    </section>
  );
}

export default RoomFilter;
