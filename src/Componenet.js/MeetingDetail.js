import "./MeetingInfo.css";

export default function MeetingInfo() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRoZYXOpvysRQzEb4ypUZoOvgbQJsubuUH9sK7Gkz1Q&usqp=CAU&ec=48600112"
              id="img"
            />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-10 bg-warning divsabha">
              <h3 id="h3sabha">ABOUT GRAM SABHA</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-sm-12 col-md-7 p-3 bg-dark-subtle"
              style={{ margin: "9vh" }}
            >
              <div className="row ">
                <div className="col-12 editBtn">
                  <a href="http://127.0.0.1:5500/AgendaWrite.html" title="Edit">
                    <input type="button" value="&#9998;" title="Edit" />
                  </a>
                </div>
                <div className="col-12">
                  <h2>Meeting Agenda</h2>
                  <p className="agendPara">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis non iure, perferendis ab recusandae itaque esse
                    placeat similique aliquid temporibus aperiam quidem id
                    provident ipsa, porro quisquam consequatur doloremque
                    accusamus sit omnis officia modi quaerat fugit. Officiis
                    laborum, eaque corrupti nisi ullam eum rerum, sint debitis
                    non dicta, soluta laudantium.
                  </p>
                  <h2>Meeting Conclusion</h2>
                  <p className="agendPara">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis non iure, perferendis ab recusandae itaque esse
                    placeat similique aliquid temporibus aperiam quidem id
                    provident ipsa, porro quisquam consequatur doloremque
                    accusamus sit omnis officia modi quaerat fugit. Officiis
                    laborum, eaque corrupti nisi ullam eum rerum, sint debitis
                    non dicta, soluta laudantium.
                  </p>
                </div>
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
