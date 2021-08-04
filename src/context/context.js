import React, { Component } from "react";
import items from "../data";
const RoomContext = React.createContext();
// access to provider and consumer
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "single",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  // getData
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => {
        return image.fields.file.url;
      });
      let room = { ...item.fields, images: images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => {
      return room.slug === slug;
    });
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    // ¸destracture from state
    let { rooms, type, capacity, price, pets, minSize, maxSize, breakfast } =
      this.state;
    // şpread rooms from state
    let tempRooms = [...rooms];
    // transform values

    capacity = parseInt(capacity);
    price = parseInt(price);
    // ¸filter by type
    if (type !== "all") {
      // ¸get all rooms that have same type as type in state
      tempRooms = tempRooms.filter((room) => {
        return room.type === type;
      });

      // ¸filter by capacity
      if (capacity !== 1) {
        tempRooms = tempRooms.filter((room) => {
          return room.capacity >= capacity;
        });
      }
      // ¸filter by price

      tempRooms = tempRooms.filter((room) => {
        return room.price < price;
      });
      // ¸filter by breakfast
      if (breakfast) {
        tempRooms = tempRooms.filter((room) => {
          return room.breakfast === breakfast;
        });
      }

      // ¸filter by pets
      if (pets) {
        tempRooms = tempRooms.filter((room) => {
          return room.pets === pets;
        });
      }
      // ¸filter by size
      tempRooms = tempRooms.filter((room) => {
        // ¸get room size that is higher then min size and lower then max size
        return room.size >= minSize && room.size <= maxSize;
      });

      // çhange state
      this.setState({
        //  	 set sorted rooms as temp rooms
        sortedRooms: tempRooms,
      });
    }
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
