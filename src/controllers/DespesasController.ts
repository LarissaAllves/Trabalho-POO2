import { Request, Response } from "express";
import { Responsavel } from "../entities/Responsavel";
import { DespesasServices } from "../services/DespesasServices";

class DespesasController {
  async create(request: Request, response: Response) {
    const { data_compra, valor, local_compra, responsavel_id } = request.body;
    const despesasServices = new DespesasServices();
    const despesas = await despesasServices.create({
      data_compra,
      valor,
      local_compra,
      responsavel_id,
    });
    return response.json(despesas);
  }
  async index(request: Request, response: Response) {
    const despesasServices = new DespesasServices();

    try {
      const despesas = await despesasServices.index();
      return response.json(despesas);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async show(request: Request, response: Response) {
    const despesasServices = new DespesasServices();
    const { id } = request.params;

    try {
      const despesa = await despesasServices.show({ id });
      return response.json(despesa);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async delete(request: Request, response: Response) {
    const despesasServices = new DespesasServices();
    const { id } = request.params;

    try {
      await despesasServices.delete({ id });
      return response.json({ message: "Id deletado com sucesso" });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async update(request: Request, response: Response) {
    const despesasServices = new DespesasServices();
    const { id } = request.params;
    const { responsavel_id, local_compra, valor, data_compra } = request.body;

    try {
      const despesas = await despesasServices.update(
        { id },
        { responsavel_id, local_compra, valor, data_compra }
      );
      return response.json(despesas);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}
export { DespesasController };
