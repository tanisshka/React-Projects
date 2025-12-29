import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function BMIChart({ bmi }) {
  if (!bmi) return null;

  const data = {
    labels: ["Underweight", "Normal", "Overweight", "Obese"],
    datasets: [
      {
        label: "BMI Ranges",
        data: [18.5, 6.4, 5, 10], // visual segments
        backgroundColor: ["#2563eb", "#16a34a", "#f59e0b", "#dc2626"],
        borderRadius: 6,
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        min: 0,
        max: 40,
        ticks: {
          callback: (value) => value,
        },
        grid: { display: false },
      },
      y: {
        grid: { display: false },
      },
    },
  };

  return (
    <div className="bmi-chart">
      <Bar data={data} options={options} />

      {/* BMI marker */}
      <div className="bmi-marker" style={{ left: `${(bmi / 40) * 100}%` }}>
        ▲
      </div>
      <p className="bmi-chart-info">
        This chart shows how your Body Mass Index (BMI) compares to standard
        weight ranges. The colored sections represent commonly used BMI
        categories, and the marker indicates where your current BMI falls on the
        scale. Being closer to the green range generally suggests a healthier
        weight, while values in other ranges may indicate the need for further
        attention. BMI is a general screening tool and does not directly measure
        body fat or overall fitness.
      </p>
    </div>
  );
}
