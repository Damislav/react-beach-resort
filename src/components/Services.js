import React, { Component } from "react";
import Title from "./Main/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "lorem ipsum sit amet",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "lorem ipsum sit amet",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Van",
        info: "lorem ipsum sit amet",
      },
      {
        icon: <FaBeer />,
        title: "Strongest beer",
        info: "lorem ipsum sit amet",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
