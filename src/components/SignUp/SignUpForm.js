import classes from "./SignUpForm.module.css";
const SignUpform = (props) => {
  return (
    <form className={classes.signUpForm} onSubmit={props.onSubmit}>
      <h1 className={classes.h1Title}>SignUp</h1>
      <p className={classes.pTitle}>
        Create your account, its free and only takes a minute
      </p>

      <div style={{ color: "red", textAlign: "center" }}>{props.nameError}</div>
      <div className={classes.nameLastNameDiv}>
        <input
          onChange={props.onNameInput}
          type='text'
          placeholder='First Name'
          className={classes.nameLastNameInput}
        ></input>
        <input
          onChange={props.onLastNameInput}
          type='text'
          placeholder='Last Name'
          className={classes.nameLastNameInput}
        ></input>
      </div>

      <div style={{ color: "red", textAlign: "center" }}>
        {props.emailError}
      </div>
      <input
        onChange={props.onEmailInput}
        type='email'
        placeholder='Email'
        className={classes.emailInput}
      ></input>

      <div style={{ color: "red", textAlign: "center" }}>
        {props.passwordError}
      </div>
      <input
        onChange={props.onPasswordInput}
        type='password'
        placeholder='Password'
        className={classes.passwordInput}
      ></input>

      <div style={{ color: "red", textAlign: "center" }}>
        {props.confirmPasswordError}
      </div>
      <input
        onChange={props.onConfirmPasswordInput}
        type='password'
        placeholder='Confirm Password'
        className={classes.passwordInput}
      ></input>

      <div className={classes.checkInputDiv}>
        <input type='checkbox' id='accept'></input>
        <label htmlFor='accept' className={classes.checklabel}>
          I accept the {""}
          <a className={classes.aStyle} href='*'>
            Terms of Use {""}
          </a>
          and {""}
          <a href='*' className={classes.aStyle}>
            Privacy Policy
          </a>
        </label>
      </div>

      <button className={classes.butnSignUp}>SignUp</button>
    </form>
  );
};

export default SignUpform;
