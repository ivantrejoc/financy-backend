import { IsNotEmpty, IsString } from "class-validator";

export class TypesDto {
  @IsNotEmpty()
  @IsString({ each: true })
  type: string;
}
