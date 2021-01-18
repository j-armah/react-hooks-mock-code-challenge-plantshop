import React, {useState} from "react";

function PlantCard({plant}) {
  const {name, image, price} = plant
  const [isInstock, setIsInstock] = useState(true)
  

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInstock ? (
        <button 
          className="primary" 
          onClick={() => setIsInstock(!isInstock)}
        >In Stock</button>
      ) : (
        <button 
          onClick={() => setIsInstock(!isInstock)}
        >
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
