import { useState } from "react";
import Chart from "react-apexcharts";
import Tax from "./Tax";
function Fund() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["WaterTax", "PropertyTax", "ZilaFund", "StateFund"],
      },
    },
    series: [
      {
        name: "Amount-in-Lakhs",
        data: [30, 40, 45, 50],
      },
    ],
  });

  return (
    <>
      <div className="container-fluid">
        <div className="Funds">
          <h1 style={{ textAlign: "center" }}>Funds For Panchayat</h1>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6">
              <div className="container-fluid">
                <Chart
                  options={state.options}
                  series={state.series}
                  type="bar"
                  width="500"
                />
              </div>
            </div>
          </div>
              </div>
               <div
        className="row bg-dark justify-content-center"
       
      >
        <div className="col-12 col-md-6">
          <p className="page">
            Content on this website is owned, updated, and managed by the Gram
            Panchayat, Government of India.
          </p>
          <p className="page">Designed and Developed by CDAC Mumbai</p>
          <p className="page">Follow Us On</p>
          <div className="row justify-content-center">
            <div className="col-2">
              <img src="twi.jpeg" className="follow" alt="" />
            </div>
            <div className="col-2">
              <img src="insta.jpeg" className="follow" alt="" />
            </div>
            <div className="col-2">
              <img src="imdb.jpeg" className="follow" alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default Fund;
