import { useEffect, useState } from "react";

const Episodes = () => {
  const [episodes, setEpisodes] = useState<
    {
      id: number;
      episode: string;
      name: string;
      air_date: string;
      characters: string;
    }[]
  >([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((data) => setEpisodes(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Rick and Morty Episodes</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Episode</th>
            <th>Name</th>
            <th>Air Date</th>
            {/* <th>Characters</th> */}
          </tr>
        </thead>
        <tbody>
          {episodes.map((episode) => (
            <tr key={episode.id}>
              <td>{episode.id}</td>
              <td>{episode.episode}</td>
              <td>{episode.name}</td>
              <td>{episode.air_date}</td>
              {/* <td>{episode.characters}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Episodes;
