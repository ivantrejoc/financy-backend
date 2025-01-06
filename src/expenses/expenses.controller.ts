import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  UseInterceptors,
  Body,
  Req,
} from "@nestjs/common";
import { ExpensesDto } from "src/dtos/expenses.dto";
import { ExpensesService } from "./expenses.service";
import { userIdDto } from "src/dtos/userId.dto";
import { DateAdderInterceptor } from "src/interceptors/dateAdder.interceptor";

@Controller("expenses")
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get()
  async getExpenses(@Query() query: userIdDto) {
    const { userId } = query;
    if (userId) {
      console.log("EL USER ID: ", userId);
      const expensesById = await this.expensesService.getExpensesById(userId);
      if (expensesById === "Not founded") {
        throw new HttpException(
          "User doesn't have incomes registered",
          HttpStatus.NOT_FOUND
        );
      }
      return expensesById;
    }
    const allExpenses = await this.expensesService.getExpenses();
    if (allExpenses === "Not founded") {
      throw new HttpException("Not expenses registered", HttpStatus.NOT_FOUND);
    }
    return allExpenses;
  }

  @Post()
  @UseInterceptors(DateAdderInterceptor)
  async createExpense(
    @Body() rawExpense: ExpensesDto,
    @Req() request: Request & { date: string }
  ) {
    const expense = {
      ...rawExpense,
      createdAt: request.date,
    };
    const newExpense = await this.expensesService.createExpense(expense);
    return {
      message: "Expense created successfully",
      data: newExpense,
    };
  }
}
