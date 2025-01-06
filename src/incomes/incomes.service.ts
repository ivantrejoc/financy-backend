import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Income } from "./incomes.entity";
import { Repository } from "typeorm";

@Injectable()
export class IncomesService {
  constructor(
    @InjectRepository(Income)
    private readonly incomeRepository: Repository<Income>
  ) {}

  async createIncome(income: Omit<Income, "id" | "user" | "income_type">) {
    const newIncome = this.incomeRepository.create(income);
    const savedIncome = await this.incomeRepository.save(newIncome);
    return savedIncome;
  }

  async getIncomes() {
    const incomes = await this.incomeRepository.find();
    if (incomes.length <= 0) {
      return "Not founded";
    }

    const cleanIncomes = incomes.map((income) => {
      return {
        id: income.id,
        concept: income.concept,
        amount: income.amount,
        date: income.createdAt,
        userId: income.userId,
        incomeType: income.incomeTypeId,
      };
    });
    return cleanIncomes;
  }

  async getIncomesById(userId: string) {
    const incomes = await this.incomeRepository.findBy({ userId });
    if (incomes.length <= 0) {
      return "Not founded";
    }
    const cleanIncomesById = incomes.map((income) => {
      return {
        id: income.id,
        concept: income.concept,
        amount: income.amount,
        date: income.createdAt,
        userId: income.userId,
        incomeType: income.incomeTypeId,
      };
    });
    return cleanIncomesById;
  }
}
