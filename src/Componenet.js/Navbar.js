
import "./Navbar.css";
import {Link } from "react-router-dom";



export default function Navbar()
{
    return(
        <>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#000000" }}>
        <div className="container-fluid">
          <h1 className="navbar-brand gram-app fs-1" style={{ color: "coral" }}>
            Gram E-App
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "aliceblue" }}
          >
            <span className="navbar-toggler-icon" style={{ backgroundColor: "coral" }}></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/RealHome"}
                style={{ color: "aliceblue", fontWeight: "lighter", fontSize: "large" }}
              >
                Home
              </Link>
              <Link
                className="nav-link"
                to={"/Login"}
                style={{ color: "aliceblue", fontWeight: "lighter", fontSize: "large" }}
              >
                Log Out
              </Link>
              <Link
                className="nav-link"
                to={"/Registration"}
                style={{ color: "aliceblue", fontWeight: "lighter", fontSize: "large" }}
              >
                Registration
              </Link>
              <Link
                className="nav-link"
                to={""}
                style={{
                  color: "aliceblue",
                  fontWeight: "lighter",
                  fontSize: "large",
                  cursor: "pointer",
                }}
              >
                About Us
              </Link>
              <Link
                className="nav-link"
                to={"/contactUs"}
                style={{
                  color: "aliceblue",
                  fontWeight: "lighter",
                  fontSize: "large",
                  cursor: "pointer",
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
        </>
    );
}
