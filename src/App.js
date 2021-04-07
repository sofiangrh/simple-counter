import * as React from "react";
import axios from "axios";
import './App.css';

const {useState} = React;

const fecthData = () => {
  return axios.get('https://randomuser.me/api')
  .then(res => {
    // handle success
    console.log(res);
    return res;
  })
  .catch(err => {
    // handle error
    console.error(err);
  });
}

export  default function App() {
  const [antrian, setAntrian] = useState(0);

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
        <button onClick={() => {
          fecthData();
        }}>Fetch Data</button>
      </header>
    </div>
  );
}