import LoginForm from "../../components/LoginForm/LoginForm";
import useToken from "../../hooks/useToken/useToken";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { UserCredentials } from "../../types";

const LoginPage = (): JSX.Element => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();

  const handleFormSubmit = async (user: UserCredentials) => {
    const token = await getUserToken(user);

    if (token) {
      const userData = getTokenData(token);
      window.localStorage.setItem("token", token);
      dispatch(loginUserActionCreator(userData));
    }
  };

  return <LoginForm submitForm={handleFormSubmit} />;
};

export default LoginPage;
