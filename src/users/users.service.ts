import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>
  ) {}

  createUser(user: Omit<User, "id" | "expenses" | "incomes">) {
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  getUserByemail(email: string) {
    const user = this.usersRepository.findOne({ where: { email } });
    return user;
  }
}
