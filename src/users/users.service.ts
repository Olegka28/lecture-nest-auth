import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./users.model";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    const user = this.userRepository.create(dto);

    return user;
  }
  async getAllUser() {
    const users = this.userRepository.findAll();

    return users;
  }
}
