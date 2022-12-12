import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

    // Return an array of number values from the dataPoints array of objects
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)

    // Find the maxmimum value from the above array of values
    const totalMaximum = Math.max(...dataPointValues)

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
