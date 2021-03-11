import Room from "./Room";

import React from "react";

export default function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfornatenly no rooms matched your paramters</h3>
      </div>
    );
  }

  return (
    <section className="roomsList">
      <div className="roomsList-center">
        {rooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
