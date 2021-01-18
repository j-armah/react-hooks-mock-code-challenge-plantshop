import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, priceUpd, onDelete }) {

  const plantsArray = plants.map(plant => 
    <PlantCard key={plant.id} plant={plant} priceUpd={priceUpd} onDelete={onDelete}/>
  )

  return (
    <ul className="cards">
      {plantsArray}
    </ul>
  );
}

export default PlantList;
