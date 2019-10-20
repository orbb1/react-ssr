import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <main>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Toggle
        </button>
        {isOpen && <p>Is Open</p>}
      </main>
    </div>
  );
}

export default App;
