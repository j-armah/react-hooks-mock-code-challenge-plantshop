import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPlants(data)
      })
  }, [])

  const handleNewPlant = (formData) => {
    //console.log(formData)
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => {
      setPlants([...plants, data])
    })
  }

  const filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(search)
  })


  return (
    <main>
      <NewPlantForm newPlant={handleNewPlant}/>
      <Search onSearch={setSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
