import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Req,
  UseInterceptors,
} from "@nestjs/common";
import { IncomesService } from "./incomes.service";
import { IncomesDto } from "src/dtos/incomes.dto";
import { DateAdderInterceptor } from "src/interceptors/dateAdder.interceptor";
import { userIdDto } from "src/dtos/userId.dto";

@Controller("incomes")
export class IncomesController {
  constructor(private readonly incomesService: IncomesService) {}

  @Get()
  async getIncomes(@Query() query: userIdDto) {
    const { userId } = query;
    if (userId) {
      const incomesById = await this.incomesService.getIncomesById(userId);
      if (incomesById === "Not founded") {
        throw new HttpException(
          "User doesn't have incomes registered",
          HttpStatus.NOT_FOUND
        );
      }
      return incomesById;
    }
    const allIncomes = await this.incomesService.getIncomes();
    if (allIncomes === "Not founded") {
      throw new HttpException("Not incomes registered", HttpStatus.NOT_FOUND);
    }
    return allIncomes;
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
