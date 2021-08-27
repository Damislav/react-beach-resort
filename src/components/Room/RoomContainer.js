import React from "react";
import { withRoomConsumer } from "../../context/context";
import Loading from "../Loading";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);
