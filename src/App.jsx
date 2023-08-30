import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [inputSeconds, setInputSeconds] = useState(0); // Estado para almacenar los segundos
  const [result, setResult] = useState('');  

  return (
    <>
        <header className="App-header">
        <h1>Conversor de Hora</h1>
        <label htmlFor="inputSeconds">Ingresa la hora en segundos:</label>
        <input
          type="number"
          id="inputSeconds"
          placeholder="Segundos"
          value={inputSeconds}
          onChange={(e) => setInputSeconds(parseInt(e.target.value, 10))}
        />
        <button onClick={handleConvert}>Convertir</button>
        <div id="result">{result}</div>
      </header>   
        
    </>
  )
}

export default App
