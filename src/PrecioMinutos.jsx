import React, { useState } from 'react';
const PrecioMinutos = ()=>{
  const [numero, setNumero] = useState('');
  const [PrecioTotal, setPrecioTotal] = useState('');
  const Minutos = (event) => {
    setNumero(event.target.value);
    if (numero <= 3){
        setPrecioTotal (100);
    
      }else{
        setPrecioTotal (((numero-3)*50)+100) ;
      }
  }
 
  
    return (
      <>
      {}
      <input
        type="number"
        value={numero}
        onChange={Minutos}
      />
      
      {}
      <label>Precio: {PrecioTotal}</label>  
          
      </>
    )
          
}

export default PrecioMinutos