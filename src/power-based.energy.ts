import { Measure } from "./measure.ts";
import { kilowatts } from "./power.ts";
import { Energy } from "./quantity.ts";
import { hours } from "./time.ts";

export const kilowattHours: Measure<Energy> = Measure.derived(Energy, kilowatts.value * hours.value);
