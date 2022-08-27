import { useState } from "react";
import "./App.scss";
import errorIcon from "./assets/image/icon-error.svg";

function App() {
  const [fnError, setFnError] = useState(false);
  const [lnError, setLnError] = useState(false);
  const [eaError, setEaError] = useState({ err: false, msg: "" });
  const [passError, setPassError] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();

    let formElem = e.target;

    if (formElem[0].value === "") {
      return setFnError(true);
    }
    setFnError(false);
    if (formElem[1].value === "") {
      return setLnError(true);
    }
    setLnError(false);
    if (formElem[2].value === "") {
      return setEaError({ err: true, msg: "Email cannot be empty" });
    } else {
      if (
        formElem[2].value.lastIndexOf("@") < 0 ||
        formElem[2].value.lastIndexOf(".") < 0
      ) {
        return setEaError({
          err: true,
          msg: "Looks like this is not an email",
        });
      }
    }
    setEaError({ err: false, msg: "" });
    if (formElem[3].value === "") {
      return setPassError(true);
    }
    setPassError(false);
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
            <label className={`input-div ${fnError ? "error" : null}`}>
              <input type="text" placeholder="First Name" />{" "}
              {fnError ? <img src={errorIcon} alt="" /> : null}
            </label>
            <sup className="error">
              {fnError ? "First Name cannot be empty" : null}
            </sup>
            <label className={`input-div ${lnError ? "error" : null}`}>
              <input type="text" placeholder="Last Name" />
              {lnError ? <img src={errorIcon} alt="" /> : null}
            </label>
            <sup className="error">
              {lnError ? "Last Name cannot be empty" : null}
            </sup>
            <label className={`input-div ${eaError.err ? "error" : null}`}>
              <input type="" placeholder="Email Address" />
              {eaError.err ? <img src={errorIcon} alt="" /> : null}
            </label>
            <sup className="error">{eaError.err ? eaError.msg : null}</sup>
            <label className={`input-div ${passError ? "error" : null}`}>
              <input type="password" placeholder="Password" />
              {passError ? <img src={errorIcon} alt="" /> : null}
            </label>
            <sup className="error">
              {passError ? "Password cannot be empty" : null}
            </sup>
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
