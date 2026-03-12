import * as ElectricCurrent from "./electric-current.ts";
import { Measure } from "./measure.ts";
import * as Power from "./power.ts";
import * as Prefix from "./prefix.ts";
import { ElectricPotentialDifference } from "./quantity.ts";

export const volts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Power.watts.value / ElectricCurrent.amperes.value);

export const decivolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.deci * volts.value);
export const centivolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.centi * volts.value);
export const millivolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.milli * volts.value);
export const microvolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.micro * volts.value);
export const nanovolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.nano * volts.value);
export const picovolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.pico * volts.value);
export const femtovolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.femto * volts.value);
export const attovolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.atto * volts.value);
export const zeptovolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.zepto * volts.value);
export const yoctovolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.yocto * volts.value);
export const rontovolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.ronto * volts.value);
export const quectovolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.quecto * volts.value);

export const decavolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.deca * volts.value);
export const hectovolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.hecto * volts.value);
export const kilovolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.kilo * volts.value);
export const megavolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.mega * volts.value);
export const gigavolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.giga * volts.value);
export const teravolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.tera * volts.value);
export const petavolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.peta * volts.value);
export const exavolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.exa * volts.value);
export const zettavolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.zetta * volts.value);
export const yottavolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.yotta * volts.value);
export const ronnavolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.ronna * volts.value);
export const quettavolts: Measure<ElectricPotentialDifference> = Measure.derived(ElectricPotentialDifference, Prefix.quetta * volts.value);
