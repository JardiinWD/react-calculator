import { useState } from "react";

function App() {

  /* Ora sto dicendo che il calcolo sarà strettamente collegato alla function prestabilità di React */
  const [calc, setCalc] = useState("")
  /* Stesso discorso per il risultato */
  const [result, setResult] = useState("")
  /* per operatori */
  const operators = ['/', '*', '+', '-', '.'];
  /* Arrow Function per l'update del calcolo */
  const updateCalc = value => {
    /* Quindi la funzione setCalc chiamata sopra */
    setCalc(calc + value);
  }


  /* Costante per i numeri */
  const createDigits = () => {
    /* Array vuoto */
    const digits = [];
    /* Ciclo per iniettare i dati */
    for (let i = 1; i < 10; i++) {
      /* All'interno dell'array vuoto pusho il button */
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    /* Eseguo il return almeno di Digits */
    return digits;
  }


  return (
    <div className="App">
      {/* Div principale per la calcolatrice */}
      <div className="calculator">
        {/* Display Calcolatrice */}
        <div className="display">
          {/* Se il risultato è 0 allora in parte al result non lasci niente */}
          {result ? <span>(0)</span> : ''}
          {calc || '0'}
        </div>
        {/* Operatori +/-/:/* */}
        <div className="operators">
          {/* Diviso */}
          <button onClick={() => updateCalc('/')}>/</button>
          {/* Moltiplicazione */}
          <button onClick={() => updateCalc('*')}>*</button>
          {/* Addizione */}
          <button onClick={() => updateCalc('+')}>+</button>
          {/* Sottrazione */}
          <button onClick={() => updateCalc('-')}>-</button>
          {/* Delete Button */}
          <button>DEL</button>
        </div>
        {/* Pulsanti Calcolatrice*/}
        <div className="digits">
          {/* Questa è la mia arrow-function con dentro ciclo for */}
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={() => updateCalc('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
