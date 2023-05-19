import { Sequelize } from "sequelize";
/**
 * All classes within the 'Models' folder have a 'config' method
 *  and the return of this method must comply with this type
 */

export interface configModelSequelize {
  sequelize: Sequelize,
  tableName: string,
  modelName: string,
  timestamp: boolean
}
