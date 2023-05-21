import axios from "axios";
import { UserCredentials } from "../../types";
import { useCallback } from "react";

const apiUrl = import.meta.env.VITE_API_URL;
const useUser = () => {
  const getUserToken = useCallback(
    async (credentials: UserCredentials): Promise<string> => {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}/users/login`,
        credentials
      );
      return token;
    },
    []
  );

  return { getUserToken };
};

export default useUser;
