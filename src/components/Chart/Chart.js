import './Chart.css'
import ChartBar from "./ChartBar";

const Chart = ({dataPoints}) => {
  const max = Math.max(...dataPoints.map(dataPoint => dataPoint.value))
  return (
    <div className="chart">
      {dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} label={dataPoint.label} maxValue={max} />)}
    </div>
  )
}

export default Chart