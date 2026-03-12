import { Measure } from "./measure.ts";
import * as Prefix from "./prefix.ts";
import { Length } from "./quantity.ts";

export const metres: Measure<Length> = Measure.base(Length);

export const decimetres: Measure<Length> = Measure.derived(Length, Prefix.deci * metres.value);
export const centimetres: Measure<Length> = Measure.derived(Length, Prefix.centi * metres.value);
export const millimetres: Measure<Length> = Measure.derived(Length, Prefix.milli * metres.value);
export const micrometres: Measure<Length> = Measure.derived(Length, Prefix.micro * metres.value);
export const nanometres: Measure<Length> = Measure.derived(Length, Prefix.nano * metres.value);
export const picometres: Measure<Length> = Measure.derived(Length, Prefix.pico * metres.value);
export const femtometres: Measure<Length> = Measure.derived(Length, Prefix.femto * metres.value);
export const attometres: Measure<Length> = Measure.derived(Length, Prefix.atto * metres.value);
export const zeptometres: Measure<Length> = Measure.derived(Length, Prefix.zepto * metres.value);
export const yoctometres: Measure<Length> = Measure.derived(Length, Prefix.yocto * metres.value);
export const rontometres: Measure<Length> = Measure.derived(Length, Prefix.ronto * metres.value);
export const quectometres: Measure<Length> = Measure.derived(Length, Prefix.quecto * metres.value);

export const decametres: Measure<Length> = Measure.derived(Length, Prefix.deca * metres.value);
export const hectometres: Measure<Length> = Measure.derived(Length, Prefix.hecto * metres.value);
export const kilometres: Measure<Length> = Measure.derived(Length, Prefix.kilo * metres.value);
export const megametres: Measure<Length> = Measure.derived(Length, Prefix.mega * metres.value);
export const gigametres: Measure<Length> = Measure.derived(Length, Prefix.giga * metres.value);
export const terametres: Measure<Length> = Measure.derived(Length, Prefix.tera * metres.value);
export const petametres: Measure<Length> = Measure.derived(Length, Prefix.peta * metres.value);
export const exametres: Measure<Length> = Measure.derived(Length, Prefix.exa * metres.value);
export const zettametres: Measure<Length> = Measure.derived(Length, Prefix.zetta * metres.value);
export const yottametres: Measure<Length> = Measure.derived(Length, Prefix.yotta * metres.value);
export const ronnametres: Measure<Length> = Measure.derived(Length, Prefix.ronna * metres.value);
export const quettametres: Measure<Length> = Measure.derived(Length, Prefix.quetta * metres.value);

export const inches: Measure<Length> = Measure.derived(Length, 0.0254 * metres.value);
export const yards: Measure<Length> = Measure.derived(Length, 0.9144 * metres.value);
export const feet: Measure<Length> = Measure.derived(Length, 12 * inches.value);
export const thou: Measure<Length> = Measure.derived(Length, Prefix.milli * inches.value);
export const hands: Measure<Length> = Measure.derived(Length, 4 * inches.value);
export const chains: Measure<Length> = Measure.derived(Length, 66 * feet.value);
export const furlongs: Measure<Length> = Measure.derived(Length, 10 * chains.value);
export const miles: Measure<Length> = Measure.derived(Length, 5280 * feet.value);
export const leagues: Measure<Length> = Measure.derived(Length, 3 * miles.value);

export const fathoms: Measure<Length> = Measure.derived(Length, 6 * feet.value);
export const nauticalMiles: Measure<Length> = Measure.derived(Length, 1852 * metres.value);
export const cables: Measure<Length> = Measure.derived(Length, Prefix.deci * nauticalMiles.value);

export const lightSeconds: Measure<Length> = Measure.derived(Length, 299_792_458 * metres.value);

export const astronomicalUnits: Measure<Length> = Measure.derived(Length, 149_597_870_700 * metres.value);
