import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Responsavel } from "../entities/Responsavel";

@Entity("despesas")
class Despesa {
  @PrimaryColumn()
  id: string;
  @Column()
  data_compra: Date;
  @Column()
  local_compra: string;
  @Column()
  valor: number;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
  @Column()
  responsavel_id: string;

  @JoinColumn({ name: "responsavel_id" })
  @ManyToOne(() => Responsavel)
  responsavel: Responsavel;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Despesa };
