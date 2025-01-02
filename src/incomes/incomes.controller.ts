import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseInterceptors,
} from "@nestjs/common";
import { IncomesService } from "./incomes.service";
import { IncomesDto } from "src/dtos/incomes.dto";
import { DateAdderInterceptor } from "src/interceptors/dateAdder.interceptor";

@Controller("incomes")
export class IncomesController {
  constructor(private readonly incomesService: IncomesService) {}

  @Get()
  async getIncomes() {
    const incomes = await this.incomesService.getIncomes();
    return incomes;
  }

  @Get(":userId")
  async getIncomesById(@Param("userId") userId: string) {
    const incomesById = await this.incomesService.getIncomesById(userId);
    return incomesById;
  }
  @Post()
  @UseInterceptors(DateAdderInterceptor)
  async createIncome(
    @Body() rawIncome: IncomesDto,
    @Req() request: Request & { date: string }
  ) {
    const income = {
      ...rawIncome,
      createdAt: request.date,
    };

    const newIncome = await this.incomesService.createIncome(income);
    return {
      message: "Income created successfully",
      data: newIncome,
    };
  }
}
