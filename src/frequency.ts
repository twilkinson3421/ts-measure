import { Measure } from "./measure.ts";
import * as Prefix from "./prefix.ts";
import { Frequency } from "./quantity.ts";
import * as Time from "./time.ts";

export const hertz: Measure<Frequency> = Measure.derived(Frequency, Time.seconds.value ** -1);

export const decihertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.deci * hertz.value);
export const centihertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.centi * hertz.value);
export const millihertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.milli * hertz.value);
export const microhertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.micro * hertz.value);
export const nanohertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.nano * hertz.value);
export const picohertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.pico * hertz.value);
export const femtohertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.femto * hertz.value);
export const attohertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.atto * hertz.value);
export const zeptohertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.zepto * hertz.value);
export const yoctohertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.yocto * hertz.value);
export const rontohertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.ronto * hertz.value);
export const quectohertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.quecto * hertz.value);

export const decahertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.deca * hertz.value);
export const hectohertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.hecto * hertz.value);
export const kilohertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.kilo * hertz.value);
export const megahertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.mega * hertz.value);
export const gigahertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.giga * hertz.value);
export const terahertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.tera * hertz.value);
export const petahertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.peta * hertz.value);
export const exahertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.exa * hertz.value);
export const zettahertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.zetta * hertz.value);
export const yottahertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.yotta * hertz.value);
export const ronnahertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.ronna * hertz.value);
export const quettahertz: Measure<Frequency> = Measure.derived(Frequency, Prefix.quetta * hertz.value);
