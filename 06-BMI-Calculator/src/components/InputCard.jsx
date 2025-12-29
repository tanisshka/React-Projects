import { useState } from "react";
import MetricInputField from "./MetricInputField";
import ImperialInputField from "./ImperialInputField";
import Result from "./Result";

export default function InputCard() {
  const [unit, setUnit] = useState("metric");
  const [bmi, setBmi] = useState(null);

  // metric
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");

  // imperial
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weightLb, setWeightLb] = useState("");

  function calculateBMI() {
    let heightM;
    let weightKgFinal;

    if (unit === "metric") {
      if (!heightCm || !weightKg || heightCm <= 0) return;
      heightM = heightCm / 100;
      weightKgFinal = weightKg;
    }

    if (unit === "imperial") {
      if (!heightFt || !heightIn || !weightLb) return;
      const totalInches = Number(heightFt) * 12 + Number(heightIn);
      heightM = (totalInches * 2.54) / 100;
      weightKgFinal = weightLb * 0.453592;
    }

    const bmiValue = weightKgFinal / (heightM * heightM);
    setBmi(bmiValue.toFixed(2));
  }

  return (
    <div className="input-card">
      <div className="unit-selector">
        <p>Units:</p>

        <label className="radio-option">
          <input
            type="radio"
            name="unit"
            checked={unit === "metric"}
            onChange={() => setUnit("metric")}
          />
          Metric (cm/kg)
        </label>

        <label className="radio-option">
          <input
            type="radio"
            name="unit"
            checked={unit === "imperial"}
            onChange={() => setUnit("imperial")}
          />
          Imperial (ft/in/lb)
        </label>
      </div>

      {unit === "metric" && (
        <MetricInputField
          heightCm={heightCm}
          weightKg={weightKg}
          setHeightCm={setHeightCm}
          setWeightKg={setWeightKg}
        />
      )}

      {unit === "imperial" && (
        <ImperialInputField
          heightFt={heightFt}
          heightIn={heightIn}
          weightLb={weightLb}
          setHeightFt={setHeightFt}
          setHeightIn={setHeightIn}
          setWeightLb={setWeightLb}
        />
      )}

      <button className="calculate-btn" onClick={calculateBMI}>
        Calculate
      </button>
      {bmi && <Result bmiValue={bmi}/>}
    </div>
  );
}
