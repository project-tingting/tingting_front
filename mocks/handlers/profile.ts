import { rest } from 'msw';

export const profileHandlers = [
  rest.post<object[]>('/userprofile', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        code: 200,
        message: 'SUCCESS',
        data: '회원가입 완료 8702f24c080d458a9b27185e1a86135d',
      }),
    );
  }),
];
