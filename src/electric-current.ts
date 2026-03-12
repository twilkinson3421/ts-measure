import { Measure } from "./measure.ts";
import * as Prefix from "./prefix.ts";
import { ElectricCurrent } from "./quantity.ts";

export const amperes: Measure<ElectricCurrent> = Measure.base(ElectricCurrent);

export const deciamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.deci * amperes.value);
export const centiamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.centi * amperes.value);
export const milliamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.milli * amperes.value);
export const microamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.micro * amperes.value);
export const nanoamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.nano * amperes.value);
export const picoamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.pico * amperes.value);
export const femtoamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.femto * amperes.value);
export const attoamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.atto * amperes.value);
export const zeptoamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.zepto * amperes.value);
export const yoctoamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.yocto * amperes.value);
export const rontoamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.ronto * amperes.value);
export const quectoamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.quecto * amperes.value);

export const decaamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.deca * amperes.value);
export const hectoamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.hecto * amperes.value);
export const kiloamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.kilo * amperes.value);
export const megaamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.mega * amperes.value);
export const gigaamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.giga * amperes.value);
export const teraamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.tera * amperes.value);
export const petaamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.peta * amperes.value);
export const exaamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.exa * amperes.value);
export const zettaamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.zetta * amperes.value);
export const yottaamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.yotta * amperes.value);
export const ronnaamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.ronna * amperes.value);
export const quettaamperes: Measure<ElectricCurrent> = Measure.derived(ElectricCurrent, Prefix.quetta * amperes.value);
