import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>
};

const Application = () => {
const initialValue = ""
  const [name, setName] = useState(initialValue);

  const reset = () => {
    console.log("reset");
    setName("")
  };
  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  return (
    <main>
      <input
      type="text"
      value={name}
      onChange={handleInputChange}
      placeholder="Type your name"
    />
      <Button onClick={reset}>Reset</Button>
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
