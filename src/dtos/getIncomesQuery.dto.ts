import { IsOptional, IsUUID } from "class-validator";

export class GetIncomesQueryDto {
  @IsOptional()
  @IsUUID(4, { message: "Invalid userId: must be a valid UUID" })
  userId: string;
}
