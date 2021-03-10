import React, { Component } from "react";
import { RoomContext } from "../context";
export default class Featuredrooms extends Component {
  // setting up context
  static contextType = RoomContext;
  render() {
    const { featuredRooms: rooms } = this.context;
    console.log(rooms);
    return <div>featrued room</div>;
  }
}
