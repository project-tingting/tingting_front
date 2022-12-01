import { registerHandlers } from './register';
import { loginHandlers } from './login';
import { profileHandlers } from './profile';

export const handlers = [...profileHandlers, ...registerHandlers, ...loginHandlers];
