import React from "react";
import "./CardList-Styles.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list-container">
      {monsters.map((monster) => {
        return (
          <div className="monster-card">
            <div className="monster-title">
              <h1 key={monster.id}>{monster.name}</h1>
            </div>
            <div className="monster-details">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati molestiae voluptate saepe sint. Accusantium vel sed
                veritatis dolorum laborum officia voluptatum sequi perspiciatis,
                exercitationem, inventore vitae magni aliquid ab excepturi.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
