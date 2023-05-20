import { Strategy, ExtractJwt } from 'passport-jwt';
import { configEnv } from '../../../config/config.env';

const { secret } = configEnv.jwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
}

export const JwtStrategy = new Strategy(options, (payload, done) => done(null, payload))

