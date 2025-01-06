import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import typeOrmConfig from "./config/typeorm";
import { ExpenseTypesModule } from "./expenseTypes/expenseTypes.module";
import { IncomeTypesModule } from "./incomeTypes/incomeTypes.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { IncomesModule } from "./incomes/incomes.module";
import { ExpensesModule } from "./expenses/expenses.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get("typeorm"),
    }),
    ExpenseTypesModule,
    IncomeTypesModule,
    UsersModule,
    AuthModule,
    IncomesModule,
    ExpensesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
