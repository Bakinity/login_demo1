import classes from "./Login.module.css";

const LofinForm = (props) => {
  return (
    <form className={classes.form} onSubmit={props.onSubmit}>
      <h1>Log In</h1>

      <button className={classes.closeBtn} type='reset'>
        ✕
      </button>

      <div style={{ color: "red" }}>{props.showEmailError}</div>
      <input
        onChange={props.onEmailEdit}
        className={classes.input}
        type='email'
        name='email'
        placeholder='Email Address'
      />

      <div style={{ color: "red" }}>{props.showPasswordError}</div>
      <input
        onChange={props.onPasswordEdit}
        className={classes.input}
        type='password'
        placeholder='Password'
        name='password'
      />
      <p>{props.inputMessage}</p>

      <button type='submit' className={classes.btnLogin}>
        Log In
      </button>
      <a className={classes.aLink} href='*'>
        Forgot Password?
      </a>
    </form>
  );
};

export default LofinForm;
