import reactImg from "./assets/react-logo-xs.png";
import "./App.css";
import { useState } from "react";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there",
  ],
];

function App() {
  const [activeContent, setActiveContent] = useState(0);

  return (
    <>
      <header>
        <img src={reactImg} alt="React-logo" />
        <h1>React.js</h1>
        <p>i.e., using the React library for rendering the UI</p>
      </header>
      <div id="tabs">
        <menu>
          <button
            className={activeContent === 0 ? "active" : ""}
            onClick={() => setActiveContent(0)}
          >
            Why React?
          </button>
          <button
            className={activeContent === 1 ? "active" : ""}
            onClick={() => setActiveContent(1)}
          >
            Core Features
          </button>
          <button
            className={activeContent === 2 ? "active" : ""}
            onClick={() => setActiveContent(2)}
          >
            Related Resource
          </button>
          <button
            className={activeContent === 3 ? "active" : ""}
            onClick={() => setActiveContent(3)}
          >
            React vs JS
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContent].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
