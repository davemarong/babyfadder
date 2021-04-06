import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { get_username, get_password, get_email } from "../Actions/index";
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleusernameInput = (event) => {
    setUsername(event.target.value);
  };
  const handlepasswordInput = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handleLocalStateToReduxStore = () => {
    dispatch(get_username(username));
    dispatch(get_password(password));
    dispatch(get_email(email));
  };
  return (
    <div>
      <div>
        <h1>Registrer deg</h1>
      </div>
      <div>
        <label for="username">Brukernavn</label>
        <input id="username" type="text" onChange={handleusernameInput} />
      </div>
      <div>
        <label for="password">Passord</label>
        <input id="password" type="text" onChange={handlepasswordInput} />
      </div>
      <div>
        <label for="email">Email</label>
        <input id="email" type="text" onChange={handleEmailInput} />
      </div>
      <div>
        <button onClick={handleLocalStateToReduxStore}>Registrer!</button>
      </div>
    </div>
  );
}
