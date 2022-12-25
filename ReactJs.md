RoadMap = https://roadmap.sh/react <br>

study-Website https://reactjs.org/tutorial/tutorial.html

book https://raw.githubusercontent.com/ValentineFernandes/programming-books-or-references/main/React/ReactJS%20Notes.pdf


import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        t
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
