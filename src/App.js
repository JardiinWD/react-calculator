
function App() {

  /* Costante per i numeri */
  const createDigits = () => {
    /* Array vuoto */
    const digits = [];
    /* Ciclo per iniettare i dati */
    for (let i = 1; i < 10; i++) {
      /* All'interno dell'array vuoto pusho il button */
      digits.push(
        <button key={i}>{i}</button>
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
        <div className="display"></div>
        {/* Operatori +/-/:/* */}
        <div className="operators">
          {/* Diviso */}
          <button>/</button>
          {/* Moltiplicazione */}
          <button>*</button>
          {/* Addizione */}
          <button>+</button>
          {/* Sottrazione */}
          <button>-</button>
          {/* Delete Button */}
          <button>DEL</button>
        </div>
        {/* Pulsanti Calcolatrice*/}
        <div className="digits">
          {/* Questa è la mia arrow-function con dentro ciclo for */}
          {createDigits()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
