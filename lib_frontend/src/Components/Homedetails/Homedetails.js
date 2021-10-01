import React from "react";
import "./Homedetails.css";
import logo from "./logog.png"; // with import
import lib from "./lib.svg"; // with import
import printer from "./print.svg"; // with import
import Button from "react-bootstrap/Button";
import logowebx from "./bookdesk.svg"; // with import
import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";
import OnImagesLoaded from "react-on-images-loaded";
import Typist from "react-typist";

class Homedetails extends React.Component {
  constructor(props) {
    super(props);
    this.props.showLoader();
    stateChange = stateChange.bind(this);
    this.state = {
      showImages: false,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <OnImagesLoaded
        onLoaded={() => {
          this.props.hideLoader();
          this.setState({ showImages: true });
        }}
        onTimeout={() => {
          this.setState({ showImages: true });
          this.props.hideLoader();
        }}
        timeout={7000}
      >
        <div
          className="pogcont"
          style={{ opacity: this.state.showImages ? 1 : 0 }}
        >
          <div className="show-mobile"></div>

          <div className="hide-mobile">
            <div className="imgshow">
              <div
                style={{
                  backgroundImage: "url(" + logowebx + ")",
                  backgroundPosition: "bottom",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  marginTop: "20vh",
                  marginRight: "-2vw",
                }}
              ></div>
              <div className="infotxt">
                <a>
                  <Typist avgTypingDelay={150}>Hello there!</Typist>
                </a>
                <br />
                <Fade delay={2500}>
                  Welcome to your one stop location for accessing library
                  resources at IIT Dharwad.
                </Fade>
                <br />
              </div>
            </div>
            <div className="infcard">
              <div className="infcardchild">
                <img src={lib} className="homepgimg filt"></img>
                <Fade top>
                  <h2>Library Resources</h2>
                </Fade>
                <ul>
                  <Fade left>
                    {" "}
                    <li>Check for availability of books from our database.</li>
                  </Fade>
                  <Fade left>
                    {" "}
                    <li>Plan visits to the library accordingly.</li>
                  </Fade>
                  <Fade left>
                    {" "}
                    <li>
                      Get E-mail notifications about pending book returns.
                    </li>
                  </Fade>
                  <Fade left>
                    {" "}
                    <li>
                      Request re-issue of books anytime, anywhere, with a tap.
                    </li>
                  </Fade>
                </ul>
                <Fade>
                  {" "}
                  <Button
                    className="Button"
                    onClick={() => this.props.history.push("/")}
                  >
                    Take me there!
                  </Button>
                </Fade>
              </div>
              <div className="infcardchild">
                <img src={printer} className="homepgimg filt"></img>
                <Fade top>
                  <h2>Printing Facilities</h2>
                </Fade>
                <ul>
                  <Fade right>
                    {" "}
                    <li>
                      Upload the documents to be printed on the portal itself.
                    </li>
                  </Fade>
                  <Fade right>
                    {" "}
                    <li>
                      Specify any special instructions for printing if required.
                    </li>
                  </Fade>
                  <Fade right>
                    {" "}
                    <li>
                      Collect printed documents when email notification is
                      recieved.
                    </li>
                  </Fade>
                  <Fade right>
                    {" "}
                    <li>Pay manually on a monthly basis.</li>
                  </Fade>
                </ul>
                <Fade>
                  <Button
                    className="Button"
                    onClick={() => this.props.history.push("/")}
                  >
                    Take me there!
                  </Button>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </OnImagesLoaded>
    );
  }
}
function stateChange() {
  setTimeout(function () {}, 5000);
}
export default withRouter(Homedetails);
