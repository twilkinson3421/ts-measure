import * as Acceleration from "./acceleration.ts";
import * as Mass from "./mass.ts";
import { Measure } from "./measure.ts";
import * as Prefix from "./prefix.ts";
import { Force } from "./quantity.ts";

export const newtons: Measure<Force> = Measure.derived(Force, Mass.kilograms.value * Acceleration.metresPerSecondPerSecond.value);

export const decinewtons: Measure<Force> = Measure.derived(Force, Prefix.deci * newtons.value);
export const centinewtons: Measure<Force> = Measure.derived(Force, Prefix.centi * newtons.value);
export const millinewtons: Measure<Force> = Measure.derived(Force, Prefix.milli * newtons.value);
export const micronewtons: Measure<Force> = Measure.derived(Force, Prefix.micro * newtons.value);
export const nanonewtons: Measure<Force> = Measure.derived(Force, Prefix.nano * newtons.value);
export const piconewtons: Measure<Force> = Measure.derived(Force, Prefix.pico * newtons.value);
export const femtonewtons: Measure<Force> = Measure.derived(Force, Prefix.femto * newtons.value);
export const attonewtons: Measure<Force> = Measure.derived(Force, Prefix.atto * newtons.value);
export const zeptonewtons: Measure<Force> = Measure.derived(Force, Prefix.zepto * newtons.value);
export const yoctonewtons: Measure<Force> = Measure.derived(Force, Prefix.yocto * newtons.value);
export const rontonewtons: Measure<Force> = Measure.derived(Force, Prefix.ronto * newtons.value);
export const quectonewtons: Measure<Force> = Measure.derived(Force, Prefix.quecto * newtons.value);

export const decanewtons: Measure<Force> = Measure.derived(Force, Prefix.deca * newtons.value);
export const hectonewtons: Measure<Force> = Measure.derived(Force, Prefix.hecto * newtons.value);
export const kilonewtons: Measure<Force> = Measure.derived(Force, Prefix.kilo * newtons.value);
export const meganewtons: Measure<Force> = Measure.derived(Force, Prefix.mega * newtons.value);
export const giganewtons: Measure<Force> = Measure.derived(Force, Prefix.giga * newtons.value);
export const teranewtons: Measure<Force> = Measure.derived(Force, Prefix.tera * newtons.value);
export const petanewtons: Measure<Force> = Measure.derived(Force, Prefix.peta * newtons.value);
export const exanewtons: Measure<Force> = Measure.derived(Force, Prefix.exa * newtons.value);
export const zettanewtons: Measure<Force> = Measure.derived(Force, Prefix.zetta * newtons.value);
export const yottanewtons: Measure<Force> = Measure.derived(Force, Prefix.yotta * newtons.value);
export const ronnanewtons: Measure<Force> = Measure.derived(Force, Prefix.ronna * newtons.value);
export const quettanewtons: Measure<Force> = Measure.derived(Force, Prefix.quetta * newtons.value);

export const poundsForce: Measure<Force> = Measure.derived(Force, Mass.pounds.value * Acceleration.standardGravity.value);
export const kiloponds: Measure<Force> = Measure.derived(Force, Mass.kilograms.value * Acceleration.standardGravity.value);
export const poundals: Measure<Force> = Measure.derived(Force, Mass.pounds.value * Acceleration.feetPerSecondPerSecond.value);
export const dynes: Measure<Force> = Measure.derived(Force, Mass.grams.value * Acceleration.centimetresPerSecondPerSecond.value);
export const sthenes: Measure<Force> = Measure.derived(Force, Mass.tonnes.value * Acceleration.metresPerSecondPerSecond.value);
