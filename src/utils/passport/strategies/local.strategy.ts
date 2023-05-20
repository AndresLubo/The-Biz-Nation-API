import { Strategy } from 'passport-local';
import { AuthService } from '../../../modules/auth/auth.service';

const service = AuthService.create();

export const LocalStrategy = new Strategy({
  usernameField: 'email'
},
  async (email: string, password: string, done) => {
    try {
      const user = await service.getUser(email, password);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);
