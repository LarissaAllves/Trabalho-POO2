import { getCustomRepository } from "typeorm";
import { Responsavel } from "../entities/Responsavel";
import { DespesasRepository } from "../repositories/DespesasRepository";

interface IDespesasCreate {
  data_compra: Date;
  valor: number;
  local_compra: string;
  responsavel_id: string;
}

interface IDespesasShow {
  id: string;
}

interface IDespesasUpdate {
  responsavel_id: string;
  local_compra: string;
  valor: number;
  data_compra: Date;
}

class DespesasServices {
  async create({
    data_compra,
    valor,
    local_compra,
    responsavel_id,
  }: IDespesasCreate) {
    const despesasRepository = getCustomRepository(DespesasRepository);

    const despesas = despesasRepository.create({
      data_compra,
      local_compra,
      valor,
      responsavel_id,
    });
    await despesasRepository.save(despesas);

    return despesas;
  }
  async index() {
    const despesasRepository = getCustomRepository(DespesasRepository);

    const despesas = await despesasRepository.find({
      relations: ["responsavel"],
    });

    return despesas;
  }

  async show({ id }: IDespesasShow) {
    const despesasRepository = getCustomRepository(DespesasRepository);

    const despesas = await despesasRepository.findOne(
      { id },
      { relations: ["responsavel"] }
    );

    if (!despesas) {
      throw new Error(" ID não encontrado");
    }

    return despesas;
  }

  async delete({ id }: IDespesasShow) {
    const despesasRepository = getCustomRepository(DespesasRepository);

    const despesas = await despesasRepository.findOne({ id });

    if (!despesas) {
      throw new Error("ID não encontrado");
    }

    return await despesasRepository.delete({ id });
  }

  async update(
    { id },
    { responsavel_id, local_compra, valor, data_compra }: IDespesasUpdate
  ) {
    const despesasRepository = getCustomRepository(DespesasRepository);

    let despesas = await despesasRepository.findOne({ id });

    if (!despesas) {
      throw new Error("ID não encontrado");
    }

    await despesasRepository.update(id, {
      responsavel_id,
      local_compra,
      valor,
      data_compra,
    });

    despesas = await despesasRepository.findOne({ id });

    return despesas;
  }
}

export { DespesasServices };
