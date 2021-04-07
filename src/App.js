import * as React from "react";
import './App.css';

const {useState} = React;

function App() {
  const [antrian, setAntrian] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Urutan ke - {antrian}
        </p>

        <button onClick={() => {
          setAntrian(antrian + 1)
        }}>Antrian Berikutnya</button>
      </header>
    </div>
  );
}

export default App;
