import { Module } from "@nestjs/common";
import { ExpenseTypeController } from "./expenseTypes.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExpenseType } from "./expenseTypes.entity";
import { ExpenseTypesService } from "./expenseTypes.service";

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseType])],
  controllers: [ExpenseTypeController],
  providers: [ExpenseTypesService],
})
export class ExpenseTypesModule {}
