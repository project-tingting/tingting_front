import { rest } from 'msw';
import { LoginProps } from '../../types/user';

export const loginHandlers = [
  rest.post<LoginProps>('/account/login', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        code: 201,
        message: 'SUCCESS',
        data: {
          uuid: 'd87ca69b190d4940b792fe95dcd491fa',
          token:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwiaWQiOjEsImV4cCI6MTY2ODM0Nzk4MiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIn0.D7D7qHOft0bcFP-0lfnilvXAVEq0ERwikLA38d3CEwMhWm4J8lt8UFxjSbAToWsDBK8xIeMCi8Qe7KrAepfLKQ',
        },
      }),
    );
  }),
];
