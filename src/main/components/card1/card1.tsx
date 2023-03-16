import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import Txtfield from '../text-field/text-field';
import Btn from '../button/button';
import './card1.css';
import { Link } from 'react-router-dom';

 function Exercise1() {
  const [nums, setNums] = useState<number[]>([]);
  const [score, setScore] = useState<number>();
  const [inputValue, setInputValue] = useState<number[]>([]);

  const orderNums = (array: number[], target: number) => {
    const positions = []
    for (let i = 0; i < array.length; i++) {
      for (let a = i + 1; a < array.length; a++){
        if (array[i] + array[a] === target) {
          positions.push(i)
          positions.push(a)
        }
      }
    }
    return positions
  }

  const handleArrayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nums = event.target.value
    .split(',')
    .map((num)=> Number(num.trim()))
    setNums(nums);
  }

  const handleTargetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const scoreValue = Number(event.target.value)
    setScore(scoreValue);
  }
  
  const handleButtonClick = () => {
    if (nums && score) {
    const inputValue = orderNums(nums, score);
    setInputValue(inputValue)
    }
  }

  return (
    <Card className='container-card' sx={{ maxWidth: 500, minHeight: 500}}>
      <p><strong>Ejercicio 1</strong></p>
      <div className='description'>
        Dado un Array de números enteros y un Score entero, devuelve
        los índices de los dos números de tal manera que sumen al score.
      </div>
      <div className='input'>
        <p className='input-p'><strong>Input:</strong> nums = [2,7,11,15], score = 9</p>
      </div>
      <div className='output'>
        <p className='input-p'><strong>Output:</strong> [0,1]</p>
      </div>
      <Txtfield
      type="text"
      id="inputData"
      value={nums.join(',')}
      label="Introduce nums"
      onChange={handleArrayChange}
      />
      <Txtfield
      id="datoInput"
      label="Introduce score"
      onChange={handleTargetChange}
      ></Txtfield>
      <Btn
      onClick={handleButtonClick}
      >EJECUTAR</Btn>
      <div>
        <p><strong>El Array es: </strong>{inputValue.join(',')}</p>
      </div>
      <Link to="/" style={{ textDecoration: 'none' }}><Btn>← Home</Btn></Link>
    </Card>
  );
}

export default Exercise1;