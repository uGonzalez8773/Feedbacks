import { React, useState } from "react";
import { Counter } from "./Components/Contador"

const App = (props) => {
  const [contador, setContador] = useState(0)

  /*setContador(prevContador => {
    console.log(prevContador)
    return prevContador +1
  })
  console.log("click")*/

  const handleClick = () => {
    setContador(contador + 1)
  }

  const resetCounter = () => {
    setContador(0)
  }

  const isEven = contador % 2 === 0
  const mensajePar = isEven ? 'es par' : 'es impar'

  return (
    <div>
      <p>El valir del contador es: </p>
      <Counter number={contador} />
      <p>{mensajePar}</p>
      <button onClick={handleClick}>
        Incrementar Contador
      </button>
      <button onClick={resetCounter}>
        Resetear Contador``
      </button>
    </div>
  );
};

export default App;