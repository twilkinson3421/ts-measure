import * as Area from "./area.ts";
import * as Force from "./force.ts";
import * as Length from "./length.ts";
import * as Mass from "./mass.ts";
import { Measure } from "./measure.ts";
import * as Prefix from "./prefix.ts";
import { Energy } from "./quantity.ts";
import * as Time from "./time.ts";

export const joules: Measure<Energy> = Measure.derived(Energy, Mass.kilograms.value * Area.squareMetres.value * (Time.seconds.value ** -2));

export const decijoules: Measure<Energy> = Measure.derived(Energy, Prefix.deci * joules.value);
export const centijoules: Measure<Energy> = Measure.derived(Energy, Prefix.centi * joules.value);
export const millijoules: Measure<Energy> = Measure.derived(Energy, Prefix.milli * joules.value);
export const microjoules: Measure<Energy> = Measure.derived(Energy, Prefix.micro * joules.value);
export const nanojoules: Measure<Energy> = Measure.derived(Energy, Prefix.nano * joules.value);
export const picojoules: Measure<Energy> = Measure.derived(Energy, Prefix.pico * joules.value);
export const femtojoules: Measure<Energy> = Measure.derived(Energy, Prefix.femto * joules.value);
export const attojoules: Measure<Energy> = Measure.derived(Energy, Prefix.atto * joules.value);
export const zeptojoules: Measure<Energy> = Measure.derived(Energy, Prefix.zepto * joules.value);
export const yoctojoules: Measure<Energy> = Measure.derived(Energy, Prefix.yocto * joules.value);
export const rontojoules: Measure<Energy> = Measure.derived(Energy, Prefix.ronto * joules.value);
export const quectojoules: Measure<Energy> = Measure.derived(Energy, Prefix.quecto * joules.value);

export const decajoules: Measure<Energy> = Measure.derived(Energy, Prefix.deca * joules.value);
export const hectojoules: Measure<Energy> = Measure.derived(Energy, Prefix.hecto * joules.value);
export const kilojoules: Measure<Energy> = Measure.derived(Energy, Prefix.kilo * joules.value);
export const megajoules: Measure<Energy> = Measure.derived(Energy, Prefix.mega * joules.value);
export const gigajoules: Measure<Energy> = Measure.derived(Energy, Prefix.giga * joules.value);
export const terajoules: Measure<Energy> = Measure.derived(Energy, Prefix.tera * joules.value);
export const petajoules: Measure<Energy> = Measure.derived(Energy, Prefix.peta * joules.value);
export const exajoules: Measure<Energy> = Measure.derived(Energy, Prefix.exa * joules.value);
export const zettajoules: Measure<Energy> = Measure.derived(Energy, Prefix.zetta * joules.value);
export const yottajoules: Measure<Energy> = Measure.derived(Energy, Prefix.yotta * joules.value);
export const ronnajoules: Measure<Energy> = Measure.derived(Energy, Prefix.ronna * joules.value);
export const quettajoules: Measure<Energy> = Measure.derived(Energy, Prefix.quetta * joules.value);

export const calories: Measure<Energy> = Measure.derived(Energy, 4.184 * joules.value);
export const kilocalories: Measure<Energy> = Measure.derived(Energy, Prefix.kilo * calories.value);

export const footPoundsForce: Measure<Energy> = Measure.derived(Energy, Force.poundsForce.value * Length.feet.value);
export const kilopondMetres: Measure<Energy> = Measure.derived(Energy, Force.kiloponds.value * Length.metres.value);
export const footPoundals: Measure<Energy> = Measure.derived(Energy, Force.poundals.value * Length.feet.value);
export const stheneMetres: Measure<Energy> = Measure.derived(Energy, Force.sthenes.value * Length.metres.value);
export const ergs: Measure<Energy> = Measure.derived(Energy, Force.dynes.value * Length.centimetres.value);

export const electronvolts: Measure<Energy> = Measure.derived(Energy, 1.602_176_634e-19 * joules.value);

export const decielectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.deci * electronvolts.value);
export const centielectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.centi * electronvolts.value);
export const millielectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.milli * electronvolts.value);
export const microelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.micro * electronvolts.value);
export const nanoelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.nano * electronvolts.value);
export const picoelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.pico * electronvolts.value);
export const femtoelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.femto * electronvolts.value);
export const attoelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.atto * electronvolts.value);
export const zeptoelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.zepto * electronvolts.value);
export const yoctoelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.yocto * electronvolts.value);
export const rontoelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.ronto * electronvolts.value);
export const quectoelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.quecto * electronvolts.value);

export const decaelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.deca * electronvolts.value);
export const hectoelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.hecto * electronvolts.value);
export const kiloelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.kilo * electronvolts.value);
export const megaelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.mega * electronvolts.value);
export const gigaelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.giga * electronvolts.value);
export const teraelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.tera * electronvolts.value);
export const petaelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.peta * electronvolts.value);
export const exaelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.exa * electronvolts.value);
export const zettaelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.zetta * electronvolts.value);
export const yottaelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.yotta * electronvolts.value);
export const ronnaelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.ronna * electronvolts.value);
export const quettaelectronvolts: Measure<Energy> = Measure.derived(Energy, Prefix.quetta * electronvolts.value);
