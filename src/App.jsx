import { useState } from "react";
import "./App.scss";
import errorIcon from "./assets/image/icon-error.svg";

function App() {
  const [fnError, setFnError] = useState({ err: false, msg: "" });
  const [lnError, setLnError] = useState({ err: false, msg: "" });
  const [eaError, setEaError] = useState({ err: false, msg: "" });
  const [passError, setPassError] = useState({ err: false, msg: "" });
  const handelSubmit = (e) => {
    e.preventDefault();

    let formElem = e.target;

    if (formElem[0].value === "") {
      return setFnError({ err: true, msg: "First Name cannot be empty" });
    }
    setFnError({ err: false, msg: "" });
    if (formElem[1].value === "") {
      return setLnError({ err: true, msg: "Last Name cannot be empty" });
    }
    setLnError({ err: false, msg: "" });
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
      return setPassError({ err: true, msg: "Password cannot be empty" });
    }
    setPassError({ err: false, msg: "" });
  };
  return (
    <div className="App">
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
            <label className={`input-div ${fnError.err ? "error" : null}`}>
              <input type="text" placeholder="First Name" />{" "}
              {fnError.err ? <img src={errorIcon} alt="" /> : null}
            </label>
            <sup className="error">{fnError.err ? fnError.msg : null}</sup>
            <label className={`input-div ${lnError.err ? "error" : null}`}>
              <input type="text" placeholder="Last Name" />
              {lnError.err ? <img src={errorIcon} alt="" /> : null}
            </label>
            <sup className="error">{lnError.err ? lnError.msg : null}</sup>
            <label className={`input-div ${eaError.err ? "error" : null}`}>
              <input type="" placeholder="Email Address" />
              {eaError.err ? <img src={errorIcon} alt="" /> : null}
            </label>
            <sup className="error">{eaError.err ? eaError.msg : null}</sup>
            <label className={`input-div ${passError.err ? "error" : null}`}>
              <input type="password" placeholder="Password" />
              {passError.err ? <img src={errorIcon} alt="" /> : null}
            </label>
            <sup className="error">{passError.err ? passError.msg : null}</sup>
            <button>Claim your free trial </button>
            <sup>
              By clicking the button, you are agreeing to our
              <a href="#">Terms and Services</a>
            </sup>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
