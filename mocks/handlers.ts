import { rest } from 'msw';
import { RegisterProps } from '../types/user';

export const handlers = [
  rest.post<RegisterProps>('/join/sex', (req, res, ctx) => {
    localStorage.setItem('is-authenticated', 'true');
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        code: 200,
        message: 'SUCCESS',
        data: {
          uuid: '2f0a837c3c4840c68f7d5ca5a8c13ea7',
        },
      }),
    );
  }),
];
