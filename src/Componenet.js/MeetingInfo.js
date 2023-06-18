import "./MeetingInfo.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MeetingInfo() {
  let navigate = useNavigate();
  let [meetingInfo, setMeetingInfo] = useState([]);

  useEffect(() => {
    onEnter();
  }, []);
  let onEnter = async () => {
    let url = "http://localhost:9000/readMeetingDate";
    let res = await fetch(url);
    let list = await res.json();

    setMeetingInfo(list);
    console.log(list);
  };

  let goTOMeetingDetail = () => {
    navigate("/MeetingDetail");
  };

  return (
    <>
      <div className="container">
        <div className="imgMeeting">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRoZYXOpvysRQzEb4ypUZoOvgbQJsubuUH9sK7Gkz1Q&usqp=CAU&ec=48600112"
            id="img"
          />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-10 bg-warning divsabha">
            <h3 id="h3sabha">ABOUT VIBRANT GRAM SABHA</h3>
            <p id="pinfo">
              Vibrant Gram Sabha portal is an integrated real time online
              monitoring system, where all the major performance parameters of
              the key focus areas at the GP/ Village levels are tracked and
              displayed in the public domain. It facilitates a completely
              automated online workflow configurable Gram Sabha management
              system, substituting paper-based manual process. The primary
              objective of “Vibrant Gram Sabha” portal is to make the Gram Sabha
              meetings more participatory, transparent and vibrant.
            </p>
          </div>
        </div>
        <div className="row align-text-center justify-content-center">
          <div
            className="col-sm-12 col-md-7 p-3 bg-dark-subtle pb-5"
            style={{ margin: "9vh" }}
          >
            <h2 id="texh2">Meeting Schedule</h2>

            <div className="row">
              <div className="col">
                <table style={{ width: "100%" }}>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Date</th>
                    <th>Month</th>
                    <th>Place</th>
                    <th>Agenda & Conclusion</th>
                  </tr>
                  {meetingInfo.map((item) => (
                    <>
                      <tr>
                        <td>{item.SrNo}</td>
                        <td>{item.Date}</td>
                        <td>{item.Month}</td>
                        <td>{item.Location}</td>
                        <td>
                          <input
                            type="button"
                            value="Click Here"
                            class="bg-success text-light"
                            onClick={goTOMeetingDetail}
                          />
                        </td>
                      </tr>
                    </>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-dark justify-content-center p-2">
          <div className="col-12 col-md-6">
            <p className="page">
              Content on this website is owned, updated and managed by the Gram
              Panchayat, Government of India
            </p>
            <p className="page">Designed and Developed by CDAC Mumbai</p>
            <p className="page">Follow Us On</p>
            <div className="row justify-content-center">
              <div className="col-2">
                <img src="twi.jpeg" alt="Twitter" className="follow" />
              </div>
              <div className="col-2">
                <img src="insta.jpeg" alt="Instagram" className="follow" />
              </div>
              <div className="col-2">
                <img src="imdb.jpeg" alt="IMDb" className="follow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
