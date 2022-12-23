import { React, useState } from "react";
import SignUpform from "./SignUpForm";

const SignUp = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const confPasswordChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const nameHandler = () => {
    if ((enteredName && enteredLastName).trim().length === 0) {
      setNameError("The name or lastname cannot be empty");
    } else {
      return true;
    }
  };

  const emailHandler = () => {
    if (enteredEmail.trim().length === 0) {
      setemailError("The email cannot be empty and must include @");
    } else {
      return true;
    }
  };

  const passwordHandler = () => {
    if (enteredPassword.trim().length < 8) {
      setPasswordError("The password must be 8 characters");
    } else {
      return true;
    }
  };

  const confPasswordHandler = () => {
    if (enteredConfirmPassword !== enteredPassword) {
      setConfirmPasswordError("Not equal to the password above");
    } else {
      return true;
    }
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const formValid =
      nameHandler() &&
      emailHandler() &&
      passwordHandler() &&
      confPasswordHandler();

    if (formValid) {
      props.isFormValid(true);
      props.onSetUserData({ email: enteredEmail, password: enteredPassword });
    }

    console.log(
      enteredName,
      enteredLastName,
      enteredEmail,
      enteredPassword,
      enteredConfirmPassword
    );
  };

  return (
    <SignUpform
      signedEmail={enteredEmail}
      signedPassword={enteredPassword}
      nameError={nameError}
      emailError={emailError}
      passwordError={passwordError}
      confirmPasswordError={confirmPasswordError}
      onSubmit={addUserHandler}
      onNameInput={nameChangeHandler}
      onLastNameInput={lastNameChangeHandler}
      onEmailInput={emailChangeHandler}
      onPasswordInput={passwordChangeHandler}
      onConfirmPasswordInput={confPasswordChangeHandler}
    />
  );
};
export default SignUp;
