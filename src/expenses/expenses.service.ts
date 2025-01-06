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

  createExpense() {
    return "Expense Created";
  }

  getExpensesById(userId: string) {
    console.log("El user ID: ", userId);
    return "EXPENSES BY ID" + userId;
  }

  getExpenses() {
    return "ALL EXPENSES";
  }
}
