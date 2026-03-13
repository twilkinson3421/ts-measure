import { SPEED_OF_LIGHT_IN_VACUUM_IN_METRES_PER_SECOND } from "../constants.ts";
import { Velocity } from "../dimensions.ts";
import { Measure } from "../measure.ts";

export const speedOfLightInAVacuum: Measure<Velocity> = Measure.base(Velocity);

// SI unit

export const metresPerSecond: Measure<Velocity> = speedOfLightInAVacuum(
    SPEED_OF_LIGHT_IN_VACUUM_IN_METRES_PER_SECOND ** -1,
);
