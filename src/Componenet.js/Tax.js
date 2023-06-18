import { useRef, useState } from "react";
import "./Tax.css";
import { useNavigate } from "react-router-dom";

export default function Tax() {
  let navigate = useNavigate();
  let formRef = useRef();
  let [taxInfo, setTaxInfo] = useState({
    fname: "",
    lname: "",
    hNumber: "",
    mobile: "",
    amount:"",
  });
  let [dis, setDis] = useState(false);
  let [house, setHouse] = useState(false);

  let changeFname = (e) => {
    let newFname = { ...taxInfo, fname: e.target.value };
    setTaxInfo(newFname);
  };
  let changeLname = (e) => {
    let newLname = { ...taxInfo, lname: e.target.value };
    setTaxInfo(newLname);
  };
  let changeHouseNumber = (e) => {
    let newHouseNumber = { ...taxInfo, hNumber: e.target.value };
    setTaxInfo(newHouseNumber);
  };
  let changeMobileNumber = (e) => {
    let newMobileNumber = { ...taxInfo, mobile: e.target.value };
    setTaxInfo(newMobileNumber);
  };
  let changeAmount = (e) => {
    let newAmount = { ...taxInfo, amount: e.target.value };
    setTaxInfo(newAmount);
  };

  let onPay = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      let url = `http://localhost:9000/addTaxUser?fname=${taxInfo.fname}&lname=${taxInfo.lname}&hNumber=${taxInfo.hNumber}&mobile=${taxInfo.mobile}`;
      let res = await fetch(url);
      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }
      alert("Done");

      let newTaxInfo = { fname: "", lname: "", hNumber: "", mobile: "" };
      setTaxInfo(newTaxInfo);

      setDis(true);
      setTimeout(() => setDis(false), 2000);

      formRef.current.classList.remove("was-validated");
      navigate("/");
    } catch (err) {
      setHouse(true);
      setTimeout(() => setHouse(false), 2000);
      let newTaxInfo = { fname: "", lname: "", hNumber: "", mobile: "" };
      setTaxInfo(newTaxInfo);
      alert(err.message);
    }
    navigate("/RealHome");
  };
  return (
    <>
      <div className="container-fluid">
        <div class="row align-text-center justify-content-center">
          <div
            class="col-sm-12 col-md-4 p-3 bg-light"
            style={{ margin: "9vh" }}
          >
            <h2 id="texh2">Gram House Tax</h2>
            <form ref={formRef} className="needs-validation" novalidation>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                placeholder="eg. Mohit"
                required
                id="fname"
                value={taxInfo.fname}
                onChange={changeFname}
                class="form-control border-warning my-2"
              />
              <span id="ffname" class="text-danger"></span>
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                placeholder="eg. Raut"
                required
                id="lname"
                onChange={changeLname}
                value={taxInfo.lname}
                class="form-control  my-2 border-warning"
              />
              <span id="llname" class="text-danger"></span>
              <label htmlFor="lname">House Number</label>
              <input
                type="text"
                placeholder="eg. 1001"
                required
                id="email"
                value={taxInfo.hNumber}
                onChange={changeHouseNumber}
                minLength={4}
                className="form-control my-2 border-warning"
              />

              <span id="eemail" class="text-danger"></span>
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                placeholder="eg. 9561227225 "
                required
                id="mobile"
                value={taxInfo.mobile}
                onChange={changeMobileNumber}
                pattern="^(?!91)[0-9]{10}$"
                class="form-control my-2 border-warning"
              />
              <span id="mmobile" class="text-danger"></span>
              <label htmlFor="amount">Amount</label>
                <input
                  type="text"
                  placeholder="Donation Amount"
                  min={1}
                  id="donationamount"
                  className="form-control my-2 mb-2 border-warning"
                  value={taxInfo.amount}
                  onChange={changeAmount}
                  required
                  pattern="[0-9]+([.][0-9]{1,2})?"
                  
                />
            </form>
            <div>
              <hr />
              <h5>Tax Detail</h5>
              <ul>
                <li>Name: Mohit Raut</li>
                <li>Property Number : Mohit Raut</li>
                <li>Year : Mohit Raut</li>
                <li>Amount : Mohit Raut</li>
                <li className="text-danger">Due Date : Mohit Raut</li>
              </ul>
            </div>
            <div class="btndiv">
              <input
                type="button"
                value="Pay"
                onclick="Check()"
                class="btn btn-primary mt-2 w-50 fs-5"
                onClick={onPay}
              />
            </div>
            <div class="btndiv">
              {dis && (
                <h5 className="text-success">*** Pay Successfully ***</h5>
              )}
              {house && (
                <h5 className="text-success">*** Tax Is Already Paid ***</h5>
              )}
            </div>
            <h6 id="h6hed">
              &#128591;Thank you for Digital Payment and supporting Digital
              India as well as creating Digital Record at Gram Panchayat level.
            </h6>
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
