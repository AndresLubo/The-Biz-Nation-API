import jwt from 'jsonwebtoken';

import { configEnv } from '../config/config.env';
import { jwtPayload } from './types/jwtPayload';

const { secret } = configEnv.jwt;

export const signToken = (payload: jwtPayload) => jwt.sign(payload, secret);


export const verifyToken = (token: string) => jwt.verify(token, secret)
