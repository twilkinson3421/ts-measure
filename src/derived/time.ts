import * as Frequency from "../base/frequency.ts";
import { Time } from "../dimensions.ts";
import { Measure } from "../measure.ts";

export const caesiumHyperfinePeriods: Measure<Time> = Measure.derived(
    Time,
    Frequency.caesiumHyperfineFrequency.valueInBaseUnits ** -1,
);

// SI unit

export const seconds: Measure<Time> = caesiumHyperfinePeriods(
    Frequency.hertz.valueInBaseUnits ** -1,
);
