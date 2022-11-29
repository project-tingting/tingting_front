import { registerHandlers } from './register';
import { loginHandlers } from './login';

export const handlers = [...registerHandlers, ...loginHandlers];
