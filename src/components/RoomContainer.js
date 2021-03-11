import React from "react";
import { RoomConsumer } from "../context";
import Loading from "../components/Loading";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";

function RoomsContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        return (
          <div>
            Hello from rooms container
            <RoomsFilter />
            <RoomsList />
          </div>
        );
      }}
    </RoomConsumer>
  );
}

export default RoomsContainer;
