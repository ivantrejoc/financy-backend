import { ExpenseType } from "src/expenseTypes/expenseTypes.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "expenses",
})
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  concept: string;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
  amount: number;

  @Column({ nullable: false })
  date: Date;

  @ManyToOne(() => User, (user) => user.expenses)
  user: User;

  @ManyToOne(() => ExpenseType, (expenseType) => expenseType.expenses)
  expenseType: ExpenseType;
}
