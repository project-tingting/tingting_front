import { rest } from 'msw';
import { User } from './types';

export const handlers = [
  rest.post<User>('/join', (req, res, ctx) => {
    localStorage.setItem('is-authenticated', 'true');
    if (!req.body.id) {
      return res(
        ctx.status(401),
        ctx.json({
          data: 'test1',
          success: false,
          message: '아이디가 입력되지 않았습니다.',
        }),
      );
    }
    if (!req.body.password) {
      return res(
        ctx.status(402),
        ctx.json({
          success: false,
          message: '비밀번호가 입력되지 않았습니다.',
        }),
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        data: 'test2',
        success: true,
        message: '회원가입 성공',
      }),
      // ctx.json({
      //   data: {
      //     id: 'minyoung',
      //     pw: '1234',
      //   },
      // }),
    );
  }),
  // rest.get('/user', (req, res, ctx) => {
  //   const isAuthenticated = localStorage.getItem('is-authenticated');
  //   if (!isAuthenticated) {
  //     return res(
  //       ctx.status(403),
  //       ctx.json({
  //         errorMessage: 'Not authorized',
  //       }),
  //     );
  //   }
  //   return res(
  //     ctx.status(200),
  //     ctx.json({
  //       id: 'minyoung@gmail.com',
  //       pw: '19970417',
  //     }),
  //   );
  // }),
];
