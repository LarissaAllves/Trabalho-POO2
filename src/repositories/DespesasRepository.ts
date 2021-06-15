import { Repository, EntityRepository } from "typeorm";
import { Despesa } from "../entities/Despesa";

@EntityRepository(Despesa)
class DespesasRepository extends Repository<Despesa> {}

export { DespesasRepository };
