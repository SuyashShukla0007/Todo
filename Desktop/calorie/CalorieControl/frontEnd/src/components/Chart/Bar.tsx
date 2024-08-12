import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line} from "react-chartjs-2";

import sourceData from "./data/sourceData.json";


defaults.responsive = true;

const BarChart=()=>{
  
return(

  <Line 
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: sourceData.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Cost",
                data: sourceData.map((data) => data.cost),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
)
}

export default BarChart