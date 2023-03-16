import * as React from 'react';
import { useState } from 'react';
import { Card } from '@mui/material';
import Txtfield from '../text-field/text-field';
import Btn from '../button/button';
import { Link } from 'react-router-dom';

function Exercise2() {
  const[text, setText] = useState<string>("");
  const[palindromo, setPalindromo] = useState<string>("");

  const esPalindromo = (texto: string) => {
    let textoReversa = texto.split("").reverse().join("")
    let respuesta = texto === textoReversa ? "true" : "false"
    return respuesta
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  const handleButtonClick = () => {
    const palindromo = esPalindromo(text);
    setPalindromo(palindromo)
  }

  return (
    <Card className='container-card' sx={{ maxWidth: 500, minHeight: 500}}>
      <p><strong>Ejercicio 2</strong></p>
      <div className='description'>
        Dado una cadena de cáracteres, devuelve "true" si es palindromo y si no es palindromo devuelve "false".
      </div>
      <div className='input'>
        <p className='input-p'><strong>Input:</strong> text = oso, text = rollo</p>
      </div>
      <div className='output'>
        <p className='input-p'><strong>Output:</strong> true, false</p>
      </div>
      <Txtfield
      type="text"
      id="inputData"
      label="Introduce texto"
      onChange={handleTextChange}
      />
      <Btn
      onClick={handleButtonClick}
      >EJECUTAR</Btn>
      <div>
        <p><strong>El resultado es: </strong></p>{palindromo}
      </div>
      <Link to="/" style={{ textDecoration: 'none' }}><Btn>← Home</Btn></Link>
    </Card>
  );
}

export default Exercise2;
