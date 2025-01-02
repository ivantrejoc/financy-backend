import { Income } from "src/incomes/incomes.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "income_types",
})
export class IncomeType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  type: string;

  @OneToMany(() => Income, (income) => income.income_type, { cascade: true })
  incomes: Income[];
}
