import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { validation } from "../../shared/middleware";

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  body: getSchema<IQueryProps>(
    yup.object().shape({
      page: yup.number().optional().moreThan(0),
      limit: yup.number().optional().moreThan(0),
      filter: yup.string().optional(),
    })
  ),
}));

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response
) => {

  res.setHeader("x-total-count", 1);
  res.setHeader("acess-control-expose-headers", "x-total-count");

  return res
    .status(StatusCodes.OK)
    .json([
      {
        patrimonio: 16870,
        marca: "HP",
        modelo: "elitedesk",
        numeroSerie: "teste NS",
        setor: "Teste Setor",
      },
    ]);
};
