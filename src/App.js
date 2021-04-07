import * as React from "react";
import axios from "axios";
import './App.css';

const {useEffect, useState} = React;

const fecthData = () => {
  return axios.get('https://randomuser.me/api')
  .then(({data}) => {
    // handle success
    console.log(data);
    return JSON.stringify(data, null, 2);
  })
  .catch(err => {
    // handle error
    console.error(err);
  });
}

export  default function App() {
  const [antrian, setAntrian] = useState(0);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState('');

  useEffect(() => {
    fecthData().then(RandomData => {
      setRandomUserDataJSON(RandomData || 'No data found.');
    });
    
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Urutan ke - {antrian}
        </p>

        <button onClick={() => {
          setAntrian(antrian + 1)
          console.log('foo');
        }}>Antrian Berikutnya</button>
        <p>
          {randomUserDataJSON}
        </p>

      </ header>
    </div>
  );
}