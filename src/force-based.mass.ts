import { kiloponds, poundsForce } from "./force.ts";
import { feet, metres } from "./length.ts";
import { Measure } from "./measure.ts";
import { Mass } from "./quantity.ts";
import { seconds } from "./time.ts";

export const slug: Measure<Mass> = Measure.derived(Mass, poundsForce.value * (seconds.value ** 2) / feet.value);
export const hyl: Measure<Mass> = Measure.derived(Mass, kiloponds.value * (seconds.value ** 2) / metres.value);
