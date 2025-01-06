import { ExpenseType } from "src/expenseTypes/expenseTypes.entity";
import { User } from "src/users/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

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
  createdAt: string;

  @ManyToOne(() => User, (user) => user.expenses, { eager: true })
  @JoinColumn({ name: "userId" })
  user: User;
  @Column({ type: "string", nullable: false })
  userId: string;

  @ManyToOne(() => ExpenseType, (expenseType) => expenseType.expenses, {
    eager: true,
  })
  @JoinColumn({ name: "expenseTypeId" })
  expense_Type: ExpenseType;
  @Column({ type: "number", nullable: false })
  expenseTypeId: number;
}
