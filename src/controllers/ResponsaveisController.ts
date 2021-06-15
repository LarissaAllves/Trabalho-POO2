import { Request, Response } from "express";

import { ResponsaveisServices } from "../services/ResponsaveisServices";

class ResponsaveisController {
  async create(request: Request, response: Response) {
    const { nome, telefone } = request.body;
    const responsaveisServices = new ResponsaveisServices();
    const resp = await responsaveisServices.create({ nome, telefone });

    return response.json(resp);
  }

  async index(request: Request, response: Response) {
    const responsaveisServices = new ResponsaveisServices();
    try {
      const resp = await responsaveisServices.index();
      return response.json(resp);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}

export { ResponsaveisController };
