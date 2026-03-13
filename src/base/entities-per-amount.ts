import { AVOGADRO_CONSTANT_IN_RECIPROCAL_MOLES } from "../constants.ts";
import { EntitiesPerUnitAmount } from "../dimensions.ts";
import { Measure } from "../measure.ts";

export const avogadroConstants: Measure<EntitiesPerUnitAmount> = Measure.base(
    EntitiesPerUnitAmount,
);

// SI unit

export const reciprocalMoles: Measure<EntitiesPerUnitAmount> = avogadroConstants(
    AVOGADRO_CONSTANT_IN_RECIPROCAL_MOLES ** -1,
);
