import { Controller, Get, Post, Query } from "@nestjs/common";
import { ExpensesDto } from "src/dtos/expenses.dto";
import { ExpensesService } from "./expenses.service";

@Controller("expenses")
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get()
  getExpenses(@Query("userId") userId: string) {
    if (userId) {
      console.log("EL USER ID: ", userId);
      return this.expensesService.getExpensesById(userId);
      
    }
    return this.expensesService.getExpenses();
  }

  @Post()
  createExpense() {
    return this.expensesService.createExpense();
  }
}
