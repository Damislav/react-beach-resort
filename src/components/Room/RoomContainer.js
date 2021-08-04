import React from "react";
import { withConsumer, withRoomConsumer } from "../context";
import Loading from "../components/Loading";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        Hello from rooms container
        <RoomsFilter rooms={rooms} />
        <RoomsList rooms={sortedRooms} />
      </div>
    </>
  );
}

export default withRoomConsumer(RoomContainer);
// import React from "react";
// import { RoomConsumer } from "../context";
// import Loading from "../components/Loading";
// import RoomsFilter from "./RoomFilter";
// import RoomsList from "./RoomList";

// function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;

//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello from rooms container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }

// export default RoomsContainer;
