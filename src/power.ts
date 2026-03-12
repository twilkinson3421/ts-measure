import * as Energy from "./energy.ts";
import { Measure } from "./measure.ts";
import * as Prefix from "./prefix.ts";
import { Power } from "./quantity.ts";
import * as Time from "./time.ts";

export const watts: Measure<Power> = Measure.derived(Power, Energy.joules.value / Time.seconds.value);

export const deciwatts: Measure<Power> = Measure.derived(Power, Prefix.deci * watts.value);
export const centiwatts: Measure<Power> = Measure.derived(Power, Prefix.centi * watts.value);
export const milliwatts: Measure<Power> = Measure.derived(Power, Prefix.milli * watts.value);
export const microwatts: Measure<Power> = Measure.derived(Power, Prefix.micro * watts.value);
export const nanowatts: Measure<Power> = Measure.derived(Power, Prefix.nano * watts.value);
export const picowatts: Measure<Power> = Measure.derived(Power, Prefix.pico * watts.value);
export const femtowatts: Measure<Power> = Measure.derived(Power, Prefix.femto * watts.value);
export const attowatts: Measure<Power> = Measure.derived(Power, Prefix.atto * watts.value);
export const zeptowatts: Measure<Power> = Measure.derived(Power, Prefix.zepto * watts.value);
export const yoctowatts: Measure<Power> = Measure.derived(Power, Prefix.yocto * watts.value);
export const rontowatts: Measure<Power> = Measure.derived(Power, Prefix.ronto * watts.value);
export const quectowatts: Measure<Power> = Measure.derived(Power, Prefix.quecto * watts.value);

export const decawatts: Measure<Power> = Measure.derived(Power, Prefix.deca * watts.value);
export const hectowatts: Measure<Power> = Measure.derived(Power, Prefix.hecto * watts.value);
export const kilowatts: Measure<Power> = Measure.derived(Power, Prefix.kilo * watts.value);
export const megawatts: Measure<Power> = Measure.derived(Power, Prefix.mega * watts.value);
export const gigawatts: Measure<Power> = Measure.derived(Power, Prefix.giga * watts.value);
export const terawatts: Measure<Power> = Measure.derived(Power, Prefix.tera * watts.value);
export const petawatts: Measure<Power> = Measure.derived(Power, Prefix.peta * watts.value);
export const exawatts: Measure<Power> = Measure.derived(Power, Prefix.exa * watts.value);
export const zettawatts: Measure<Power> = Measure.derived(Power, Prefix.zetta * watts.value);
export const yottawatts: Measure<Power> = Measure.derived(Power, Prefix.yotta * watts.value);
export const ronnawatts: Measure<Power> = Measure.derived(Power, Prefix.ronna * watts.value);
export const quettawatts: Measure<Power> = Measure.derived(Power, Prefix.quetta * watts.value);

export const footPoundsForcePerSecond: Measure<Power> = Measure.derived(Power, Energy.footPoundsForce.value / Time.seconds.value);
export const metricHorsepower: Measure<Power> = Measure.derived(Power, 75 * Energy.kilopondMetres.value / Time.seconds.value);
export const footPoundalsPerSecond: Measure<Power> = Measure.derived(Power, Energy.footPoundals.value / Time.seconds.value);
export const stheneMetresPerSecond: Measure<Power> = Measure.derived(Power, Energy.stheneMetres.value / Time.seconds.value);
export const ergsPerSecond: Measure<Power> = Measure.derived(Power, Energy.ergs.value / Time.seconds.value);

export const imperialHorsepower: Measure<Power> = Measure.derived(Power, 550 * footPoundsForcePerSecond.value / Time.seconds.value);
