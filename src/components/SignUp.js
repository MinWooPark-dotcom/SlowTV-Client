import React from "react";
import { withRouter } from "react-router-dom";
import "./SignUp.css";

const SignUp = ({ history }) => {
  const handleSubmit = () => {
    console.log("handleSubmit");
    history.push("/");
  };

  return (
    <div>
      <form className="sign-up-form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="first-phrase">Join SlowTV</div>
        <p />
        <div className="second-phrase">Create your account</div>
        <p />
        <label htmlFor="user-name">Username *</label>
        <input id="user-name" type="text"></input>
        <label htmlFor="user-id">ID *</label>
        <input id="user-id" type="text"></input>
        <label htmlFor="user-password">Password *</label>
        <input
          id="user-password"
          type="password"
          minLength="7"
          maxLength="15"
          required
        ></input>
        <input type="submit" value="submit" readOnly></input>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
