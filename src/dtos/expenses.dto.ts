import { IsNotEmpty, IsNumber, IsString, IsUUID, Min } from "class-validator";

export class ExpensesDto {
  @IsNotEmpty()
  @IsString()
  concept: string;
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  amount: number;
  @IsNotEmpty()
  @IsUUID()
  userId: string;
  @IsNotEmpty()
  @IsNumber()
  expenseTypeId: number;
}
