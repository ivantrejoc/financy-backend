import { Expense } from "src/expenses/expenses.entity";
import { Income } from "src/incomes/incomes.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string = uuid();

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  last_name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  createdAt: string;

  @OneToMany(() => Expense, (expense) => expense.user, { cascade: true })
  expenses: Expense[];

  @OneToMany(() => Income, (income) => income.user, { cascade: true })
  incomes: Income[];
  static id: string;
}
