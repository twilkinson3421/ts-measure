import * as ElectricCharge from "../base/electric-charge.ts";
import * as Frequency from "../base/frequency.ts";
import { ElectricCurrent } from "../dimensions.ts";
import { Measure } from "../measure.ts";

export const constantUnitOfElectricCurrent: Measure<ElectricCurrent> = Measure.derived(
    ElectricCurrent,
    ElectricCharge.elementaryCharges.valueInBaseUnits
        * Frequency.caesiumHyperfineFrequency.valueInBaseUnits,
);

// SI unit

export const amperes: Measure<ElectricCurrent> = constantUnitOfElectricCurrent(
    ElectricCharge.coulombs.valueInBaseUnits
        * Frequency.hertz.valueInBaseUnits,
);
