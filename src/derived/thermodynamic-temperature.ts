import * as Action from "../base/action.ts";
import * as Entropy from "../base/entropy.ts";
import * as Frequency from "../base/frequency.ts";
import { ThermodynamicTemperature } from "../dimensions.ts";
import { Measure } from "../measure.ts";

export const constantUnitOfThermodynamicTemperature: Measure<ThermodynamicTemperature> = Measure
    .derived(
        ThermodynamicTemperature,
        Action.quantaOfAction.valueInBaseUnits
            * Frequency.caesiumHyperfineFrequency.valueInBaseUnits
            / Entropy.boltzmannConstants.valueInBaseUnits,
    );

// SI unit

export const kelvins: Measure<ThermodynamicTemperature> = constantUnitOfThermodynamicTemperature(
    Action.jouleSeconds.valueInBaseUnits
        * Frequency.hertz.valueInBaseUnits
        / Entropy.joulesPerKelvin.valueInBaseUnits,
);
