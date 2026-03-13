import { PLANCK_CONSTANT_IN_JOULE_SECONDS } from "../constants.ts";
import { Action } from "../dimensions.ts";
import { Measure } from "../measure.ts";

export const quantaOfAction: Measure<Action> = Measure.base(Action);

// SI unit

export const jouleSeconds: Measure<Action> = quantaOfAction(PLANCK_CONSTANT_IN_JOULE_SECONDS ** -1);
