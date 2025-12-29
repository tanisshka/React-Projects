export default function Result({ bmiValue }) {
  if (!bmiValue) return null;

  let range = "";
  let rangeClass = "";

  if (bmiValue < 18.5) {
    range = "UNDERWEIGHT";
    rangeClass = "underweight";
  } else if (bmiValue < 25) {
    range = "NORMAL";
    rangeClass = "normal";
  } else if (bmiValue < 30) {
    range = "OVERWEIGHT";
    rangeClass = "overweight";
  } else {
    range = "OBESE";
    rangeClass = "obese";
  }

  return (
    <div className="result-card">
      <h3>Your BMI</h3>
      <p className="bmi-value">{bmiValue}</p>
      <p className={`bmi-range ${rangeClass}`}>{range}</p>
    </div>
  );
}
