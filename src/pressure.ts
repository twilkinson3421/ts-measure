import * as Area from "./area.ts";
import * as Force from "./force.ts";
import { Measure } from "./measure.ts";
import * as Prefix from "./prefix.ts";
import { Pressure } from "./quantity.ts";

export const pascals: Measure<Pressure> = Measure.derived(Pressure, Force.newtons.value / Area.squareMetres.value);

export const decipascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.deci * pascals.value);
export const centipascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.centi * pascals.value);
export const millipascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.milli * pascals.value);
export const micropascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.micro * pascals.value);
export const nanopascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.nano * pascals.value);
export const picopascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.pico * pascals.value);
export const femtopascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.femto * pascals.value);
export const attopascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.atto * pascals.value);
export const zeptopascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.zepto * pascals.value);
export const yoctopascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.yocto * pascals.value);
export const rontopascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.ronto * pascals.value);
export const quectopascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.quecto * pascals.value);

export const decapascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.deca * pascals.value);
export const hectopascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.hecto * pascals.value);
export const kilopascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.kilo * pascals.value);
export const megapascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.mega * pascals.value);
export const gigapascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.giga * pascals.value);
export const terapascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.tera * pascals.value);
export const petapascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.peta * pascals.value);
export const exapascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.exa * pascals.value);
export const zettapascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.zetta * pascals.value);
export const yottapascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.yotta * pascals.value);
export const ronnapascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.ronna * pascals.value);
export const quettapascals: Measure<Pressure> = Measure.derived(Pressure, Prefix.quetta * pascals.value);

export const bar: Measure<Pressure> = Measure.derived(Pressure, Prefix.hecto * kilopascals.value);

export const decibar: Measure<Pressure> = Measure.derived(Pressure, Prefix.deci * bar.value);
export const centibar: Measure<Pressure> = Measure.derived(Pressure, Prefix.centi * bar.value);
export const millibar: Measure<Pressure> = Measure.derived(Pressure, Prefix.milli * bar.value);
export const microbar: Measure<Pressure> = Measure.derived(Pressure, Prefix.micro * bar.value);

export const decabar: Measure<Pressure> = Measure.derived(Pressure, Prefix.deca * bar.value);
export const hectobar: Measure<Pressure> = Measure.derived(Pressure, Prefix.hecto * bar.value);
export const kilobar: Measure<Pressure> = Measure.derived(Pressure, Prefix.kilo * bar.value);
export const megabar: Measure<Pressure> = Measure.derived(Pressure, Prefix.mega * bar.value);

export const poundsForcePerSquareInch: Measure<Pressure> = Measure.derived(Pressure, Force.poundsForce.value / Area.squareInches.value);
export const technicalAtmospheres: Measure<Pressure> = Measure.derived(Pressure, Force.kiloponds.value / Area.squareCentimetres.value);
export const standardAtmospheres: Measure<Pressure> = Measure.derived(Pressure, 101_325 * pascals.value);
export const barye: Measure<Pressure> = Measure.derived(Pressure, Force.dynes.value / Area.squareCentimetres.value);
export const pieze: Measure<Pressure> = Measure.derived(Pressure, Force.sthenes.value / Area.squareMetres.value);
