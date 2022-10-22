import { React, useState } from "react";
import { NoFeeds, ListOfClicks } from "./Components/";

const INITIAL_STATE = {
    good: 0,
    bad: 0,
    mensaje: 'Mensaje en el estado'
}

const App = () => {

  const [counters, setCounters] = useState(INITIAL_STATE) 
  const [clicks, setClicks] = useState([])

  const handleGood = () => {
    const goodState = {
        ...counters,
        good: counters.good + 1,
    }
    setCounters(goodState)
    setClicks((prevClicks) => [...prevClicks, "Good"])
  }

  const handleBad = () => {
    setCounters({
        ...counters,
        bad: counters.bad + 1,
    })
    setClicks((prevClicks) => [...prevClicks, "Bads"])
  }

  const handleReset = () => {
    setCounters(INITIAL_STATE)
    setClicks([])
  }
  
  const render = (clicks) => {
    console.log(clicks)
    clicks?.length === 0
      ? <NoFeeds />
      : <ListOfClicks clicks={clicks} counters={counters} />
  }
  
  return (
    <div>
      <p>El valor de los feedbacks buenos es: {counters.good} </p>
      <p>El valor de los feedbacks malos es: {counters.bad} </p>
      <button onClick={handleGood}>Feedback buenos</button>
      <button onClick={handleBad}>Feedback malos</button>
      <button onClick={handleReset}>Resetar feedbacks</button>       
      {render()}
    </div>
  );
};

export default App;