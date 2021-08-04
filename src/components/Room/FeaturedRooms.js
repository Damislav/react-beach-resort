import React, { Component } from "react";
import { RoomContext } from "../../context/context";
import Loading from "../Loading";
import Room from "./Room";
import Title from "../Main/Title";
export default class Featuredrooms extends Component {
  // setting up context
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="feature-rooms">
        <Title title="featured-rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
