import * as Frequency from "../base/frequency.ts";
import * as Velocity from "../base/velocity.ts";
import { Length } from "../dimensions.ts";
import { Measure } from "../measure.ts";

export const constantUnitOfLength: Measure<Length> = Measure.derived(
    Length,
    Velocity.speedOfLightInAVacuum.valueInBaseUnits
        / Frequency.caesiumHyperfineFrequency.valueInBaseUnits,
);

// SI unit

export const metres: Measure<Length> = constantUnitOfLength(
    Velocity.metresPerSecond.valueInBaseUnits / Frequency.hertz.valueInBaseUnits,
);
