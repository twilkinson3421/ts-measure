import { BOLTZMANN_CONSTANT_IN_JOULES_PER_KELVIN } from "../constants.ts";
import { Entropy } from "../dimensions.ts";
import { Measure } from "../measure.ts";

export const boltzmannConstants: Measure<Entropy> = Measure.base(Entropy);

// SI unit

export const joulesPerKelvin: Measure<Entropy> = boltzmannConstants(
    BOLTZMANN_CONSTANT_IN_JOULES_PER_KELVIN ** -1,
);
