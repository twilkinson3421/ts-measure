import { lightSeconds } from "./length.ts";
import { Measure } from "./measure.ts";
import { Length } from "./quantity.ts";
import { julianYears } from "./time.ts";

export const lightYears: Measure<Length> = Measure.derived(Length, julianYears.value * lightSeconds.value);
