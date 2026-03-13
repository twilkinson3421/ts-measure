import * as Action from "../base/action.ts";
import * as Frequency from "../base/frequency.ts";
import * as Velocity from "../base/velocity.ts";
import { Mass } from "../dimensions.ts";
import { Measure } from "../measure.ts";

export const constantUnitOfMass: Measure<Mass> = Measure.derived(
    Mass,
    Action.quantaOfAction.valueInBaseUnits * Frequency.caesiumHyperfineFrequency.valueInBaseUnits
        / (Velocity.speedOfLightInAVacuum.valueInBaseUnits ** 2),
);

// SI unit

export const kilograms: Measure<Mass> = constantUnitOfMass(
    Action.jouleSeconds.valueInBaseUnits * Frequency.hertz.valueInBaseUnits
        / (Velocity.metresPerSecond.valueInBaseUnits ** 2),
);
