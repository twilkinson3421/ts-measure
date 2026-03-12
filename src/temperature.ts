import { Measure } from "./measure.ts";
import * as Prefix from "./prefix.ts";
import { Temperature } from "./quantity.ts";

export const kelvin: Measure<Temperature> = Measure.base(Temperature);

export const decikelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.deci * kelvin.value);
export const centikelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.centi * kelvin.value);
export const millikelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.milli * kelvin.value);
export const microkelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.micro * kelvin.value);
export const nanokelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.nano * kelvin.value);
export const picokelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.pico * kelvin.value);
export const femtokelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.femto * kelvin.value);
export const attokelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.atto * kelvin.value);
export const zeptokelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.zepto * kelvin.value);
export const yoctokelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.yocto * kelvin.value);
export const rontokelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.ronto * kelvin.value);
export const quectokelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.quecto * kelvin.value);

export const decakelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.deca * kelvin.value);
export const hectokelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.hecto * kelvin.value);
export const kilokelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.kilo * kelvin.value);
export const megakelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.mega * kelvin.value);
export const gigakelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.giga * kelvin.value);
export const terakelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.tera * kelvin.value);
export const petakelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.peta * kelvin.value);
export const exakelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.exa * kelvin.value);
export const zettakelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.zetta * kelvin.value);
export const yottakelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.yotta * kelvin.value);
export const ronnakelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.ronna * kelvin.value);
export const quettakelvin: Measure<Temperature> = Measure.derived(Temperature, Prefix.quetta * kelvin.value);

export const rankine: Measure<Temperature> = Measure.derived(Temperature, (5 / 9) * kelvin.value);

export const celsius: Measure<Temperature> = Measure.custom(
    Temperature,
    (celsiusValue) => celsiusValue + 273.15,
    (kelvinValue) => kelvinValue - 273.15,
);

export const fahrenheit: Measure<Temperature> = Measure.custom(
    Temperature,
    (fahrenheitValue) => (fahrenheitValue + 459.67) * rankine.value,
    (kelvinValue) => (kelvinValue / rankine.value) - 459.67,
);
