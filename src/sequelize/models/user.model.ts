import { Model, DataTypes, Sequelize } from 'sequelize';
import { configModelSequelize } from '../../utils/types/config.model.sequelize';

export const USER_TABLE = 'users';

export const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING(40),
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  nickname: {
    allowNull: false,
    type: DataTypes.STRING(30),
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },
};

export    class User extends Model {
  static associate(models: any): void {
//
  }

  static config(sequelize: Sequelize): configModelSequelize {
    const config: configModelSequelize = {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };

    return config;
  }
}


