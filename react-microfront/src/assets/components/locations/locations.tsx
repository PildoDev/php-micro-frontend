import { useEffect, useState } from "react";

const Locations = () => {
  const [locations, setLocations] = useState<
    {
      id: number;
      name: string;
      type: string;
      dimension: string;
      residents: string;
    }[]
  >([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location?page=1")
      .then((response) => response.json())
      .then((data) => setLocations(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Rick and Morty Locations</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Dimension</th>
            {/* <th>Residents</th> */}
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => (
            <tr key={location.id}>
              <td>{location.id}</td>
              <td>{location.name}</td>
              <td>{location.type}</td>
              <td>{location.dimension}</td>
              {/* <td>{location.residents}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Locations;
