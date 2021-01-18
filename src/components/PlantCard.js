import React, {useState} from "react";

function PlantCard({plant, priceUpd, onDelete}) {
  const {name, image, price} = plant
  const [isInstock, setIsInstock] = useState(true)
  const [updatedPrice, setUpdatedPrice] = useState("")
  
  const handleChange = (event) => {
    setUpdatedPrice(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const priceObj = {
      price: parseFloat(updatedPrice)
    }

    //console.log(priceObj)
    priceUpd(plant.id, priceObj)
  }

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
      <div>
        <form onSubmit={handleSubmit}>
          <input type="number" name="price" placeholder="Update Price" 
            onChange={handleChange}
            value={updatedPrice}
          />
          <button type="submit">Update Price</button>
        </form>
        <br/>
      </div>
      <button onClick={() => onDelete(plant.id)}>Remove Plant</button>
    </li>
  );
}

export default PlantCard;
