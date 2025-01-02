import { Body, Controller, Get, Post } from "@nestjs/common";
import { TypesDto } from "../dtos/types.dto";
import { ExpenseTypesService } from "./expenseTypes.service";

@Controller("expense-types")
export class ExpenseTypeController {
  constructor(private readonly expenseTypesService: ExpenseTypesService) {}

  @Get()
  getExpenseTypes() {
    return this.expenseTypesService.getExpenseTypes();
  }

  @Post()
  createExpenseType(@Body() type?: TypesDto) {
    return this.expenseTypesService.createExpenseType(type);
  }

  @Post("/bulk")
  createExpenseTypes(@Body() types: TypesDto[]) {
    return this.expenseTypesService.createExpenseTypes(types);
  }
}
