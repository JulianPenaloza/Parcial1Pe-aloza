import React, { useState } from 'react';
const ConvertimientoHoras = ()=>{
  const [numero, setNumero] = useState('');

  const Segundosahoras = (event) => {
    setNumero(event.target.value);
  }
  const horas = Math.floor(numero / 3600);
  const minutos = Math.floor((numero % 3600) / 60);
  const segundos = numero % 60;
    return (
      <>
      {}
      <input
        type="number"
        value={numero}
        onChange={Segundosahoras}
      />
      
      {}
      <label>horas: {horas} , minutos: {minutos}, segundos: {segundos}</label>  
          
      </>
    )
          
}

export default ConvertimientoHoras