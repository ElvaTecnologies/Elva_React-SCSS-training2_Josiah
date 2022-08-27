import "./App.scss";
import errorIcon from "./assets/image/icon-error.svg";

function App() {
  const handelSubmit = (e) => {
    e.preventDefault();

    let formElem = e.target;

    if (formElem[0].value === "") {
      // formElem[0].style.border = "solid red 1px";
      // formElem[0].parentElement.childNodes[1];
      // setError(formElem[0]);
      return console.log("");
    }
    if (formElem[1].value === "") {
      return console.log("");
    }
    if (formElem[2].value === "") {
      return console.log("");
    }
    if (formElem[3].value === "") {
      return console.log("");
    }
  };
  return (
    <div className="App">
      {/* <div className="flexbox"> */}
      <div className="text-div">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="form-div">
        <div className="top-card">
          Try it free 7 days then $20/mo. thereafter
        </div>
        <div className="form-card">
          <form onSubmit={(e) => handelSubmit(e)}>
            <label className="input-div">
              <input type="text" placeholder="First Name" />{" "}
              <img src={errorIcon} alt="" />
            </label>
            <sup className="error">First Name cannot be empty</sup>
            <label className="input-div">
              <input type="text" placeholder="Last Name" />
              <img src={errorIcon} alt="" />
            </label>
            <sup className="error">Last Name cannot be empty</sup>
            <label className="input-div">
              <input type="email" placeholder="Email Address" />
              <img src={errorIcon} alt="" />
            </label>
            <sup className="error">Email cannot be empty</sup>
            <label className="input-div">
              <input type="password" placeholder="Password" />
              <img src={errorIcon} alt="" />
            </label>
            <sup className="error">Password cannot be empty</sup>
            <button>Claim your free trial </button>
            <sup>
              By clicking the button, you are agreeing to our
              <a href="#">Terms and Services</a>
            </sup>
          </form>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
