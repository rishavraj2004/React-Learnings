import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>

      <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
      {isOpen && (
        <div className="container">

          <div className="box">
            <p>This is test accordian</p>

          </div>

        </div>
      )}

    </>
  )
}