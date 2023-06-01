import logo from "./logo.svg";
import "./acardeon.css";
import React, { useState } from "react";

function App() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  const items = [
    {
      title: "Section 1",
      content: "This is the content of section 1",
    },
    {
      title: "Section 2",
      content: "This is the content of section 2",
    },
    {
      title: "Section 3",
      content: "This is the content of section 3",
    },
  ];
  return (
    <div>
      {items.map((item, index) => (
        <div key={item.title}>
          <button onClick={() => handleClick(index)}>{item.title}</button>
          {index === activeIndex && <p className="content">{item.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default App;
