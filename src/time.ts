import { Measure } from "./measure.ts";
import * as Prefix from "./prefix.ts";
import { Time } from "./quantity.ts";

export const seconds: Measure<Time> = Measure.base(Time);

export const deciseconds: Measure<Time> = Measure.derived(Time, Prefix.deci * seconds.value);
export const centiseconds: Measure<Time> = Measure.derived(Time, Prefix.centi * seconds.value);
export const milliseconds: Measure<Time> = Measure.derived(Time, Prefix.milli * seconds.value);
export const microseconds: Measure<Time> = Measure.derived(Time, Prefix.micro * seconds.value);
export const nanoseconds: Measure<Time> = Measure.derived(Time, Prefix.nano * seconds.value);
export const picoseconds: Measure<Time> = Measure.derived(Time, Prefix.pico * seconds.value);
export const femtoseconds: Measure<Time> = Measure.derived(Time, Prefix.femto * seconds.value);
export const attoseconds: Measure<Time> = Measure.derived(Time, Prefix.atto * seconds.value);
export const zeptoseconds: Measure<Time> = Measure.derived(Time, Prefix.zepto * seconds.value);
export const yoctoseconds: Measure<Time> = Measure.derived(Time, Prefix.yocto * seconds.value);
export const rontoseconds: Measure<Time> = Measure.derived(Time, Prefix.ronto * seconds.value);
export const quectoseconds: Measure<Time> = Measure.derived(Time, Prefix.quecto * seconds.value);

export const decaseconds: Measure<Time> = Measure.derived(Time, Prefix.deca * seconds.value);
export const hectoseconds: Measure<Time> = Measure.derived(Time, Prefix.hecto * seconds.value);
export const kiloseconds: Measure<Time> = Measure.derived(Time, Prefix.kilo * seconds.value);
export const megaseconds: Measure<Time> = Measure.derived(Time, Prefix.mega * seconds.value);
export const gigaseconds: Measure<Time> = Measure.derived(Time, Prefix.giga * seconds.value);
export const teraseconds: Measure<Time> = Measure.derived(Time, Prefix.tera * seconds.value);
export const petaseconds: Measure<Time> = Measure.derived(Time, Prefix.peta * seconds.value);
export const examoseconds: Measure<Time> = Measure.derived(Time, Prefix.exa * seconds.value);
export const zettaseconds: Measure<Time> = Measure.derived(Time, Prefix.zetta * seconds.value);
export const yottaseconds: Measure<Time> = Measure.derived(Time, Prefix.yotta * seconds.value);
export const ronnaseconds: Measure<Time> = Measure.derived(Time, Prefix.ronna * seconds.value);
export const quettaseconds: Measure<Time> = Measure.derived(Time, Prefix.quetta * seconds.value);

export const minutes: Measure<Time> = Measure.derived(Time, 60 * seconds.value);
export const hours: Measure<Time> = Measure.derived(Time, 60 * minutes.value);
export const days: Measure<Time> = Measure.derived(Time, 24 * hours.value);
export const weeks: Measure<Time> = Measure.derived(Time, 7 * days.value);

export const simpleMonths: Measure<Time> = Measure.derived(Time, 30 * days.value);
export const simpleYears: Measure<Time> = Measure.derived(Time, 365 * days.value);
export const julianYears: Measure<Time> = Measure.derived(Time, 365.25 * days.value);

export const averageMonths: Measure<Time> = Measure.derived(Time, 30.436_875 * days.value);
export const averageYears: Measure<Time> = Measure.derived(Time, 365.2425 * days.value);
