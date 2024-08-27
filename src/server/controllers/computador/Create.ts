import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { validation } from "../../shared/middleware";

interface IComputador {
  patrimonio: string;
  marca: string;
  modelo: string;
  numeroSerie: string;
  descricao?: string;
  setor: string;

}

interface IFilter {
  filter?: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IComputador>(
    yup.object().shape({
      patrimonio: yup.string().required(),
      marca: yup.string().required(),
      modelo: yup.string().required(),
      numeroSerie: yup.string().required(),
      descricao: yup.string().optional(),
      setor: yup.string().required()
    })
  ),
  query: getSchema<IFilter>(
    yup.object().shape({
      filter: yup.string().optional().min(3),
    })
  ),
}));

export const create = async (req: Request<{}, {}, IComputador>, res: Response) => {
  return res.status(StatusCodes.CREATED).json(req.body);
};