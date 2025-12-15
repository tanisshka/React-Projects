import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButtons from "./TabButtons";

export default function Examples() {
  const [currentText, setSelectedText] = useState("");
  function selectHandler(selectedText) {
    setSelectedText(selectedText);
  }

  let tabContent = <p>Please select a button</p>;

  if (currentText) {
    tabContent = (
      <div id="tab-content">
        <h2>{EXAMPLES[currentText].title}</h2>
        <p>{EXAMPLES[currentText].description}</p>
        <pre>
          <code>{EXAMPLES[currentText].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
      <h1>Examples</h1>
      <menu>
        <TabButtons
          isSelected={currentText === "components"}
          onSelect={() => selectHandler("components")}
        >
          Components
        </TabButtons>
        <TabButtons
          isSelected={currentText === "jsx"}
          onSelect={() => selectHandler("jsx")}
        >
          JSX
        </TabButtons>
        <TabButtons
          isSelected={currentText === "props"}
          onSelect={() => selectHandler("props")}
        >
          Props
        </TabButtons>
        <TabButtons
          isSelected={currentText === "state"}
          onSelect={() => selectHandler("state")}
        >
          State
        </TabButtons>
      </menu>
      {tabContent}
    </section>
  );
}
