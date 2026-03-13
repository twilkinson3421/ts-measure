import { ELEMENTARY_CHARGE_IN_COULOMBS } from "../constants.ts";
import { ElectricCharge } from "../dimensions.ts";
import { Measure } from "../measure.ts";

export const elementaryCharges: Measure<ElectricCharge> = Measure.base(ElectricCharge);

// SI unit

export const coulombs: Measure<ElectricCharge> = elementaryCharges(
    ELEMENTARY_CHARGE_IN_COULOMBS ** -1,
);
