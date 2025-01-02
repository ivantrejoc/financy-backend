import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Income } from "./incomes.entity";
import { IncomesController } from "./incomes.controller";
import { IncomesServices } from "./incomes.services";

@Module({
  imports: [TypeOrmModule.forFeature([Income])],
  controllers: [IncomesController],
  providers: [IncomesServices],
})
export class IncomesModule {}
