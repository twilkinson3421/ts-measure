import { Measure } from "./measure.ts";
import * as Prefix from "./prefix.ts";
import { Mass } from "./quantity.ts";

export const kilograms: Measure<Mass> = Measure.base(Mass);
export const grams: Measure<Mass> = Measure.derived(Mass, Prefix.milli * kilograms.value);

export const decigrams: Measure<Mass> = Measure.derived(Mass, Prefix.deci * grams.value);
export const centigrams: Measure<Mass> = Measure.derived(Mass, Prefix.centi * grams.value);
export const milligrams: Measure<Mass> = Measure.derived(Mass, Prefix.milli * grams.value);
export const micrograms: Measure<Mass> = Measure.derived(Mass, Prefix.micro * grams.value);
export const nanograms: Measure<Mass> = Measure.derived(Mass, Prefix.nano * grams.value);
export const picograms: Measure<Mass> = Measure.derived(Mass, Prefix.pico * grams.value);
export const femtograms: Measure<Mass> = Measure.derived(Mass, Prefix.femto * grams.value);
export const attograms: Measure<Mass> = Measure.derived(Mass, Prefix.atto * grams.value);
export const zeptograms: Measure<Mass> = Measure.derived(Mass, Prefix.zepto * grams.value);
export const yoctograms: Measure<Mass> = Measure.derived(Mass, Prefix.yocto * grams.value);
export const rontograms: Measure<Mass> = Measure.derived(Mass, Prefix.ronto * grams.value);
export const quectograms: Measure<Mass> = Measure.derived(Mass, Prefix.quecto * grams.value);

export const decagrams: Measure<Mass> = Measure.derived(Mass, Prefix.deca * grams.value);
export const hectograms: Measure<Mass> = Measure.derived(Mass, Prefix.hecto * grams.value);
export const megagrams: Measure<Mass> = Measure.derived(Mass, Prefix.mega * grams.value);
export const gigagrams: Measure<Mass> = Measure.derived(Mass, Prefix.giga * grams.value);
export const teragrams: Measure<Mass> = Measure.derived(Mass, Prefix.tera * grams.value);
export const petagrams: Measure<Mass> = Measure.derived(Mass, Prefix.peta * grams.value);
export const exagrams: Measure<Mass> = Measure.derived(Mass, Prefix.exa * grams.value);
export const zettagrams: Measure<Mass> = Measure.derived(Mass, Prefix.zetta * grams.value);
export const yottagrams: Measure<Mass> = Measure.derived(Mass, Prefix.yotta * grams.value);
export const ronnagrams: Measure<Mass> = Measure.derived(Mass, Prefix.ronna * grams.value);
export const quettagrams: Measure<Mass> = Measure.derived(Mass, Prefix.quetta * grams.value);

export const tonnes: Measure<Mass> = megagrams;
export const kilotonnes: Measure<Mass> = gigagrams;
export const megatonnes: Measure<Mass> = teragrams;
export const gigatonnes: Measure<Mass> = petagrams;

export const grains: Measure<Mass> = Measure.derived(Mass, 54.798_91 * milligrams.value);
export const pounds: Measure<Mass> = Measure.derived(Mass, 0.453_592_37 * kilograms.value);
export const ounces: Measure<Mass> = Measure.derived(Mass, 0.0625 * pounds.value);
export const drams: Measure<Mass> = Measure.derived(Mass, 0.0625 * ounces.value);
export const stone: Measure<Mass> = Measure.derived(Mass, 14 * pounds.value);
export const shortHundredweight: Measure<Mass> = Measure.derived(Mass, 100 * pounds.value);
export const longHundredweight: Measure<Mass> = Measure.derived(Mass, 112 * pounds.value);
export const shortTons: Measure<Mass> = Measure.derived(Mass, 20 * shortHundredweight.value);
export const longTons: Measure<Mass> = Measure.derived(Mass, 20 * longHundredweight.value);
