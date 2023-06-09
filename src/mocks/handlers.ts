import { rest } from "msw";
import { tokenMock } from "./user/userMocks.js";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}/users/login`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        token: tokenMock,
      })
    );
  }),
];
