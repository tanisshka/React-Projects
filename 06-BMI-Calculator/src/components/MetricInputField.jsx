export default function MetricInputField({
  heightCm,
  weightKg,
  setHeightCm,
  setWeightKg,
}) {
  return (
    <div className="metric-inputs">
      <label className="input-group">
        Height (cm)
        <input
          type="number"
          value={heightCm}
          onChange={(e) => setHeightCm(e.target.value)}
        />
      </label>

      <label className="input-group">
        Weight (kg)
        <input
          type="number"
          value={weightKg}
          onChange={(e) => setWeightKg(e.target.value)}
        />
      </label>
    </div>
  );
}
