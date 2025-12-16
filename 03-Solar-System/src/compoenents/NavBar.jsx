import { useState } from "react";
import TabButtons from "./TabButtons";
import Card from "./Card";
import planets from "../data";

export default function NavBar() {
  const [currentText, setCurrentText] = useState("Mercury");
  function handleSelect(text) {
    setCurrentText(text);
  }
  return (
    <>
      <div id="nav-bar">
        <p>Solar System</p>
        <div id="tab-buttons">
          <TabButtons
            onSelect={() => handleSelect("Mercury")}
            isSelected={currentText === "Mercury"}
          >
            Mercury
          </TabButtons>
          <TabButtons onSelect={() => handleSelect("Venus")} >Venus</TabButtons>
          <TabButtons onSelect={() => handleSelect("Earth")} >Earth</TabButtons>
          <TabButtons onSelect={() => handleSelect("Mars")} >Mars</TabButtons>
          <TabButtons onSelect={() => handleSelect("Jupiter")} >Jupiter</TabButtons>
          <TabButtons onSelect={() => handleSelect("Saturn")} >Saturn</TabButtons>
          <TabButtons onSelect={() => handleSelect("Uranus")} >Uranus</TabButtons>
          <TabButtons onSelect={() => handleSelect("Neptune")} >Neptune</TabButtons>
        </div>
      </div>
      <div id="card">
        <Card image={planets[currentText].image} title={planets[currentText].title} description={planets[currentText].description}/>
      </div>
      

    </>
  );
}
