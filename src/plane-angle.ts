import { Measure } from "./measure.ts";
import * as Prefix from "./prefix.ts";
import { PlaneAngle } from "./quantity.ts";

export const radians: Measure<PlaneAngle> = Measure.base(PlaneAngle);

export const deciradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.deci * radians.value);
export const centiradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.centi * radians.value);
export const milliradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.milli * radians.value);
export const microradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.micro * radians.value);
export const nanoradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.nano * radians.value);
export const picoradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.pico * radians.value);
export const femtoradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.femto * radians.value);
export const attoradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.atto * radians.value);
export const zeptoradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.zepto * radians.value);
export const yoctoradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.yocto * radians.value);
export const rontoradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.ronto * radians.value);
export const quectoradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.quecto * radians.value);

export const decaradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.deca * radians.value);
export const hectoradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.hecto * radians.value);
export const kiloradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.kilo * radians.value);
export const megaradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.mega * radians.value);
export const gigaradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.giga * radians.value);
export const teraradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.tera * radians.value);
export const petaradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.peta * radians.value);
export const exaradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.exa * radians.value);
export const zettaradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.zetta * radians.value);
export const yottaradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.yotta * radians.value);
export const ronnaradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.ronna * radians.value);
export const quettaradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.quetta * radians.value);

export const degrees: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Math.PI / 180 * radians.value);
export const gradians: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Math.PI / 200 * radians.value);
export const turns: Measure<PlaneAngle> = Measure.derived(PlaneAngle, 2 * Math.PI * radians.value);
export const halfTurns: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Math.PI * radians.value);
export const quadrants: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Math.PI / 2 * radians.value);
export const sextants: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Math.PI / 6 * radians.value);
export const octants: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Math.PI / 8 * radians.value);

export const arcminutes: Measure<PlaneAngle> = Measure.derived(PlaneAngle, degrees.value / 60);
export const arcseconds: Measure<PlaneAngle> = Measure.derived(PlaneAngle, arcminutes.value / 60);

export const deciarcseconds: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.deci * arcseconds.value);
export const centiarcseconds: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.centi * arcseconds.value);
export const milliarcseconds: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.milli * arcseconds.value);
export const microarcseconds: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.micro * arcseconds.value);
export const nanoarcseconds: Measure<PlaneAngle> = Measure.derived(PlaneAngle, Prefix.nano * arcseconds.value);
