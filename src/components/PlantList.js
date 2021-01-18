import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {

  const plantsArray = plants.map(plant => 
    <PlantCard key={plant.id} plant={plant}/>
  )

  return (
    <ul className="cards">
      {plantsArray}
    </ul>
  );
}

export default PlantList;
