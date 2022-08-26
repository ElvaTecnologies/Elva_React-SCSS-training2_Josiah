import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* <div className="flexbox"> */}
      <div className="text-div">text</div>
      <div className="form-div">
        <div className="top-card">
          Try it free 7 days then $20/mo. thereafter
        </div>
        <div className="form-card">
          <div className="input-div">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="input-div">
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="input-div">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-div">
            <input type="password" placeholder="Password" />
          </div>
          <button>Claim your free trial </button>
          <sup>
            {" "}
            By clicking the button, you are agreeing to our{" "}
            <a href="#">Terms and Services</a>
          </sup>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
