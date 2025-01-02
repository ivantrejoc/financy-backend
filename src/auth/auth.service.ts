import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CredentialsDto } from "src/dtos/credentials.dto";
import { UsersService } from "src/users/users.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signIn(credentials: CredentialsDto) {
    const { email, password } = credentials;
    const dbUser = await this.usersService.getUserByemail(email);
    if (!dbUser) {
      throw new UnauthorizedException("Invalid email or password");
    }
    const isValidPassword = await bcrypt.compare(password, dbUser.password);
    if (!isValidPassword) {
      throw new UnauthorizedException("Invalid email or password");
    }
    return {
      success: "User Authenticated",
      name: dbUser.name,
      lastName: dbUser.last_name,
      email: dbUser.email,
    };
  }
}
