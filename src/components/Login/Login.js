import { React, useState, useContext } from "react";
import Context from "../../components/Context";
import LofinForm from "./LoginForm";

const Login = () => {
  const userData = useContext(Context);

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
    if (enteredEmail.trim().length === 0) {
      setEmailError("Invalid Mail");
    } else if (enteredEmail !== userData.email) {
      setEmailError("User not found");
    } else if (enteredEmail === userData.email) {
      setEmailError("Welcome");
      console.log("succsess");
    }
  };

  const passwordErrorHandler = () => {
    if (enteredPassword.trim().length < 8) {
      setPasswordError("Invalid Password");
    } else if (enteredPassword !== userData.password) {
      setPasswordError("Wrong User Password");
    } else if (enteredPassword === userData.password) {
      setPasswordError("Welcome");
      console.log("success");
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
