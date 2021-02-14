import React, {useEffect , useState } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';


const dta = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };

function HashLine (){
    const [chart, setChart] = useState(0);
    const [data, setData] = useState({})
      var chartReference = React.createRef();
  
      useEffect(() => {
          setData(dta)
      setChart(chartReference); // returns a Chart.js instance reference
      },[])


      return (
      <Line ref={chartReference} data={data}  />
      )
      
  }

export default HashLine