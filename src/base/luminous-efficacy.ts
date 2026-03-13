import { LUMINOUS_EFFICACY_OF_A_DEFINED_VISIBLE_RADIATION_IN_LUMENS_PER_WATT } from "../constants.ts";
import { LuminousEfficacy } from "../dimensions.ts";
import { Measure } from "../measure.ts";

export const luminousEfficacyOfDefinedVisibleRadiation: Measure<LuminousEfficacy> = Measure.base(
    LuminousEfficacy,
);

// SI unit

export const lumensPerWatt: Measure<LuminousEfficacy> = luminousEfficacyOfDefinedVisibleRadiation(
    LUMINOUS_EFFICACY_OF_A_DEFINED_VISIBLE_RADIATION_IN_LUMENS_PER_WATT ** -1,
);
