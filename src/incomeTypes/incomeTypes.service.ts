import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IncomeType } from "./incomeTypes.entity";
import { Repository } from "typeorm";

@Injectable()
export class IncomeTypesService {
  constructor(
    @InjectRepository(IncomeType)
    private readonly incomeTypeRepository: Repository<IncomeType>
  ) {}

  createIncomeTypes(types: Omit<IncomeType, "id" | "incomes">[]) {
    const newTypes = this.incomeTypeRepository.create(types);
    return this.incomeTypeRepository.save(newTypes);
  }

  getIncomeTypes() {
    const types = this.incomeTypeRepository.find();
    return types;
  }
}
