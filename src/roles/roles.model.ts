import { Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface RoleCreateAttrs {
  value: string;
  description: string;
}

@Table({
  tableName: "roles",
})
export class Role extends Model<User, RoleCreateAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  value: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;
}
