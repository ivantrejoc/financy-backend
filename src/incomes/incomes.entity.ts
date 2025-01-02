import { IncomeType } from "src/incomeTypes/incomeTypes.entity";
import { User } from "src/users/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({
  name: "incomes",
})
export class Income {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  concept: string;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
  amount: number;

  @Column({ nullable: false })
  createdAt: string;

  @ManyToOne(() => User, (user) => user.incomes, { eager: true })
  @JoinColumn({ name: "userId" })
  user: User;
  @Column({ type: "string", nullable: false })
  userId: string;
  @ManyToOne(() => IncomeType, (incomeType) => incomeType.incomes, {
    eager: true,
  })
  @JoinColumn({ name: "incomeTypeId" })
  income_type: IncomeType;
  @Column({ type: "number", nullable: false })
  incomeTypeId: number;
}
