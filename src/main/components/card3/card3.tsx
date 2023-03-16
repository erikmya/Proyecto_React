import * as React from 'react';
import { useState } from 'react';
import { Card } from '@mui/material';
import Txtfield from '../text-field/text-field';
import Btn from '../button/button';
import { Link } from 'react-router-dom';


function Exercise3() {
  const[nums, setNums] = useState<number>();
  const[inputValue, setInputValue] = useState<number>();

  const sum = (n: number) => {
    let convertir = n.toString()
    let separar = convertir.split("")
    let a = 0
    for (let i = 0; i < separar.length; i++) {
      if (i%2 === 0){
        console.log("Estamos en el indice 0")
        a += +separar[i]
      } else {
        a -= +separar[i]
      }
    }
    return a
  }

  const handleNumsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numsValue = Number(event.target.value)
    setNums(numsValue);
  }

  const handleButtonClick = () => {
    const inputValue = sum(nums || 0);
    setInputValue(inputValue);
  }

  return (
    <Card className='container-card' sx={{ maxWidth: 500, minHeight: 500}}>
      <p><strong>Ejercicio 3</strong></p>
      <div className='description'>
        Dado un entero positivo, Por cada digíto siga las indicaciones:
      </div>
      <ul>
        <li>Al primer dígito asignarle un símbolo positivo</li>
        <li>Al otro digito asignarle un símbolo negativo</li>
      </ul>
      <div className='input'>
        <p className='input-p'><strong>Input:</strong> n = 521</p>
      </div>
      <div className='output'>
        <p className='input-p'><strong>Output:</strong> 4</p>
      </div>
      <Txtfield
      type="text"
      id="inputData"
      label="Introduce numero"
      onChange={handleNumsChange}
      />
      <Btn
      onClick={handleButtonClick}
      >EJECUTAR</Btn>
      <div>
        <p><strong>El resultado es: </strong></p>{inputValue}
      </div>
      <Link to="/" style={{ textDecoration: 'none' }}><Btn>← Home</Btn></Link>
    </Card>
  )
}

export default Exercise3;