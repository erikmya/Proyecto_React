import React from 'react';
import {Routes, Route} from 'react-router-dom';
import laleo from './logo-laleo.svg'
import './App.css';
import Home from './pages/home/home'
import ExercisePage1 from './pages/exercise1/exercise1';
import ExercisePage2 from './pages/exercise2/exercise2';
import ExercisePage3 from './pages/exercise3/exercise3';


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={laleo} className="App-logo" alt="logo" />
          <Routes>
            <Route path='/' element={ <Home/>} />
            <Route path='exercise1' element={ <ExercisePage1/>} />
            <Route path='exercise2' element={ <ExercisePage2/>} />
            <Route path='exercise3' element={ <ExercisePage3/>} />
          </Routes>
          <div className='result'></div>
      </header>
    </div>
  );
}

export default App;
