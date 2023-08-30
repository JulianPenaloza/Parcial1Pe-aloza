import React, { useState } from 'react';
const Nombreyhora = ()=>{
  const [Hora, setHora] = useState();
  const [Nombre, setNombre] = useState('');
  const HORARIO = (event) => {
    setHora(event.target.value);
    if (Hora <= 12){
        setHora ("Buenos dias");
    
      }else if(Hora >12 && Hora < 18){
        setHora ("Buenas tardes") ;
      }else if (Hora >= 18 && Hora < 24){
        setHora ("Buenas noches");
      }
   
  }
  const Nombrere=(event)=>{
    setNombre(event.target.value);
  }
 
  
    return (
      <>
      {}
      <input
        type="text"
        onChange={Nombrere}
      />
        <input
        type="number"
        onChange={HORARIO}
      />
      
      {}
      <label>Hola {Nombre}</label>  
      <label> {Hora}</label>  
          
      </>
    )
          
}

export default Nombreyhora