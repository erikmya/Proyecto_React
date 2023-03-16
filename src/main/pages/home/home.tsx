import * as React from 'react';
import { Card } from '@mui/material';
import Btn from '../../components/button/button';
import './home.css';
import { Link } from 'react-router-dom';

function homepage() {
  return(
    <div className='home'>
      <div className='cards'>
        <Card className='card-style' sx={{ maxWidth: 300, minHeight: 300}}>
          <div className='card-style'>
            <p><strong>Ejercicio 1</strong></p>
            <div className='description'>
              Dado un Array de números enteros y un Score entero, devuelve
              los índices de los dos números de tal manera que sumen al score.
            </div>
            <div className='btnone'>
              <Link to="exercise1" style={{ textDecoration: 'none' }}><Btn>Ir a</Btn></Link>
            </div>
          </div>
        </Card>
        <Card className='card-style' sx={{ maxWidth: 300, minHeight: 300}}>
          <div className='card-style'>
            <p><strong>Ejercicio 2</strong></p>
            <div className='description'>
              Dado una cadena de cáracteres, devuelve "true" si es palindromo y si no es palindromo devuelve "false".
            </div>
            <div className='btntwo'>
              <Link to="exercise2" style={{ textDecoration: 'none' }}><Btn>Ir a</Btn></Link>
            </div>
          </div>
        </Card>
        <Card className='card-style' sx={{ maxWidth: 300, minHeight: 300}}>
          <div className='card-style'>
            <p><strong>Ejercicio 3</strong></p>
            <div className='description'>
              Dado un entero positivo, Por cada digíto siga las indicaciones:
            </div>
            <ul>
              <li>Al primer dígito asignarle un símbolo positivo</li>
              <li>Al otro digito asignarle un símbolo negativo</li>
            </ul>
            <Link to="exercise3" style={{ textDecoration: 'none' }}><Btn>Ir a</Btn></Link>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default homepage;