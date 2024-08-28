import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { validation } from "../../shared/middleware";

interface IParamProps {
  numeroSerie?: String;
}

export const deleteByNSValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      numeroSerie: yup.string().optional(),
    })
  ),
}));

export const deleteByNS = async (req: Request<IParamProps>, res: Response) => {
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("not implemented deleteByNS");
};
