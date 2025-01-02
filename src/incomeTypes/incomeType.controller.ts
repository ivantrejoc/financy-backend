import { Body, Controller, Get, Post } from "@nestjs/common";
import { TypesDto } from "src/dtos/types.dto";
import { IncomeTypesService } from "./incomeTypes.service";

@Controller("income-types")
export class IncomeTypeController {
  constructor(private readonly incomeTypesService: IncomeTypesService) {}

  @Get()
  getIncomeTypes() {
    return this.incomeTypesService.getIncomeTypes();
  }

  @Post("/bulk")
  createIncomeTypes(@Body() types: TypesDto[]) {
    return this.incomeTypesService.createIncomeTypes(types);
  }
}
