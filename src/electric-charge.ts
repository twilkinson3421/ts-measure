import * as ElectricCurrent from "./electric-current.ts";
import { Measure } from "./measure.ts";
import * as Prefix from "./prefix.ts";
import { ElectricCharge } from "./quantity.ts";
import * as Time from "./time.ts";

export const coulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, ElectricCurrent.amperes.value * Time.seconds.value);

export const decicoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.deci * coulombs.value);
export const centicoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.centi * coulombs.value);
export const millicoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.milli * coulombs.value);
export const microcoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.micro * coulombs.value);
export const nanocoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.nano * coulombs.value);
export const picocoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.pico * coulombs.value);
export const femtocoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.femto * coulombs.value);
export const attocoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.atto * coulombs.value);
export const zeptocoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.zepto * coulombs.value);
export const yoctocoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.yocto * coulombs.value);
export const rontocoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.ronto * coulombs.value);
export const quectocoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.quecto * coulombs.value);

export const decacoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.deca * coulombs.value);
export const hectocoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.hecto * coulombs.value);
export const kilocoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.kilo * coulombs.value);
export const megacoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.mega * coulombs.value);
export const gigacoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.giga * coulombs.value);
export const teracoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.tera * coulombs.value);
export const petacoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.peta * coulombs.value);
export const exacoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.exa * coulombs.value);
export const zettacoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.zetta * coulombs.value);
export const yottacoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.yotta * coulombs.value);
export const ronnacoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.ronna * coulombs.value);
export const quettacoulombs: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.quetta * coulombs.value);

export const ampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, ElectricCurrent.amperes.value * Time.hours.value);

export const milliampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.milli * ampereHours.value);
export const microampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.micro * ampereHours.value);
export const nanoampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.nano * ampereHours.value);
export const picoampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.pico * ampereHours.value);
export const femtoampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.femto * ampereHours.value);
export const attoampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.atto * ampereHours.value);
export const zeptoampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.zepto * ampereHours.value);
export const yoctoampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.yocto * ampereHours.value);
export const rontoampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.ronto * ampereHours.value);
export const quectoampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.quecto * ampereHours.value);

export const decaampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.deca * ampereHours.value);
export const hectoampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.hecto * ampereHours.value);
export const kiloampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.kilo * ampereHours.value);
export const megaampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.mega * ampereHours.value);
export const gigaampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.giga * ampereHours.value);
export const teraampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.tera * ampereHours.value);
export const petaampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.peta * ampereHours.value);
export const exaampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.exa * ampereHours.value);
export const zettaampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.zetta * ampereHours.value);
export const yottaampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.yotta * ampereHours.value);
export const ronnaampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.ronna * ampereHours.value);
export const quettaampereHours: Measure<ElectricCharge> = Measure.derived(ElectricCharge, Prefix.quetta * ampereHours.value);
