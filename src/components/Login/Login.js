import { React, useState } from "react";
import LofinForm from "./LoginForm";

const Login = () => {
  const userInfo = {
    userEmail: "example@mail.com",
    userPassword: "Secret123",
  };

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const emailErrorHandler = () => {
    if (
      enteredEmail.trim().length === 0 ||
      enteredEmail !== userInfo.userEmail
    ) {
      setEmailError("Invalid Mail");
    } else {
      setEmailError("");
    }
  };

  const passwordErrorHandler = () => {
    if (
      enteredPassword.trim().length < 8 ||
      enteredPassword !== userInfo.userPassword
    ) {
      setPasswordError("Invalid Password");
    } else {
      setPasswordError("");
    }
  };

  const addUserHandler = (event) => {
    console.log(enteredEmail, enteredPassword);
    emailErrorHandler();
    passwordErrorHandler();
    event.preventDefault();
  };

  return (
    <LofinForm
      onSubmit={addUserHandler}
      onEmailEdit={emailChangeHandler}
      onPasswordEdit={passwordChangeHandler}
      showEmailError={emailError}
      showPasswordError={passwordError}
    />
  );
};

export default Login;
