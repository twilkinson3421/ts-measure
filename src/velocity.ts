import * as Length from "./length.ts";
import { Measure } from "./measure.ts";
import { Velocity } from "./quantity.ts";
import * as Time from "./time.ts";

export const metresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.metres.value / Time.seconds.value);

export const decimetresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.decimetres.value / Time.seconds.value);
export const centimetresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.centimetres.value / Time.seconds.value);
export const millimetresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.millimetres.value / Time.seconds.value);
export const micrometresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.micrometres.value / Time.seconds.value);
export const nanometresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.nanometres.value / Time.seconds.value);
export const picometresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.picometres.value / Time.seconds.value);
export const femtometresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.femtometres.value / Time.seconds.value);
export const attometresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.attometres.value / Time.seconds.value);
export const zeptometresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.zeptometres.value / Time.seconds.value);
export const yoctometresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.yoctometres.value / Time.seconds.value);
export const rontometresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.rontometres.value / Time.seconds.value);
export const quectometresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.quectometres.value / Time.seconds.value);

export const decametresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.decametres.value / Time.seconds.value);
export const hectometresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.hectometres.value / Time.seconds.value);
export const kilometresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.kilometres.value / Time.seconds.value);
export const megametresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.megametres.value / Time.seconds.value);
export const gigametresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.gigametres.value / Time.seconds.value);
export const terametresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.terametres.value / Time.seconds.value);
export const petametresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.petametres.value / Time.seconds.value);
export const exametresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.exametres.value / Time.seconds.value);
export const zettametresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.zettametres.value / Time.seconds.value);
export const yottametresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.yottametres.value / Time.seconds.value);
export const ronnametresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.ronnametres.value / Time.seconds.value);
export const quettametresPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.quettametres.value / Time.seconds.value);

export const metresPerHour: Measure<Velocity> = Measure.derived(Velocity, Length.metres.value / Time.hours.value);

export const decimetresPerHour: Measure<Velocity> = Measure.derived(Velocity, Length.decimetres.value / Time.hours.value);
export const centimetresPerHour: Measure<Velocity> = Measure.derived(Velocity, Length.centimetres.value / Time.hours.value);
export const millimetresPerHour: Measure<Velocity> = Measure.derived(Velocity, Length.millimetres.value / Time.hours.value);

export const decametresPerHour: Measure<Velocity> = Measure.derived(Velocity, Length.decametres.value / Time.hours.value);
export const hectometresPerHour: Measure<Velocity> = Measure.derived(Velocity, Length.hectometres.value / Time.hours.value);
export const kilometresPerHour: Measure<Velocity> = Measure.derived(Velocity, Length.kilometres.value / Time.hours.value);

export const inchesPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.inches.value / Time.seconds.value);
export const yardsPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.yards.value / Time.seconds.value);
export const feetPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.feet.value / Time.seconds.value);
export const milesPerSecond: Measure<Velocity> = Measure.derived(Velocity, Length.miles.value / Time.seconds.value);

export const inchesPerHour: Measure<Velocity> = Measure.derived(Velocity, Length.inches.value / Time.hours.value);
export const yardsPerHour: Measure<Velocity> = Measure.derived(Velocity, Length.yards.value / Time.hours.value);
export const feetPerHour: Measure<Velocity> = Measure.derived(Velocity, Length.feet.value / Time.hours.value);
export const milesPerHour: Measure<Velocity> = Measure.derived(Velocity, Length.miles.value / Time.hours.value);

export const knots: Measure<Velocity> = Measure.derived(Velocity, Length.nauticalMiles.value / Time.hours.value);

export const speedOfLight: Measure<Velocity> = Measure.derived(Velocity, Length.lightSeconds.value / Time.seconds.value);
