export interface Quantity<T extends string = string>
{
    readonly name: T;
}

// -- Base units --

export type Time = "Time";
export const Time: Quantity<Time> = { name: "Time" };

export type Length = "Length";
export const Length: Quantity<Length> = { name: "Length" };

export type Mass = "Mass";
export const Mass: Quantity<Mass> = { name: "Mass" };

export type ElectricCurrent = "ElectricCurrent";
export const ElectricCurrent: Quantity<ElectricCurrent> = { name: "ElectricCurrent" };

export type Temperature = "Temperature";
export const Temperature: Quantity<Temperature> = { name: "Temperature" };

export type AmountOfSubstance = "AmountOfSubstance";
export const AmountOfSubstance: Quantity<AmountOfSubstance> = { name: "AmountOfSubstance" };

// -- Derived units --

export type PlaneAngle = "PlaneAngle";
export const PlaneAngle: Quantity<PlaneAngle> = { name: "PlaneAngle" };

export type SolidAngle = "SolidAngle";
export const SolidAngle: Quantity<SolidAngle> = { name: "SolidAngle" };

export type Frequency = "Frequency";
export const Frequency: Quantity<Frequency> = { name: "Frequency" };

export type Force = "Force";
export const Force: Quantity<Force> = { name: "Force" };

export type Pressure = "Pressure";
export const Pressure: Quantity<Pressure> = { name: "Pressure" };

export type Energy = "Energy";
export const Energy: Quantity<Energy> = { name: "Energy" };

export type Power = "Power";
export const Power: Quantity<Power> = { name: "Power" };

export type ElectricCharge = "ElectricCharge";
export const ElectricCharge: Quantity<ElectricCharge> = { name: "ElectricCharge" };

export type ElectricPotentialDifference = "ElectricPotentialDifference";
export const ElectricPotentialDifference: Quantity<ElectricPotentialDifference> = { name: "ElectricPotentialDifference" };

export type ElectricalResistance = "ElectricalResistance";
export const ElectricalResistance: Quantity<ElectricalResistance> = { name: "ElectricalResistance" };

// -- Derived units with no SI unit --

export type Area = "Area";
export const Area: Quantity<Area> = { name: "Area" };

export type Volume = "Volume";
export const Volume: Quantity<Volume> = { name: "Volume" };

export type Velocity = "Velocity";
export const Velocity: Quantity<Velocity> = { name: "Velocity" };

export type Acceleration = "Acceleration";
export const Acceleration: Quantity<Acceleration> = { name: "Acceleration" };
