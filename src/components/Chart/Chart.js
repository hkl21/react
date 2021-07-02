import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
	// datapoints is Object below map function return array of only number
	const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
	// Math.max(1,2,3) = return 3
	// Math.max function takes comma separated arguments 
	const totalMaximun = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
					key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
