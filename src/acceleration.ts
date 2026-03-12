import { Measure } from "./measure.ts";
import { Acceleration } from "./quantity.ts";
import * as Time from "./time.ts";
import * as Velocity from "./velocity.ts";

export const metresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.metresPerSecond.value / Time.seconds.value);

export const decimetresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.decimetresPerSecond.value / Time.seconds.value);
export const centimetresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.centimetresPerSecond.value / Time.seconds.value);
export const millimetresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.millimetresPerSecond.value / Time.seconds.value);
export const micrometresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.micrometresPerSecond.value / Time.seconds.value);
export const nanometresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.nanometresPerSecond.value / Time.seconds.value);
export const picometresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.picometresPerSecond.value / Time.seconds.value);
export const femtometresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.femtometresPerSecond.value / Time.seconds.value);
export const attometresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.attometresPerSecond.value / Time.seconds.value);
export const zeptometresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.zeptometresPerSecond.value / Time.seconds.value);
export const yoctometresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.yoctometresPerSecond.value / Time.seconds.value);
export const rontometresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.rontometresPerSecond.value / Time.seconds.value);
export const quectometresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.quectometresPerSecond.value / Time.seconds.value);

export const decametresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.decametresPerSecond.value / Time.seconds.value);
export const hectometresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.hectometresPerSecond.value / Time.seconds.value);
export const kilometresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.kilometresPerSecond.value / Time.seconds.value);
export const megametresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.megametresPerSecond.value / Time.seconds.value);
export const gigametresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.gigametresPerSecond.value / Time.seconds.value);
export const terametresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.terametresPerSecond.value / Time.seconds.value);
export const petametresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.petametresPerSecond.value / Time.seconds.value);
export const exametresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.exametresPerSecond.value / Time.seconds.value);
export const zettametresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.zettametresPerSecond.value / Time.seconds.value);
export const yottametresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.yottametresPerSecond.value / Time.seconds.value);
export const ronnametresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.ronnametresPerSecond.value / Time.seconds.value);
export const quettametresPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.quettametresPerSecond.value / Time.seconds.value);

export const metresPerHourPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.metresPerHour.value / Time.seconds.value);

export const decimetresPerHourPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.decimetresPerHour.value / Time.seconds.value);
export const centimetresPerHourPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.centimetresPerHour.value / Time.seconds.value);
export const millimetresPerHourPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.millimetresPerHour.value / Time.seconds.value);

export const decametresPerHourPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.decametresPerHour.value / Time.seconds.value);
export const hectometresPerHourPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.hectometresPerHour.value / Time.seconds.value);
export const kilometresPerHourPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.kilometresPerHour.value / Time.seconds.value);

export const metresPerSecondPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.metresPerSecond.value / Time.hours.value);

export const decimetresPerSecondPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.decimetresPerSecond.value / Time.hours.value);
export const centimetresPerSecondPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.centimetresPerSecond.value / Time.hours.value);
export const millimetresPerSecondPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.millimetresPerSecond.value / Time.hours.value);

export const decametresPerSecondPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.decametresPerSecond.value / Time.hours.value);
export const hectometresPerSecondPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.hectometresPerSecond.value / Time.hours.value);
export const kilometresPerSecondPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.kilometresPerSecond.value / Time.hours.value);

export const metresPerHourPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.metresPerHour.value / Time.hours.value);

export const decimetresPerHourPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.decimetresPerHour.value / Time.hours.value);
export const centimetresPerHourPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.centimetresPerHour.value / Time.hours.value);
export const millimetresPerHourPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.millimetresPerHour.value / Time.hours.value);

export const decametresPerHourPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.decametresPerHour.value / Time.hours.value);
export const hectometresPerHourPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.hectometresPerHour.value / Time.hours.value);
export const kilometresPerHourPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.kilometresPerHour.value / Time.hours.value);

export const inchesPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.inchesPerSecond.value / Time.seconds.value);
export const yardsPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.yardsPerSecond.value / Time.seconds.value);
export const feetPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.feetPerSecond.value / Time.seconds.value);
export const milesPerSecondPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.milesPerSecond.value / Time.seconds.value);

export const inchesPerSecondPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.inchesPerSecond.value / Time.hours.value);
export const yardsPerSecondPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.yardsPerSecond.value / Time.hours.value);
export const feetPerSecondPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.feetPerSecond.value / Time.hours.value);
export const milesPerSecondPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.milesPerSecond.value / Time.hours.value);

export const inchesPerHourPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.inchesPerHour.value / Time.seconds.value);
export const yardsPerHourPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.yardsPerHour.value / Time.seconds.value);
export const feetPerHourPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.feetPerHour.value / Time.seconds.value);
export const milesPerHourPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.milesPerHour.value / Time.seconds.value);

export const inchesPerHourPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.inchesPerHour.value / Time.hours.value);
export const yardsPerHourPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.yardsPerHour.value / Time.hours.value);
export const feetPerHourPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.feetPerHour.value / Time.hours.value);
export const milesPerHourPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.milesPerHour.value / Time.hours.value);

export const knotsPerSecond: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.knots.value / Time.seconds.value);
export const knotsPerHour: Measure<Acceleration> = Measure.derived(Acceleration, Velocity.knots.value / Time.hours.value);

export const standardGravity: Measure<Acceleration> = Measure.derived(Acceleration, 9.80665 * metresPerSecondPerSecond.value);

export const galileo: Measure<Acceleration> = centimetresPerSecondPerSecond;
