import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Req,
  UseInterceptors,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersDto } from "src/dtos/users.dto";
import { DateAdderInterceptor } from "src/interceptors/dateAdder.interceptor";
import * as bcrypt from "bcrypt";

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("/signUp")
  @UseInterceptors(DateAdderInterceptor)
  async signUp(
    @Body() user: UsersDto,
    @Req() request: Request & { date: string }
  ) {
    try {
      const dbUser = await this.usersService.getUserByemail(user.email);
      if (dbUser) {
        throw new BadRequestException("Email already exist", {
          cause: new Error(),
          description: "Email already exist",
        });
      }
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const finalUser = {
        ...user,
        password: hashedPassword,
        createdAt: request.date,
      };

      const response = await this.usersService.createUser(finalUser);
      return { success: "User created", email: response.email };
    } catch (error) {
      throw new BadRequestException("Something bad happened", {
        cause: new Error(),
        description: error.message,
      });
    }
  }
}
