import { useEffect, useState } from 'react';

const Characters = () => {
  const [characters, setCharacters] = useState<{ id: number; name: string; species: string; gender: string; status: string; image: string; }[]>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character?page=1')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Species</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {characters.map(character => (
            <tr key={character.id}>
              <td>{character.id}</td>
              <td>{character.name}</td>
              <td>{character.species}</td>
              <td>{character.gender}</td>
              <td>{character.status}</td>
              <td><img src={character.image} alt={character.name} width="50" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Characters;
