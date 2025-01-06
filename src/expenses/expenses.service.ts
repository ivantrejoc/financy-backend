import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Expense } from "./expenses.entity";
import { Repository } from "typeorm";

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepository: Repository<Expense>
  ) {}

  async createExpense(expense: Omit<Expense, "id" | "user" | "expense_Type">) {
    const newExpense = this.expenseRepository.create(expense);
    const savedExpense = await this.expenseRepository.save(newExpense);
    return savedExpense;
  }

  async getExpensesById(userId: string) {
    const expenses = await this.expenseRepository.findBy({
      userId,
    });
    if (expenses.length <= 0) {
      return "Not founded";
    }
    const cleanExpensesById = expenses.map((expense) => {
      return {
        id: expense.id,
        concept: expense.concept,
        amount: expense.amount,
        date: expense.createdAt,
        userId: expense.userId,
        expenseType: expense.expenseTypeId,
      };
    });
    return cleanExpensesById;
  }

  async getExpenses() {
    const expenses = await this.expenseRepository.find();
    if (expenses.length <= 0) {
      return "Not founded";
    }
    const cleanExpenses = expenses.map((expense) => {
      return {
        id: expense.id,
        concept: expense.concept,
        amount: expense.amount,
        date: expense.createdAt,
        userId: expense.userId,
        expenseType: expense.expenseTypeId,
      };
    });
    return cleanExpenses;
  }
}
