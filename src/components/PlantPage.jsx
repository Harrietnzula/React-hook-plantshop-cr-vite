import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
git status
  const displayedPlants = plants.filter((plant) => {
  return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
});

// Now, map over 'displayedPlants' instead of 'plants' to render your cards

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []); // Empty dependency array means this runs once on mount
  
  // ... rest of component

  return (
    <main>
<PlantList plants={displayedPlants} />
      <NewPlantForm />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    </main>
  );
}

export default PlantPage;


