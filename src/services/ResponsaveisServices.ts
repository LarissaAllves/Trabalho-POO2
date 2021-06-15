import { getCustomRepository } from "typeorm";
import { ResponsaveisRepository } from "../repositories/ResponsaveisRepository";

interface IRespCreate {
  nome: string;
  telefone: string;
}

class ResponsaveisServices {
  async create({ nome, telefone }: IRespCreate) {
    const responsaveisRepository = getCustomRepository(ResponsaveisRepository);

    const resp = responsaveisRepository.create({
      nome,
      telefone,
    });

    await responsaveisRepository.save(resp);

    return resp;
  }
  async index() {
    const responsaveisRepository = getCustomRepository(ResponsaveisRepository);
    const resp = await responsaveisRepository.find();

    return resp;
  }
}

export { ResponsaveisServices };
