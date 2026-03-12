import * as Length from "./length.ts";
import { Measure } from "./measure.ts";
import { Area } from "./quantity.ts";

export const squareMetres: Measure<Area> = Measure.derived(Area, Length.metres.value ** 2);

export const squareDecimetres: Measure<Area> = Measure.derived(Area, Length.decimetres.value ** 2);
export const squareCentimetres: Measure<Area> = Measure.derived(Area, Length.centimetres.value ** 2);
export const squareMillimetres: Measure<Area> = Measure.derived(Area, Length.millimetres.value ** 2);
export const squareMicrometres: Measure<Area> = Measure.derived(Area, Length.micrometres.value ** 2);
export const squareNanometres: Measure<Area> = Measure.derived(Area, Length.nanometres.value ** 2);
export const squarePicometres: Measure<Area> = Measure.derived(Area, Length.picometres.value ** 2);
export const squareFemtometres: Measure<Area> = Measure.derived(Area, Length.femtometres.value ** 2);
export const squareAttometres: Measure<Area> = Measure.derived(Area, Length.attometres.value ** 2);
export const squareZeptometres: Measure<Area> = Measure.derived(Area, Length.zeptometres.value ** 2);
export const squareYoctometres: Measure<Area> = Measure.derived(Area, Length.yoctometres.value ** 2);
export const squareRontometres: Measure<Area> = Measure.derived(Area, Length.rontometres.value ** 2);
export const squareQuectometres: Measure<Area> = Measure.derived(Area, Length.quectometres.value ** 2);

export const squareDecametres: Measure<Area> = Measure.derived(Area, Length.decametres.value ** 2);
export const squareHectometres: Measure<Area> = Measure.derived(Area, Length.hectometres.value ** 2);
export const squareKilometres: Measure<Area> = Measure.derived(Area, Length.kilometres.value ** 2);
export const squareMegametres: Measure<Area> = Measure.derived(Area, Length.megametres.value ** 2);
export const squareGigametres: Measure<Area> = Measure.derived(Area, Length.gigametres.value ** 2);
export const squareTerametres: Measure<Area> = Measure.derived(Area, Length.terametres.value ** 2);
export const squarePetametres: Measure<Area> = Measure.derived(Area, Length.petametres.value ** 2);
export const squareExametres: Measure<Area> = Measure.derived(Area, Length.exametres.value ** 2);
export const squareZettametres: Measure<Area> = Measure.derived(Area, Length.zettametres.value ** 2);
export const squareYottametres: Measure<Area> = Measure.derived(Area, Length.yottametres.value ** 2);
export const squareRonnametres: Measure<Area> = Measure.derived(Area, Length.ronnametres.value ** 2);
export const squareQuettametres: Measure<Area> = Measure.derived(Area, Length.quettametres.value ** 2);

export const hectares: Measure<Area> = squareHectometres;

export const squareInches: Measure<Area> = Measure.derived(Area, Length.inches.value ** 2);
export const squareYards: Measure<Area> = Measure.derived(Area, Length.yards.value ** 2);
export const squareFeet: Measure<Area> = Measure.derived(Area, Length.feet.value ** 2);
export const squareMiles: Measure<Area> = Measure.derived(Area, Length.miles.value ** 2);

export const acres: Measure<Area> = Measure.derived(Area, Length.chains.value * Length.furlongs.value);
