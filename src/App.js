import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js"; // this package is imported using the command "npm install values.js --save"

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10); // Above and below the base color should be 100%/10. I can add a property for the user to edit.
      setError(false);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="e.g. #e5ee12"
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
