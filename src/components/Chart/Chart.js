import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart({ dataPoints }) {
	const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
	const totalMaximum = Math.max(...dataPointValues);
  console.log(dataPoints);

	return (
		<div className="chart">
			{dataPoints.map((datapoint) => {
				return <ChartBar
					key={datapoint.label}
					value={datapoint.value}
					maxValue={totalMaximum}
					label={datapoint.label}
				/>;
			})}
		</div>
	);
}
