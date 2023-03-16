import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

// function viewsArrays() {
//   let arrayInput = new Array[];
//   let inputsValues = document.getElementsByClassName('datoInput')
//   namesValues = [].map.call(inputsValues, function(dataInput ){
//     arrayInput.push(dataInput.value);
//   });
//   arrayInput.forEach(function(inputsValueData){
//     console.log("El dato es:" + inputsValueData)
//   })
// }

export function prueba() {
  console.log("El boton se a clickeado");
}

export function numeros() {
  const posiciones = []
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
