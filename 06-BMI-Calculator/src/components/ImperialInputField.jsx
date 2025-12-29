export default function ImperialInputField({
  heightFt,
  heightIn,
  weightLb,
  setHeightFt,
  setHeightIn,
  setWeightLb,
}) {
  return (
    <div className="imperial-inputs">
      <label className="input-group">
        Height (ft)
        <input
          type="number"
          value={heightFt}
          onChange={(e) => setHeightFt(e.target.value)}
        />
      </label>

      <label className="input-group">
        Height (in)
        <input
          type="number"
          value={heightIn}
          onChange={(e) => setHeightIn(e.target.value)}
        />
      </label>

      <label className="input-group">
        Weight (lb)
        <input
          type="number"
          value={weightLb}
          onChange={(e) => setWeightLb(e.target.value)}
        />
      </label>
    </div>
  );
}
