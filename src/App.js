import React, { useState } from "react";
import "./App.css";

export default () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("John");
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>
            Name:
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </p>
          <p>Age: {age}</p>

          <button onClick={() => setAge(age + 1)}>Increase Age</button>

          <p>
            State: {name}, {age}
          </p>
        </div>
      </header>
    </div>
  );
};
