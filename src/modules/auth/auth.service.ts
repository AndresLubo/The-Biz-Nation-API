import { Model } from 'sequelize';
import boom from '@hapi/boom';

import { UserService } from "../user/user.service";
import { User } from '../../utils/types/user.type';
import { verifyPassword } from '../../utils/utils.bcrypt';
import { signToken } from '../../utils/utils.jwt';
import { jwtPayload } from '../../utils/types/jwtPayload';

const service = UserService.create();

export class AuthService {
  static instance: AuthService | null = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor(){}
  static create(){
    if (AuthService.instance === null) AuthService.instance = new AuthService();
    return AuthService.instance;
  }

  async getUser(email: string, userPassword: string) {
    const user: Model<User> = await service.getByEmail(email);
    const isMatch: boolean = await verifyPassword(userPassword, user.dataValues.password);

    if (!isMatch) throw boom.unauthorized();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {password, ...newUser} = user.dataValues;
    return newUser;
  }

  signToken(user: User) {
    const payload: jwtPayload = {
      sub: user.id,
      nickname: user.nickname,
    };

    const token: string = signToken(payload);

    return {
      user,
      token,
    };
  }

}
