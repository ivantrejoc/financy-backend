import { Module } from "@nestjs/common";
import { IncomeTypeController } from "./incomeType.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { IncomeType } from "./incomeTypes.entity";
import { IncomeTypesService } from "./incomeTypes.service";

@Module({
  imports: [TypeOrmModule.forFeature([IncomeType])],

  controllers: [IncomeTypeController],
  providers: [IncomeTypesService],
})
export class IncomeTypesModule {}
