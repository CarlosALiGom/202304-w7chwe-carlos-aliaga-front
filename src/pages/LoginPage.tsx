import LoginForm from "../components/LoginForm/LoginForm";
import useUser from "../hooks/useUser/useUser";
import { UserCredentials } from "../types";

const LoginPage = (): JSX.Element => {
  const { getUserToken } = useUser();

  const handleFormSubmit = async (user: UserCredentials) => {
    const token = await getUserToken(user);
    window.localStorage.setItem("token", token);
  };

  return <LoginForm submitForm={handleFormSubmit} />;
};

export default LoginPage;
