import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ToxicGraph extends Component {
  constructor() {
    super();
    this.state = {
      toxic: 0,
      clean: 0
    };
  }

  componentWillReceiveProps() {
    this.setState({
      toxic: this.props.toxic,
      clean: this.props.clean
    });
  }

  render() {
    const options = {
      title: {
        text: "Basic Column Chart"
      },
      data: [
        {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: "column",
          dataPoints: [
            { label: "Clean", y: this.state.clean },
            { label: "Toxic", y: this.state.toxic }
          ]
        }
      ]
    };
    return (
      <div>
        <CanvasJSChart
          options={options} /* onRef={ref => (this.chart = ref)} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default ToxicGraph;
