import { CAESIUM_HYPERFINE_FREQUENCY_IN_HERTZ } from "../constants.ts";
import { Frequency } from "../dimensions.ts";
import { Measure } from "../measure.ts";

export const caesiumHyperfineFrequency: Measure<Frequency> = Measure.base(Frequency);

// SI unit

export const hertz: Measure<Frequency> = caesiumHyperfineFrequency(
    CAESIUM_HYPERFINE_FREQUENCY_IN_HERTZ ** -1,
);
