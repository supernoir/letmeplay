import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"
import Card from './components/Card'

import Select from 'react-select'

const options = [
  { value: 'lesbianwoman', label: 'Lesbian woman' },
  { value: 'gayman', label: 'Gay man' },
  { value: 'bisexualwoman', label: 'Bisexual Woman' },
  { value: 'bisexualman', label: 'Bisexual Man' },
  { value: 'transwoman', label: 'Trans Woman' },
  { value: 'transman', label: 'Trans Man' },
  { value: 'intersex', label: 'Intersex Person' },
]

function App() {

  const [data, setData] = useState<any>([]);
  const [query, setQuery] = useState<any>([]);
  const [selectedOption, setSelectedOption] = useState<any>(null);


  const sendQuery = (query: string) => {
    const response = axios(
      `http://localhost:3031/characters/${query}`,
    );
    response.then((payload) => {
      console.log({ 'sendQuery': payload.data.games })
      setData(payload.data.games || []);
    })
  }

  const updateQuery = (query: string[]) => {
    setQuery(query);
  }

  useEffect(() => {
    sendQuery("bisexualwoman");
    const response = axios(
      'http://localhost:3031/games',
    );
    response.then((payload) => {
      console.log({ 'useEffect': payload.data.games })
      setData(payload.data.games || []);
    })
  }, []);


  return (
    <main className="App">
      <div>
        <h1 className="app_title">Let me play as a</h1>
        <Select
          isMulti
          options={options}
          defaultValue={selectedOption}
          onChange={setSelectedOption} />

      </div>
      <div>
        {data.map((game: any) => {
          return <Card
            title={game.title}
            yearpublished={game.yearpublished}
            series={game.series}
            characters={game.characters}
            genre={game.genre}
          />
        }
        )}
      </div>
    </main>
  );
}



export default App;
