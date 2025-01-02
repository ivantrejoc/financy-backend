import { Body, Controller, Post, Req, UseInterceptors } from "@nestjs/common";
import { IncomesServices } from "./incomes.services";
import { IncomesDto } from "src/dtos/incomes.dto";
import { DateAdderInterceptor } from "src/interceptors/dateAdder.interceptor";

@Controller("incomes")
export class IncomesController {
  constructor(private readonly incomesService: IncomesServices) {}

  @Post()
  @UseInterceptors(DateAdderInterceptor)
  createIncome(
    @Body() rawIncome: IncomesDto,
    @Req() request: Request & { date: string }
  ) {
    const income = {
      ...rawIncome,
      createdAt: request.date,
    };
    return this.incomesService.createIncome(income);
  }
}
