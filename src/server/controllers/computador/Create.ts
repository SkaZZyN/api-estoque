import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { validation } from "../../shared/middleware";

interface IComputador {
  patrimonio: number;
  marca: string;
  modelo: string;
  numeroSerie: string;
  setor: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IComputador>(
    yup.object().shape({
      patrimonio: yup.number().required(),
      marca: yup.string().required(),
      modelo: yup.string().required(),
      numeroSerie: yup.string().required(),
      setor: yup.string().required(),
    })
  ),
}));

export const create = async (
  req: Request<{}, {}, IComputador>,
  res: Response
) => {
  return res
    .status(StatusCodes.CREATED)
    .send("not implemented create");
};
