import { useState } from "react";

export default function App() {
  // state for counting
  const [count, setCount] = useState(0);


  // event handler
  function handleNext() {
    setCount(count + 1)
  }

  function handlePrevious() {
    if (count > 0) setCount(count - 1)
  }

  return (
    <div className="container">

      <div className="box">

        <button onClick={handlePrevious}>Previous</button>
        <p>Count {count} </p>
        <button onClick={handleNext}>Next</button>
      </div>

    </div>
  )


}