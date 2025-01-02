import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersService } from "src/users/users.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
})
export class AuthModule {}
