import React, {useState} from "react";

function NewPlantForm({newPlant}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0
  })

  const handleChange = (event) => {
    if (event.target.name === "price") {
      setFormData({
        ...formData, 
        [event.target.name] : parseFloat(event.target.value)
      })
    } else {
      setFormData({
        ...formData, 
        [event.target.name] : event.target.value
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submitted')

    newPlant(formData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" 
          onChange={handleChange}
          value={formData.name}
        />
        <input type="text" name="image" placeholder="Image URL" 
          onChange={handleChange}
          value={formData.image}
        />
        <input type="number" name="price" step="0.01" placeholder="Price" 
          onChange={handleChange}
          value={formData.price}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
