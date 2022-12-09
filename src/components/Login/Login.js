import classes from "./Login.module.css";

const Login = () => {
  return (
    <form className={classes.form}>
      <h1>Log In</h1>

      <button class={classes.closeBtn}>✕</button>

      <input
        className={classes.input}
        type='email'
        name='email'
        placeholder='Email Address'
      />

      <input
        className={classes.input}
        type='password'
        placeholder='Password'
        name='password'
      />
      <button className={classes.btnLogin}>Log In</button>
      <a className={classes.aLink} href='*'>
        Forgot Password?
      </a>
    </form>
  );
};

export default Login;
