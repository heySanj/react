import './ChartBar.css'

const ChartBar = (props) => {

    let barFillHeight = "0%"

    // Determine the height of the bar graph element
    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
    }

    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                {/* Styling a React element needs an object to be input */}
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}
 
export default ChartBar;