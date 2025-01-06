import { IsOptional, IsUUID } from "class-validator";

export class userIdDto {
  @IsOptional()
  @IsUUID(4, { message: "Invalid userId: must be a valid UUID" })
  userId: string;
}
