import * as create from "./Create";
import * as getAll from "./GetAll";
import * as getByNS from "./GetByNS";
import * as deleteByNS from "./DeleteByNS";
import * as updateByNS from "./UpdateByNS";

export const ComputadorController = {
  ...create,
  ...getAll,
  ...getByNS,
  ...deleteByNS,
  ...updateByNS,
};
