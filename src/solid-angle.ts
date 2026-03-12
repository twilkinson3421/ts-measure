import * as Area from "./area.ts";
import { Measure } from "./measure.ts";
import * as Prefix from "./prefix.ts";
import { SolidAngle } from "./quantity.ts";

export const steradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Area.squareMetres.value / Area.squareMetres.value);

export const decisteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.deci * steradians.value);
export const centisteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.centi * steradians.value);
export const millisteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.milli * steradians.value);
export const microsteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.micro * steradians.value);
export const nanosteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.nano * steradians.value);
export const picosteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.pico * steradians.value);
export const femtosteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.femto * steradians.value);
export const attosteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.atto * steradians.value);
export const zeptosteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.zepto * steradians.value);
export const yoctosteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.yocto * steradians.value);
export const rontosteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.ronto * steradians.value);
export const quectosteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.quecto * steradians.value);

export const decasteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.deca * steradians.value);
export const hectosteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.hecto * steradians.value);
export const kilosteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.kilo * steradians.value);
export const megasteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.mega * steradians.value);
export const gigasteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.giga * steradians.value);
export const terasteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.tera * steradians.value);
export const petasteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.peta * steradians.value);
export const exasteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.exa * steradians.value);
export const zettasteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.zetta * steradians.value);
export const yottasteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.yotta * steradians.value);
export const ronnasteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.ronna * steradians.value);
export const quettasteradians: Measure<SolidAngle> = Measure.derived(SolidAngle, Prefix.quetta * steradians.value);
