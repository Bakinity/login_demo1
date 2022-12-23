import { React, useState } from "react";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Context from "./components/Context";

function App() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });

  return (
    <Context.Provider value={userData}>
      {isFormValid ? (
        <Login />
      ) : (
        <SignUp isFormValid={setIsFormValid} onSetUserData={setUserData} />
      )}
    </Context.Provider>
  );
}

export default App;
