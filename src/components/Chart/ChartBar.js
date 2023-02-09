import './ChartBar.css'

const ChartBar = ({label, value, maxValue}) => {
  let filledHeight = 0
  if(maxValue) {
    filledHeight = Math.round(value / maxValue * 100)
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: filledHeight}}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  )
}

export default ChartBar