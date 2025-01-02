import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Income } from "./incomes.entity";
import { Repository } from "typeorm";

@Injectable()
export class IncomesServices {
  constructor(
    @InjectRepository(Income)
    private readonly incomeRepository: Repository<Income>
  ) {}

  createIncome(income: Omit<Income, "id" | "user" | "income_type">) {
    return {
      message: "New income created",
      data: income,
    };
  }
}
