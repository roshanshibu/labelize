import { useEffect, useState } from "react";
import "./auth.css";
import Loading from "assets/loading.svg";
import { useNavigate } from "react-router-dom";

const ErrorMessage = (props) => {
  return <p className="failedMessage">{props.message}</p>;
};

const Authentication = () => {
  const [loginOrSignup, setloginOrSignup] = useState(true);
  const toggleLoginSignup = () => {
    setloginOrSignup((currentState) => {
      return !currentState;
    });
  };

  const [firstname, setFirstname] = useState();
  const onFirstNameChange = (e) => {
    setFirstname(e.target.value);
  };
  const [lastname, setLastname] = useState();
  const onLastNameChange = (e) => {
    setLastname(e.target.value);
  };

  const [email, setEmail] = useState();
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState();
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [showPassword, setShowPassword] = useState(false);
  const onSetPwdChange = (e) => {
    setShowPassword(e.target.checked);
  };
  const [isFailed, setIsFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); //don't refresh
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (email === "user@mail.com" && password === "password") {
        // if authenticated, simulate storing a JWT and go to dash page
        localStorage.setItem("LabelizeMockJWT", "true");
        navigate("/");
      } else {
        setIsFailed(true);
      }
    }, 2000);
  };

  return (
    <div className="authContainer">
      <p className="authTitle">{loginOrSignup ? "Login" : "Signup"}</p>
      {loginOrSignup && isFailed ? (
        <ErrorMessage message="Check your email and password" />
      ) : (
        <></>
      )}
      <form onSubmit={handleSubmit}>
        {loginOrSignup ? (
          ""
        ) : (
          <>
            <input
              type="text"
              id="firstName"
              className="authField"
              placeholder="Firstname"
              onChange={onFirstNameChange}
              required
            />
            <input
              type="text"
              id="lastName"
              className="authField"
              placeholder="Lastname"
              onChange={onLastNameChange}
              required
            />
          </>
        )}
        <input
          type="email"
          id="usrEmail"
          className="authField"
          placeholder="Email"
          onChange={onEmailChange}
          required
        />
        <input
          type={showPassword ? "text" : "password"}
          id="usrPwd"
          className="authField"
          placeholder="Password"
          onChange={onPasswordChange}
          required
        />
        <div className="showPasswordContainer">
          <input type="checkbox" id="showPwd" onChange={onSetPwdChange} />
          <label htmlFor="showPwd">Show password</label>
        </div>
        <button type="submit" className="blueButton authSubmitButton">
          {isLoading ? (
            <img src={Loading} alt="Loading" className="loadingIcon" />
          ) : (
            <p>Continue</p>
          )}
        </button>
      </form>
      <p className="signUp">
        {loginOrSignup ? (
          <>
            New to Labelize?{" "}
            <span className="switchPageLink" onClick={toggleLoginSignup}>
              Sign up
            </span>
          </>
        ) : (
          <>
            Go to{" "}
            <span className="switchPageLink" onClick={toggleLoginSignup}>
              Login
            </span>
          </>
        )}
      </p>
      <div id="signInDiv"></div>
    </div>
  );
};

export default Authentication;
