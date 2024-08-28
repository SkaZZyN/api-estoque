import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { validation } from "../../shared/middleware";

interface IParamProps {
  numeroSerie?: number;
}
interface IBodyProps {
  patrimonio: number;
  numeroSerie: string;
  marca: string;
  modelo: string;
  setor: string;
}

export const updateByNSValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      numeroSerie: yup.number().optional().moreThan(0),
    })
  ),
  body: getSchema<IBodyProps>(
    yup.object().shape({
      patrimonio: yup.number().required(),
      marca: yup.string().required(),
      modelo: yup.string().required(),
      numeroSerie: yup.string().required(),
      setor: yup.string().required(),
    })
  ),
}));

export const updateByNS = async (
  req: Request<IParamProps, {}, IBodyProps>,
  res: Response
) => {
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("not implemented updateByNS");
};
