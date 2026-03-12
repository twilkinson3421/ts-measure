import * as Area from "./area.ts";
import * as Length from "./length.ts";
import { Measure } from "./measure.ts";
import * as Prefix from "./prefix.ts";
import { Volume } from "./quantity.ts";

export const cubicMetres: Measure<Volume> = Measure.derived(Volume, Length.metres.value ** 3);

export const cubicDecimetres: Measure<Volume> = Measure.derived(Volume, Length.decimetres.value ** 3);
export const cubicCentimetres: Measure<Volume> = Measure.derived(Volume, Length.centimetres.value ** 3);
export const cubicMillimetres: Measure<Volume> = Measure.derived(Volume, Length.millimetres.value ** 3);
export const cubicMicrometres: Measure<Volume> = Measure.derived(Volume, Length.micrometres.value ** 3);
export const cubicNanometres: Measure<Volume> = Measure.derived(Volume, Length.nanometres.value ** 3);
export const cubicPicometres: Measure<Volume> = Measure.derived(Volume, Length.picometres.value ** 3);
export const cubicFemtometres: Measure<Volume> = Measure.derived(Volume, Length.femtometres.value ** 3);
export const cubicAttometres: Measure<Volume> = Measure.derived(Volume, Length.attometres.value ** 3);
export const cubicZeptometres: Measure<Volume> = Measure.derived(Volume, Length.zeptometres.value ** 3);
export const cubicYoctometres: Measure<Volume> = Measure.derived(Volume, Length.yoctometres.value ** 3);
export const cubicRontometres: Measure<Volume> = Measure.derived(Volume, Length.rontometres.value ** 3);
export const cubicQuectometres: Measure<Volume> = Measure.derived(Volume, Length.quectometres.value ** 3);

export const cubicDecametres: Measure<Volume> = Measure.derived(Volume, Length.decametres.value ** 3);
export const cubicHectometres: Measure<Volume> = Measure.derived(Volume, Length.hectometres.value ** 3);
export const cubicKilometres: Measure<Volume> = Measure.derived(Volume, Length.kilometres.value ** 3);
export const cubicMegametres: Measure<Volume> = Measure.derived(Volume, Length.megametres.value ** 3);
export const cubicGigametres: Measure<Volume> = Measure.derived(Volume, Length.gigametres.value ** 3);
export const cubicTerametres: Measure<Volume> = Measure.derived(Volume, Length.terametres.value ** 3);
export const cubicPetametres: Measure<Volume> = Measure.derived(Volume, Length.petametres.value ** 3);
export const cubicExametres: Measure<Volume> = Measure.derived(Volume, Length.exametres.value ** 3);
export const cubicZettametres: Measure<Volume> = Measure.derived(Volume, Length.zettametres.value ** 3);
export const cubicYottametres: Measure<Volume> = Measure.derived(Volume, Length.yottametres.value ** 3);
export const cubicRonnametres: Measure<Volume> = Measure.derived(Volume, Length.ronnametres.value ** 3);
export const cubicQuettametres: Measure<Volume> = Measure.derived(Volume, Length.quettametres.value ** 3);

export const cubicInches: Measure<Volume> = Measure.derived(Volume, Length.inches.value ** 3);
export const cubicYards: Measure<Volume> = Measure.derived(Volume, Length.yards.value ** 3);
export const cubicFeet: Measure<Volume> = Measure.derived(Volume, Length.feet.value ** 3);
export const cubicMiles: Measure<Volume> = Measure.derived(Volume, Length.miles.value ** 3);

export const hectareMetres: Measure<Volume> = Measure.derived(Volume, Area.hectares.value * Length.metres.value);
export const acreFeet: Measure<Volume> = Measure.derived(Volume, Area.acres.value * Length.feet.value);

export const litres: Measure<Volume> = cubicDecimetres;

export const decilitres: Measure<Volume> = Measure.derived(Volume, Prefix.deci * litres.value);
export const centilitres: Measure<Volume> = Measure.derived(Volume, Prefix.centi * litres.value);
export const millilitres: Measure<Volume> = Measure.derived(Volume, Prefix.milli * litres.value);

export const decalitres: Measure<Volume> = Measure.derived(Volume, Prefix.deca * litres.value);
export const hectolitres: Measure<Volume> = Measure.derived(Volume, Prefix.hecto * litres.value);
export const kilolitres: Measure<Volume> = Measure.derived(Volume, Prefix.kilo * litres.value);

export const imperialFluidOz: Measure<Volume> = Measure.derived(Volume, 28.413_0625 * millilitres.value);
export const imperialPints: Measure<Volume> = Measure.derived(Volume, 20 * imperialFluidOz.value);
export const imperialQuarts: Measure<Volume> = Measure.derived(Volume, 2 * imperialPints.value);
export const imperialGallons: Measure<Volume> = Measure.derived(Volume, 8 * imperialPints.value);

export const usGallons: Measure<Volume> = Measure.derived(Volume, 231 * cubicInches.value);
export const usLiquidQuarts: Measure<Volume> = Measure.derived(Volume, 0.25 * usGallons.value);
export const usLiquidPints: Measure<Volume> = Measure.derived(Volume, 0.5 * usLiquidQuarts.value);
export const usFluidOz: Measure<Volume> = Measure.derived(Volume, 0.0625 * usLiquidPints.value);
