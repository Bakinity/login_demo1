import classes from "./SignUpForm.module.css";
const SignUpform = () => {
  return (
    <form className={classes.signUpForm}>
      <h1 className={classes.h1Title}>SignUp</h1>
      <p className={classes.pTitle}>
        Create your account, its free and only takes a minute
      </p>

      <div className={classes.nameLastNameDiv}>
        <input
          type='text'
          placeholder='First Name'
          className={classes.nameLastNameInput}
        ></input>
        <input
          type='text'
          placeholder='Last Name'
          className={classes.nameLastNameInput}
        ></input>
      </div>

      <input
        type='email'
        placeholder='Email'
        className={classes.emailInput}
      ></input>

      <input
        type='password'
        placeholder='Password'
        className={classes.passwordInput}
      ></input>

      <input
        type='password'
        placeholder='Confirm Password'
        className={classes.passwordInput}
      ></input>

      <div className={classes.checkInputDiv}>
        <input type='checkbox' id='accept'></input>
        <label for='accept' className={classes.checklabel}>
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
