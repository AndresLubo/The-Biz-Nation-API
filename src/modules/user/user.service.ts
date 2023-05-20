import { Model } from 'sequelize';
import boom from '@hapi/boom';

import { sequelize } from '../../sequelize/sequelize.index';
import { hashPassword } from '../../utils/utils.bcrypt';
import { CreateUser, GetUser, UpdateUser, User } from '../../utils/types/user.type';

const { models } = sequelize;


export class UserService {

  static instance: UserService | null = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor(){}
  static create(){
    if (UserService.instance === null) UserService.instance = new UserService();
    return UserService.instance;
  }

  async findAll(): Promise<Model<User>[]>{
    const users: Model<User>[] = await models.User.findAll({
      attributes: {
        exclude: ['password'],
      },
    });

    return users;
  }

  async findOne(id: number): Promise<Model<User>>{
    const user: Model<User> | null = await models.User.findByPk(id, {
      attributes: {
        exclude: ['password'],
      },
    });

    if (!user) throw boom.notFound(`The user with id ${id} does not exist.`);

    return user;
  }

  async getByEmail(email: string): Promise<Model<User>> {
    const user: Model<User> | null = await models.User.findOne({ where: { email } });
    if (!user)
      throw boom.notFound(`The user with email ${email} does not exist.`);

    return user;
  }


  async create(data: CreateUser): Promise<GetUser> {
    const hash: string = await hashPassword(data.password);

    const newUser: Model<User> = await models.User.create({
      ...data,
      password: hash,
    });


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {password, ...user} = newUser.dataValues;

    return user;
  }


  async update(id: number, changes: UpdateUser): Promise<GetUser> {
    const user = await this.findOne(id);
    const response = await user.update(changes);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userUpdate } = response.dataValues;
    return userUpdate;
  }

  async delete(id: number) {
    const user = await this.findOne(id);
    await user.destroy();
    return { message: `${id} user removed.` };
  }

}
