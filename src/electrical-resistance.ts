import * as ElectricCurrent from "./electric-current.ts";
import * as ElectricPotentialDifference from "./electric-potential-difference.ts";
import { Measure } from "./measure.ts";
import * as Prefix from "./prefix.ts";
import { ElectricalResistance } from "./quantity.ts";

export const ohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, ElectricPotentialDifference.volts.value / ElectricCurrent.amperes.value);

export const deciohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.deci * ohms.value);
export const centiohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.centi * ohms.value);
export const milliohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.milli * ohms.value);
export const microohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.micro * ohms.value);
export const nanoohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.nano * ohms.value);
export const picoohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.pico * ohms.value);
export const femtoohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.femto * ohms.value);
export const attoohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.atto * ohms.value);
export const zeptoohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.zepto * ohms.value);
export const yoctoohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.yocto * ohms.value);
export const rontoohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.ronto * ohms.value);
export const quectoohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.quecto * ohms.value);

export const decaohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.deca * ohms.value);
export const hectoohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.hecto * ohms.value);
export const kiloohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.kilo * ohms.value);
export const megaohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.mega * ohms.value);
export const gigaohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.giga * ohms.value);
export const teraohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.tera * ohms.value);
export const petaohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.peta * ohms.value);
export const exaohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.exa * ohms.value);
export const zettaohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.zetta * ohms.value);
export const yottaohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.yotta * ohms.value);
export const ronnaohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.ronna * ohms.value);
export const quettaohms: Measure<ElectricalResistance> = Measure.derived(ElectricalResistance, Prefix.quetta * ohms.value);
