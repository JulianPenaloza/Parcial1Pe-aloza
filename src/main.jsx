import React from 'react'
import ReactDOM from 'react-dom/client'
import ConvertimientoHoras from './ConvertimientoHoras'
import PrecioMinutos from './PrecioMinutos'
import Nombreyhora from './Nombreyhora'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Convertir Horas</h1>
    <ConvertimientoHoras/>
    <h1>Precio de minutos</h1>
    <br></br>
    <PrecioMinutos/>
    <h1>Nombre y hora</h1>
    <br></br>
    <Nombreyhora/>
  </React.StrictMode>,
)
