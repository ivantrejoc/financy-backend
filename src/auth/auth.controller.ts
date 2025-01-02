import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { CredentialsDto } from "../dtos/credentials.dto";
import { AuthService } from "./auth.service";

@Controller("/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/signin")
  async signin(@Body() credentials: CredentialsDto) {
    try {
      const response = await this.authService.signIn(credentials);
      return response;
    } catch (error) {
      throw new UnauthorizedException("User not authenticated", {
        cause: new Error(),
        description: error.message,
      });
    }
  }
}
