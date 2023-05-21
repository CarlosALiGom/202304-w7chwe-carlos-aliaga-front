import { useState } from "react";
import { UserCredentials } from "../../types";
import LoginFormStyled from "./LoginFormStyled";

interface LoginFormStructure {
  submitForm: (user: UserCredentials) => void;
}

const LoginForm = ({ submitForm }: LoginFormStructure): JSX.Element => {
  const initialUserCredentials: UserCredentials = {
    username: "",
    password: "",
  };
  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.id]: event.target.value,
    });
  };

  const handleLoginForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitForm(userCredentials);
    setUserCredentials(initialUserCredentials);
  };

  const isValidForm =
    userCredentials.username !== "" && userCredentials.password !== "";

  return (
    <LoginFormStyled>
      <form className="form" onSubmit={handleLoginForm}>
        <h2 className="form-title">Login</h2>
        <div className="form__control">
          <label className="form__label" htmlFor="username">
            Username:
          </label>
          <input
            onChange={onChangeData}
            className="form__input"
            type="text"
            id="username"
            value={userCredentials.username}
          />
        </div>
        <div className="form__control">
          <label className="form__label" htmlFor="password">
            Password:
          </label>
          <input
            onChange={onChangeData}
            className="form__input"
            type="password"
            id="password"
            value={userCredentials.password}
          />
        </div>
        <button className="form__button" type="submit" disabled={!isValidForm}>
          Login
        </button>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
