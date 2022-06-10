import './App.css';
import Boton from './components/Boton'
import BotonClear from './components/BotonClear';
import Display from './components/Display';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  // Funciones para setear los valores y concatenarlos
  const [input, setInput] = useState('');
  const agregarInput = val => {
    setInput(input + val);
  };

  // Función calcular resultado con libreria Mathjs
  const calcularResultado = () => {
    if (input) { //No se coloca condición porque las cadenas de string vacias son falsas por si solas
      setInput(evaluate(input));
    }
  };


  return (
    <div className='App'>
      <h1 className='nombre'>Santiago Hollmann </h1>
      <div className='contenedor-calculadora'>
        <Display input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>

        </div>
      </div>
    </div>
  );
}

export default App;
