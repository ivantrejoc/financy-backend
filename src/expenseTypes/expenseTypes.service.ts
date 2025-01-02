import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExpenseType } from "./expenseTypes.entity";
import { Repository } from "typeorm";

@Injectable()
export class ExpenseTypesService {
  constructor(
    @InjectRepository(ExpenseType)
    private expenseTypeRepository: Repository<ExpenseType>
  ) {}

  createExpenseType(type: Omit<ExpenseType, "id" | "expenses">) {
    const newType = this.expenseTypeRepository.create(type);
    return this.expenseTypeRepository.save(newType);
  }

  createExpenseTypes(types: Omit<ExpenseType, "id" | "expenses">[]) {
    const newTypes = this.expenseTypeRepository.create(types);
    return this.expenseTypeRepository.save(newTypes);
  }

  getExpenseTypes() {
    const types = this.expenseTypeRepository.find();
    return types;
  }
}
