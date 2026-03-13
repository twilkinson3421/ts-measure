import type { Dimension } from "./measure.ts";

// -- Base dimensions --

export type Frequency = Dimension<
    "Frequency",
    "Caesium Hyperfine Frequency"
>;
export const Frequency: Frequency = {
    name: "Frequency",
    baseUnit: "Caesium Hyperfine Frequency",
};

export type Velocity = Dimension<
    "Velocity",
    "Speed of Light in a Vacuum"
>;
export const Velocity: Velocity = {
    name: "Velocity",
    baseUnit: "Speed of Light in a Vacuum",
};

export type Action = Dimension<
    "Action",
    "Quantum of Action"
>;
export const Action: Action = {
    name: "Action",
    baseUnit: "Quantum of Action",
};

export type ElectricCharge = Dimension<
    "Electric Charge",
    "Elementary Charge"
>;
export const ElectricCharge: ElectricCharge = {
    name: "Electric Charge",
    baseUnit: "Elementary Charge",
};

export type Entropy = Dimension<
    "Entropy",
    "Boltzmann Constant"
>;
export const Entropy: Entropy = {
    name: "Entropy",
    baseUnit: "Boltzmann Constant",
};

export type EntitiesPerUnitAmount = Dimension<
    "Entities per Unit Amount",
    "Avogadro Constant"
>;
export const EntitiesPerUnitAmount: EntitiesPerUnitAmount = {
    name: "Entities per Unit Amount",
    baseUnit: "Avogadro Constant",
};

export type LuminousEfficacy = Dimension<
    "Luminous Efficacy",
    "Luminous Efficacy of a Defined Visible Radiation"
>;
export const LuminousEfficacy: LuminousEfficacy = {
    name: "Luminous Efficacy",
    baseUnit: "Luminous Efficacy of a Defined Visible Radiation",
};

// -- Derived dimensions --

export type Time = Dimension<
    "Time",
    "Caesium Hyperfine Period"
>;
export const Time: Time = {
    name: "Time",
    baseUnit: "Caesium Hyperfine Period",
};

export type Length = Dimension<
    "Length",
    "Distance traversed by light during one Caesium Hyperfine Period"
>;
export const Length: Length = {
    name: "Length",
    baseUnit: "Distance traversed by light during one Caesium Hyperfine Period",
};

export type Mass = Dimension<
    "Mass",
    "Constant Unit of Mass"
>;
export const Mass: Mass = {
    name: "Mass",
    baseUnit: "Constant Unit of Mass",
};

export type ElectricCurrent = Dimension<
    "Electric Current",
    "Constant Unit of Electric Current"
>;
export const ElectricCurrent: ElectricCurrent = {
    name: "Electric Current",
    baseUnit: "Constant Unit of Electric Current",
};

export type ThermodynamicTemperature = Dimension<
    "Thermodynamic Temperature",
    "Constant Unit of Thermodynamic Temperature"
>;
export const ThermodynamicTemperature: ThermodynamicTemperature = {
    name: "Thermodynamic Temperature",
    baseUnit: "Constant Unit of Thermodynamic Temperature",
};

export type AmountOfSubstance = Dimension<
    "Amount of Substance",
    "Constant Unit of Amount of Substance"
>;
export const AmountOfSubstance: AmountOfSubstance = {
    name: "Amount of Substance",
    baseUnit: "Constant Unit of Amount of Substance",
};

export type LuminousIntensity = Dimension<
    "Luminous Intensity",
    "Constant Unit of Luminous Intensity"
>;
export const LuminousIntensity: LuminousIntensity = {
    name: "Luminous Intensity",
    baseUnit: "Constant Unit of Luminous Intensity",
};
