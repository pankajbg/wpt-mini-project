import "./RealHome.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function RealHome() {
  const navigate = useNavigate();
  let goToSugg = () => {
    navigate("/Suggestion");
  };
  let goToMeetingInfo = () => {
    navigate("/MeetingInfo");
  };
  let goToDonation = () => {
    navigate("/Donation");
  };
  let goToTax = () => {
    navigate("/Tax");
  };
  let goToWaterBill = () => {
    navigate("/WaterBill");
  };
  let goToFund = () => {
    navigate("/Fund");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="pt-1 bg-warning-subtle w-">
          <marquee>
            <h5>
              *** पंचायती राज का है योगदान, गाँव गाँव में चला विकास अभियान
              पंचायती राज ने बदली काया, गाँव गलियारों में विकास कराया ***
            </h5>
          </marquee>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-10">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src=" home5.jfif"
                    className="d-block w-100"
                    style={{ height: "75vh" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="home6.jfif"
                    className="d-block w-100"
                    style={{ height: "75vh" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="home1.png"
                    className="d-block w-100"
                    style={{ height: "75vh" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="Home3.jfif"
                    className="d-block w-100"
                    style={{ height: "75vh" }}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p id="h2feat">Services</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12">
            <div className="row justify-content-center">
              <div className="col-sm-6 col-md-4">
                <Card style={{ width: "16rem" }}>
                  <Card.Img
                    variant="top"
                    src="HomeSuggestion.png"
                    className="card-img-top imgCard"
                  />
                  <Card.Body>
                    <Card.Title>Suggestion Box</Card.Title>
                    <Button variant="primary" onClick={goToSugg}>
                      Click Here
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4">
                <Card style={{ width: "16rem" }}>
                  <Card.Img
                    variant="top"
                    src="HomeGramSabha.jfif"
                    className="card-img-top imgCard"
                  />
                  <Card.Body>
                    <Card.Title>Gram Sabha Info</Card.Title>
                    <Button variant="primary" onClick={goToMeetingInfo}>
                      Click Here
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4">
                <Card style={{ width: "16rem" }}>
                  <Card.Img
                    variant="top"
                    src="HomeDonation.png"
                    className="card-img-top imgCard"
                  />
                  <Card.Body>
                    <Card.Title>Donation Box</Card.Title>
                    <Button variant="primary" onClick={goToDonation}>
                      Click Here
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4">
                <Card style={{ width: "16rem" }}>
                  <Card.Img
                    variant="top"
                    src="HomeFund.jfif"
                    className="card-img-top imgCard"
                  />
                  <Card.Body>
                    <Card.Title>Funds</Card.Title>
                    <Button variant="primary" onClick={goToFund}>
                      Click Here
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4">
                <Card style={{ width: "16rem" }}>
                  <Card.Img
                    variant="top"
                    src="HomeTax.jfif"
                    className="card-img-top imgCard"
                  />
                  <Card.Body>
                    <Card.Title>Property Tax</Card.Title>
                    <Button variant="primary" onClick={goToTax}>
                      Click Here
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4">
                <Card style={{ width: "16rem" }}>
                  <Card.Img
                    variant="top"
                    src="HomeWater.jfif"
                    className="card-img-top imgCard"
                  />
                  <Card.Body>
                    <Card.Title>Water Bill</Card.Title>
                    <Button variant="primary" onClick={goToWaterBill}>
                      Click Here
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-dark justify-content-center p-2">
          <div className="col-sm-12 col-md-4 pt-2">
            <h2 className="text-light">Our Services</h2>
            <div className="row">
              <div className="col-6">
                <ul className="text-light">
                  <li>Property Tax Pay</li>
                  <li>Water Bill Pay</li>
                  <li>Donation Box</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="text-light">
                  <li>Fund</li>
                  <li>Gram Sabha Info</li>
                  <li>Suggestion Box</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-8 pt-2">
            <p className="page">
              Content on this website is owned, updated and managed by the Gram
              Panchayat, Government of India
            </p>
            <p className="page">Designed and Developed by CDAC Mumbai</p>
            <p className="page">Connect with us</p>
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
            <div>
              <p className="text-secondary rights">
                ©2022 The Gram E-App. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
